import medalla from "../img/medalla.png";
const Certificados = ({ certificado }) => {
  return (
    <li className="certificado">
      <img src={certificado.urlImagen} alt={certificado.nombre} />

      <div className="contenedor-medalla">
        <img className="medalla" src={medalla} alt="medalla" />
      </div>
    </li>
  );
};

export default Certificados;
