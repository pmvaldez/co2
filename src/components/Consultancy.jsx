import React from 'react'
import {db} from '../BD/firebase'
import {
    Card
} from 'antd';
import '../style/collaborator.css';


const Consultancy = () => {

    const [leer, setLeer] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                await db.collection('almacenamiento').orderBy("hora", "desc").onSnapshot(
                    (snap => {
                        const arrayData = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                        setLeer(arrayData);
                        console.log(arrayData)
                    }));
            } catch (error) { console.log(error) }
        }
        obtenerDatos()
    }, [])

    return (
        <>
        { leer.map(item => (
        <div key={item.id}  className="site-card-wrapper collaborator-wrapper">
            <Card  title={item.nombre} bordered={false}>
            {item.TotalCo2}
            </Card>       
      </div>
       ))}
      </>
        
        /* 
        <>
        <Tittle>Historial CO2 </Tittle>
        {
            leer.map(item => (
        <div key={item.id}>
            <h1>{item.TotalCo2}</h1>
        </div>
            ))}
        </>
 */    
)
}

export default Consultancy
