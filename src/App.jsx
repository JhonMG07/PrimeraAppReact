import React from "react";
import "./App.css";
import Testimonio from "./componentes/testimonio";
import img1 from "./image/next.png";
import img2 from "./image/nodejs.png";
import img3 from "./image/react.png";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>LIBRERIAS Y FRAMEWORKS</h1>
        <Testimonio
          imagen={img1}
          nombre="NextJS"
          creator="Vercel"
          nombreFoto = "next"
          descripcion="¿Qué es y para qué sirve NextJS?
          Resultado de imagen para nextjs que es y quien lo creo
          NextJS es un framework JavaScript ligero y de código 
          abierto creado sobre React, que permite desarrollar aplicaciones 
          y sitios web muy rápidos y fáciles de usar. Aunque tiene una curva d
          e aprendizaje, incluso los desarrolladores nuevos de front-end pueden a
          prenderlo rápidamente. Se basa en Babel y Node"
        />

        <Testimonio
          imagen={img2}
          nombre="Nodejs"
          creator="Ryan Lienhart Dahl"
          nombreFoto = "node"
          descripcion="Node (o más correctamente: Node.js) es un 
          entorno que trabaja en tiempo de ejecución, de código abierto, 
          multi-plataforma, que permite a los desarrolladores crear toda clase 
          de herramientas de lado servidor y aplicaciones en JavaScript. 
          La ejecución en tiempo real está pensada para usarse fuera del contexto 
          de un explorador web (es decir, ejecutarse directamente en una computadora o 
            sistema operativo de servidor)."
        />

        <Testimonio
          imagen={img3}
          nombre="React"
          creator="Jordan Walke"
          nombreFoto = "react"
          descripcion="React es una biblioteca de código abierto de JavaScript para 
          crear interfaces de usuario de front-end. A diferencia de otras bibliotecas 
          de JavaScript que proporcionan un marco de trabajo de la aplicación completo,
           React se centra únicamente en la creación de vistas de aplicación mediante
            unidades encapsuladas llamadas componentes que mantienen el estado y generan 
            los elementos."
        />

        <h2>Jhon Meza 09/03/2023</h2>
      </div>
    </div>
  );
}
export default App;
