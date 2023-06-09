import BarraHabilidades from "./BarraHabilidades";

const Habilidades = ({habilidad}) => {
  return (
    <div className="efectoMostrarArriba habilidad">
      <img src={habilidad.url} alt={habilidad.nombre} />
      <p className="efectoMostrarArriba parrafo">{habilidad.nombre}</p>
      <div>
        <BarraHabilidades width={habilidad.habilidad} />
      </div>
    </div>
  );
};

export default Habilidades;
