import React from 'react'
import { useEffect } from 'react';

export default function TestEventos() {

  {/* Por lo genereal se programa la funcion antes del Return */}
  /* El nombre handle se usa por convencion */
  /* La primera funcion que se ejecuta a raiz de un evento */
  /* El evento sintetico de React, es un evento que crea React por encima del evento normal y le añade muchas funcionaldiades para que sea compatible en todos los exploradores */
  
  /* Ej - 0*/

    /*  function handleClickP (e) {               // La "e" significa evento, lama ese evento. Pero luego no es necesario invocar ese evento.
        console.log("Hicieron click");
        
        console.log(e);                       // Hacemos un log del evento, y nos devuelve el objeto. En target nos dice que invoco el click, en key que tecla apretamos. Este evento sintetico funciona en todos los navegadores.
        console.log(e.nativeEvent);           // Este es el evento nativo de cualquier explorador se llama pointer event, el del react dice synthetic 
        console.log(e.targert);               // Este log vemos la etiqueta que disparo el evento, pero en el evento sintetico de React.
        console.log(e.nativeEvent.targert);   // Este log vemos la etiqueta que disparo el evento, pero en el evento nativo.
    } */




   







  
  /* Ej - JS */

      // Ejemplo de Evento, al estilo de JavaScript, pero sin usar la convenxion de React, una solucion cuando no tengo otra opcion.
      /* function handleWindowResize() {

      // Se ejecuta cuando se cambia de tamaño la ventana
      alert("Estan haciendo un resize en la ventana/window");

      } */



  /* Ej - 1 */

      // La programacion siempre va en una funcion o en un useEffect
      // Podemos hacer un useEffect para montar y otro para desmontar el componetne, pero se puede hacer uno solo useEffect para mopntar y desmontar el componente.

      // Esto es cuando se monta el componente.
      /* useEffect(() => {
        alert("En este juego no se puede ni agrandar ni achicar la pantalla.")
          window.addEventListener("resize", handleWindowResize);
      } ,[]);
    
    
      // Esto es cuando se va el componente.
      useEffect(()=> {
        return() => {
          window.removeEventListener("resize", handleWindowResize);
          alert("se esta yendo el componente");
        }
      },[]); */



  /* Ej - 2 */

      // Hcemos todo en un solo useEffect, montaje y demontaje.

     /*  useEffect(()=> {

        // Esto es cuando se monta el componente.
        window.addEventListener("resize", handleWindowResize);
        return() => {

          // Esto es cuando se va el componente.
          window.removeEventListener("resize", handleWindowResize);
          alert("se esta yendo el componente");
        }
      },[]); */



        /* Burbujeos con varios onClick, debemos parara la propagacion, siempre que tengamos varios clicks se van a propagar en el pa */

       /* Ej - 1 */

    function handleClickDivAbuelo(e) {
        alert("click en el Abuelo");
    }
    function handleClickDivPadre(e) {
      alert("click en el Padre");
    }
    function handleClickPHhijo(e) {
      alert("click en el hijo");
    }



  return (

    

    <div onClick={handleClickDivAbuelo} style={{ border: "1px solid red", margin: "10px" }}>

    Abuelo

      <div onClick={handleClickDivPadre} style={{ border: "1px solid green", margin: "10px" }}>
        Padre
        
        <br />

        {/* El objetivo <p> es el target donde se ejecuto el evento, onClick es el evento, y luego esta la funcion */}
        {/* Window seria el target, resize el evento, y handlewindowResize la funcion.  */}
        {/* En el target p, escuchamos el evento Onclick y ejecutamos la funcion handleclick */}

       <div> <p onClick={handleClickPHhijo}  style={{ border: "1px solid blue", margin: "10px" }}> Hijo </p>  

        </div>
        <br />

        {/* <div onClick={handleClickP} >Test Eventos</div> */}
          
      </div>
    </div>
  )
}
