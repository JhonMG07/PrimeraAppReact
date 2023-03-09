import React from "react";
import img1 from "../image/next.png"
function Testimonio() {
  return (
    <div className="contenedor-lenguajes">
      <img
        className="imagen-logo"
        src={img1}
        alt="Foto Next"
      />
      {/* se le añade los dos puntos para subir un nivel y poder entrar a image */} 
      <div className="contenedor-texto-lenguaje">
        <p className="nombre-lenguaje">Next JS</p>
        <p className="creador-lenguaje">Vercel</p>
        <p className="texto-lenguaje">
          NextJS es un framework JavaScript ligero y de código abierto creado
          sobre React, que permite desarrollar aplicaciones y sitios web muy
          rápidos y fáciles de usar. Aunque tiene una curva de aprendizaje,
          incluso los desarrolladores nuevos de front-end pueden aprenderlo
          rápidamente. Se basa en Babel y Node.js, integrándose con React para
          desarrollar aplicaciones.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
