import React from "react";

import "../StyleSheet/tertimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-lenguajes">
      <img className="imagen-logo" src={props.imagen} alt={`Foto-${props.nombreFoto}`} />
      {/* se le añade los dos puntos para subir un nivel y poder entrar a image */}
      <div className="contenedor-texto-lenguaje">
        <p className="nombre-lenguaje"><strong>{props.nombre}</strong></p>
        <p className="creador-lenguaje"><strong>{props.creator}</strong></p>
        <p className="texto-lenguaje">"{props.descripcion}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
