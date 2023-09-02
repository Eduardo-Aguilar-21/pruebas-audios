import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [datos, setDatos] = useState();

  const ListarDatos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/sonidosVelocidad/5');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  useEffect(() => {
    ListarDatos();
  }, []);

  const audioURL2 = datos && datos.sonidoVelocidad;
  return (
    <div className="App">
      <h1>Hola mundo2 </h1>
      <h1>{datos && datos.nombre}</h1>
      {datos && (
        <audio controls>
          <source src={datos.sonidoVelocidad} type="audio/mpeg" />
          Tu navegador no admite la reproducción de audio.
        </audio>
      )}


    </div>
  );
}

export default App;
