import BarraHabilidades from "./BarraHabilidades";

const Habilidades = ({habilidad}) => {
  return (
    <div className="habilidad">
      <img src={habilidad.url} alt={habilidad.nombre} style={habilidad.nombre === "javascript" ? {width:100} :  {width:150}}/>
      <p className="parrafo">{habilidad.nombre}</p>
      <div>
        <BarraHabilidades width={habilidad.habilidad} />
      </div>
    </div>
  );
};

export default Habilidades;
