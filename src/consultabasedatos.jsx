import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function Consulta() {
  
  const [datos, setDatos] = useState();

  const ListarDatos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/empresas/1');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  

  useEffect(() => {
    ListarDatos();
  }, []);
  

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <h1>{datos && datos.nombre}</h1>
    </div>
  );
}

export default App;
