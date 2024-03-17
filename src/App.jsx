import "./App.css";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import foto from "/img/Foto.jpg";
import Icons from "./componentes/Icons.jsx";
import Habilidades from "./componentes/Habilidades";
import Certificados from "./componentes/Certificados";
import emailjs from "@emailjs/browser";
import NavBar from "./componentes/NavBar.jsx";
import Proyectos from "./componentes/Proyectos.jsx";

function App() {
  const [iconos, setIconos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [certificados, setCertificados] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  const getIconos = async () => {
    const res = await fetch("/data/data.json");
    const datos = await res.json();
    setIconos(datos.iconos);
    setHabilidades(datos.habilidades);
    setCertificados(datos.certificados);
    setProyectos(datos.proyectos)
  };

  useEffect(() => {
    getIconos();
  }, []);

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "desarrollador web",
        "estudiante autodidacta",
        "desarrollador Fullstack",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      backDelay: 2500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_jwl08nk",
        "template_dc5h5uw",
        event.target,
        "bVN74xK_3s0m-s6VJ"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <main className="contenedor">
      <NavBar/>
      <section id="presentacion" className="contenedor-presentacion">
        <div className="contenedor-izquierda">
          <h1 className="titulo">
            Juan Pablo Quintero Bustamante
          </h1>
          <h2 className="sub-titulo">
            Soy <span ref={el}></span>
          </h2>
          <p className="parrafo">
            Apasionado por la programación y el desarrollo Web tanto del lado
            del frontend como del backend.
          </p>
          <div className="icons">
            {iconos.map((icono) => {
              return <Icons icono={icono} key={icono.id} />;
            })}
          </div>
        </div>
        <div className="contenedor-derecha">
          <div className="foto">
            <img src={foto} alt="foto" />
          </div>
        </div>
      </section>
      <section id="habilidades" className="contenedor-habilidades">
        <div className="contenedor-izquierda">
          <h2 className="titulo">Habilidades</h2>
          <p className="parrafo">
            Estas son mis habilidades con su porcentaje repectivo de conocimiento
            y experiencia que he adquirido de forma autodidacta, a la hora de
            desarrollar contenido Web.
          </p>

        </div>
        <div className="contenedor-derecha">
          <div className="habilidades">
            {habilidades.map((habilidad) => {
              return <Habilidades habilidad={habilidad} key={habilidad.id} />;
            })}

          </div>
        </div>
      </section>
      <section id="certificados" className="contenedor-certificados">
          <div className="contenedor-izquierda">
            <h2 className="titulo">Certificados de Cursos</h2>
            <p className="parrafo">Estos son mis certificados que he adquirido en la plataforma UdeMy y el bootcamp Makaia donde me certifiqué como backend developer</p>
          </div>
          <div className="contenedor-derecha">
            <div className="certificados">
                {certificados.map((certificado) => {
                  return (
                    <Certificados certificado={certificado} key={certificado.id} />
                  );
                })}
            </div>
          </div>
      </section>
      <section id="proyectos" className="contenedor-proyectos">
        <div className="contenedor-izquierda">
          <h2 className="titulo">Proyectos</h2>
          <p className="parrafo">Estos son algunos de mis mejores proyectos, donde aprendí y fortalecí mis habilidades anteriormente descritas, tanto en el backend como en el frontend</p>
        </div>
        <div className="contenedor-derecha">
              <Proyectos proyectos={proyectos}/>
        </div>
      </section>
      <section id="about" className="contenedor-acerca_de_mi">
        <div className="contenedor-izquierda">
          <h2 className="titulo">Acerca de Mi</h2>
        </div>
        <div className="contenedor-derecha">
          <p className="parrafo">
            Nací en la ciudad de Medellín departamento de Antioquia Colombia. 
            Tengo 34 años,
            disfruto mucho construyendo interfaces para
            usuarios que sean adaptables y escalables para los dispositivos,
            soy agil en generar soluciones a los problemas que se puedan
            presentar. Tambien me gusta trabajar en grupo y analizar y debatir los
            retos y mejores soluciones a cualquier problema o eventualidad que se
            presente.
          </p>
          <a rel="noreferrer" href="/Hoja de Vida Juan Pablo Quintero.pdf" download="CV Juan Pablo Quintero 2024">
            <button className="boton-cv" type="submit">
              Descarga mi CV
            </button>
          </a>
        </div>
      </section>
      <section id="contactame" className="contenedor-contactame">
        <div className="contenedor-izquierda">
          <h2 className="titulo">Contáctame</h2>
          <p className="efectoMostrarArriba parrafo">
            Puedes contactarme enviándome un correo si quieres emplearme u obtener mis servicios.
          </p>
        </div>
        <div className="contenedor-derecha">
          <form className="formulario-contacto" onSubmit={sendEmail}>
            <div className="form-input">
              <input id="nombre" type="text" name="nombre" placeholder="nombres"/>
            </div>
            <div className="form-input">
              <input type="email" id="correo" name="email" placeholder="email"/>
            </div>
            <div className="form-input">
              <textarea rows="5" id="mensaje" name="mensaje" placeholder="mensaje"></textarea>
            </div>
            <div className="form-input">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
