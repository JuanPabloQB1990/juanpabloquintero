import medalla from "../img/medalla.png";
const Certificados = ({ certificado }) => {
  return (
    <div className="certificado">
      <img src={certificado.urlImagen} alt={certificado.nombre} />
      <a
        rel="noreferrer"
        download={`certificado ${certificado.nombre}`}
        href={certificado.urlDescarga}
      >
        <span className="material-symbols-outlined">download</span>
      </a>
        <div className="contenedor-medalla">
          <img className="medalla" src={medalla} alt="medalla" />
        </div>
    </div>
  );
};

export default Certificados;
