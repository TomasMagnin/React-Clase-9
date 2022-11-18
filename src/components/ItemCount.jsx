import React, { useState, useContext } from 'react';

// Le pasamos todos los parametros a la funcion ItemCount, el valor inicial, el maximo al que puede llegar, 

// El onAdd lo determina el padre, solo le pasamos el comportamiento del onAdd.
export default function ItemCount({ ini, max, onAdd }) {

  const [count, setCount] = useState(ini); // Inicia en el valor que definicmos como inicial.
  function restar() {
    if (count >= 2) { 
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {              // Mientras sea menor al maximo va sumar. 
      setCount(count + 1);
    }
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      {count}
      <button onClick={sumar}>+</button>
      <br />

      {/* Le  pasamos pro porps al padre el contador, que es cuantos productos quiere agregar */}
      
      {/* El contador le pasa el nro de productos a la botonera */}
      
      <button onClick={() => onAdd(count)}>AGREGAR</button>
    </div>
  );
}