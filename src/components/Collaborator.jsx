import React from 'react'
import 'antd/dist/antd.css';
import {db, auth} from '../BD/firebase';
import '../style/collaborator.css';
import {
    Form,
    Input,
} from 'antd';
import conversionFactor from '../BD/factor';


const Collaborator = () => {

  const [datos, setDatos] = React.useState({
    employees: '',
    startPoint: '',
    endPoint: '',
    typeTransport: 0,
    kilometers: 0,
    numberOfEmployees: 0,
    typeTravel: 0,
  })

  const [result, setResult] = React.useState(0)

  const handleSubmit = e => {
    e.preventDefault();
    setDatos({
      employees: '',
      startPoint: '',
      endPoint: '',
      typeTransport: 0,
      kilometers: 0,
      numberOfEmployees: 0,
      typeTravel: 0
    })
  }

  const setValueOnChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const setResultOnChange = event => {
    const value = event.target.value;
    setDatos({
      ...datos,
      [event.target.name]: value
    });
    setResult(Boolean(result) ? result * parseFloat(value) : parseInt(value));    
  }
  
//Enviando datos a firebase
const agregaDatos= async (e) => {
  e.preventDefault()
  try {
    const newDatos = {
      nombre: datos.employees,
      partida: datos.startPoint,
      llegada: datos.endPoint,
      kilometraje: datos.kilometers,
      transporte: datos.typeTransport,
      cantEmpleados: datos.numberOfEmployees,
      idaVuelta: datos.typeTravel,
      TotalCo2: result,
      hora: new Date(),
      uid: auth.currentUser.uid
    }

    const data = await db.collection("almacenamiento").add(newDatos);
    console.log(data)
  } 
  catch (error) {
    console.log(error)
  }
} 
  return (     
    <div className="collaborator-wrapper ">
      <Form  onSubmit={handleSubmit}>
      <Form.Item label="Nombre">
          <Input type="text" name="employees" onChange={setValueOnChange}/>
        </Form.Item>
        <Form.Item label="Punto de Partida">
          <Input type="text" name="startPoint" onChange={setValueOnChange}/>
        </Form.Item>
        <Form.Item label="Punto de LLegada">
          <Input type="text" name="endPoint" onChange={setValueOnChange}/>
        </Form.Item>
        <Form.Item label="Kilometraje"> 
          <Input type="number" name="kilometers" onChange={setResultOnChange}/>
        </Form.Item>
        <Form.Item label="Medio de Transporte">
          <select name="typeTransport" onChange={setResultOnChange}>
            {conversionFactor.map(({label, value}) => {               
              return <option value={value}>{label}</option>
            })}
          </select>
        </Form.Item>
        <Form.Item label="Cant de Empleados">
          <Input type="number" name="numberOfEmployees" onChange={setResultOnChange}/>
        </Form.Item>
        <Form.Item label="Solo Ida">
          <Input type="radio" name="typeTravel" value="1" onChange={setResultOnChange}/>
        </Form.Item>
        <Form.Item label="Ida y Vuelta">
          <Input type="radio" name="typeTravel" value="2" onChange={setResultOnChange}/>
        </Form.Item>
          <button type="submit" onClick={agregaDatos}>Enviar</button>
      </Form> 
      <div>
        <h2> Tu huella total es:  { result}</h2>
      </div>
   </div>
  )
}

export default Collaborator
