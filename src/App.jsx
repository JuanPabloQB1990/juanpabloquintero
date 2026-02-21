import "./App.css";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import foto from "/img/Foto.jpg";
import Icons from "./componentes/Icons.jsx";
import Habilidades from "./componentes/Habilidades";
import Certificados from "./componentes/Certificados";
import NavBar from "./componentes/NavBar.jsx";
import Proyectos from "./componentes/Proyectos.jsx";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BotonContactame from "./componentes/BotonContactame.jsx";
import ChekboxDarkMode from "./componentes/ChekboxDarkMode.jsx";

function App() {
  const [iconos, setIconos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [certificados, setCertificados] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const getIconos = async () => {
    const res = await fetch("/data/data.json");
    const datos = await res.json();
    setIconos(datos.iconos);
    setHabilidades(datos.habilidades);
    setCertificados(datos.certificados);
    setProyectos(datos.proyectos);
  };

  useEffect(() => {
    getIconos();
  }, []);

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Fullstack Developer | Node.js, Java & React.js",
        "Construyo aplicaciones web escalables",
        "Especializado en APIs REST y arquitectura backend",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/juanpabloqb1990@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          asunto,
          mensaje,
          _subject: "Nuevo mensaje desde tu portafolio",
        }),
      });

      const data = await response.json();

      if (data.success === "true") {
        toast.success("Mensaje enviado correctamente 🚀");

        setNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
      } else {
        toast.error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast.error("Error de conexión");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="contenedor">
      <ToastContainer />
      <ChekboxDarkMode />
      <NavBar />
      <section id="presentacion" className="contenedor-presentacion">
        <div className="contenedor-izquierda">
          <h1 className="titulo">Juan Pablo Quintero Bustamante</h1>
          <h2 className="sub-titulo">
            <span ref={el}></span>
          </h2>
          <p className="parrafo">
            Desarrollador Fullstack con enfoque en backend escalable y frontend
            moderno. Experiencia construyendo APIs REST, aplicaciones con React
            y despliegues con Docker y Kubernetes.
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
            Estas son mis habilidades con su porcentaje repectivo de
            conocimiento y experiencia.
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
          <p className="parrafo">
            Estos son mis certificados que he adquirido en plataformas Online y
            el bootcamp Makaia donde me certifiqué como backend developer
          </p>
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
          <p className="parrafo">
            Estos son algunos de mis mejores proyectos, donde puse en practica
            mis habilidades tanto en el backend como en el frontend
          </p>
        </div>
        <div className="contenedor-derecha">
          <Proyectos proyectos={proyectos} />
        </div>
      </section>
      <section id="about" className="contenedor-acerca_de_mi">
        <div className="contenedor-izquierda">
          <h2 className="titulo">Acerca de Mi</h2>
        </div>
        <div className="contenedor-derecha">
          <p className="parrafo">
            Nací en la ciudad de Medellín departamento de Antioquia Colombia.
            Tengo 34 años, me apasiona crear interfaces para usuarios que sean
            adaptables y escalables para los dispositivos. Soy agil en generar
            soluciones. Tambien me gusta trabajar en grupo y analizar y debatir
            los retos y mejores soluciones a cualquier problema o eventualidad
            que se presente.
          </p>
          <a
            rel="noreferrer"
            href="/Hoja de Vida Juan Pablo Quintero.pdf"
            download="CV Juan Pablo Quintero 2024"
          >
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
            Puedes contactarme enviándome un correo si quieres emplearme u
            obtener mis servicios.
          </p>
        </div>
        <div className="contenedor-derecha">
          <form className="formulario-contacto" onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                name="nombre"
                placeholder="Nombres"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-input">
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                required
              />
            </div>

            <div className="form-input">
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-input">
              <button type="submit">
                {cargando ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
