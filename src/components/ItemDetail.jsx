import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { contextoGeneral } from '../components/ContextContainer';

export default function ItemDetail({ producto }) {

  const { carrito, addItem } = useContext(contextoGeneral);

  function onAdd(cant) {
    alert("Quiere agregar" + x + "de este Item" + producto.name )

    addItem(producto, cant);


  }
  return (
    <div style={{ border: '2px solid violet', margin: '10px' }}>
      {producto.id ? (
        <>
          ID: {producto.id}
          <br />
          PRODUCTO: {producto.nombre}
          <br />
          CATEGORIA: {producto.categoria}
          <br />
          PRECIO: {producto.precio}
          <br />
          SOTCK: {producto.stock}
          <br />


        {/* Para que la botonera ItemCount se intercambiable le pasamos por props lo que necesita, entoces le pasamos, en cuanto inicia, y un fin, siempre va ser totalmente independiente al prodructo, para poder usarlo donde queramos*/}

        {/*  Este hijo queda abstracto luego de pasarle las propiedades. por que se puede usar en cuqluier otro proyecto.  */}

        {/* La pasamos la funcion onAdd que es cuando se agrega un item, le decimos que tiene que hacer, y el hijo queda abstracto para usarlo en otro proyecto */}

        {/* Para que funcione en el itemCount le debemos pasar los parametros inicio, maximo y la llamada a la funcion */}

          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />  {/* Si le pasamos aca todos los datos del Item no es intercambiable !! */}
       
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}