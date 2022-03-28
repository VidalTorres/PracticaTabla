import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import './index.css';


function App() {
  const [precio, setPrecio] = useState([])
  const url ='http://scratchya.com.ar/react/datos.php'
  const verData = async ()=>{
    const repuesta = await fetch(url)
    const data = await repuesta.json()
    console.log(data)
    setPrecio(data)
  }
  useEffect( ()=>{
    verData()
  }, [])

 

  const columnas = [

    {
      name: 'Codigo',
      selector: row => row.codigo
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion
    },
    {
      name: ' Precio',
      selector: row => row.precio
    },
	{
		name: ' Borrar datos',
		selector: row => <button onClick={ () =>  {
      const index = precio.map(dato => {
        return dato.codigo === row.codigo;
      })

      precio.splice(index, 1);
      var newPrecio = [];
      Object.assign(newPrecio, precio);
      setPrecio(newPrecio);
    }}>Borrar</button>
	},
	
	
  ]


  return (
    <div className="App">
      <h1>Tabla de datos</h1>
      <DataTable
      columns={columnas}
      data={precio}
      />
      <footer>
        <p>Jorge Vidal Torres Dzib</p>
      </footer>
    </div>
  );
}

export default App;

