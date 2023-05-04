import "./App.css";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import foto from "./img/Foto.jpg";
import Icons from "./componentes/Icons.jsx";
import Habilidades from "./componentes/Habilidades";
import Certificados from "./componentes/Certificados";
import emailjs from "@emailjs/browser";
import { BiHome } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";

function App() {
  const [iconos, setIconos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [certificados, setCertificados] = useState([]);

  const getIconos = async () => {
    const res = await fetch("/data/data.json");
    const datos = await res.json();
    setIconos(datos.iconos);
    setHabilidades(datos.habilidades);
    setCertificados(datos.certificados);
  };

  useEffect(() => {
    getIconos();
  }, []);

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "desarrollador web Junior",
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

  useEffect(() => {
    let card = document.querySelector(".efectoIzquierda");
    let traerFrente = document.querySelector(".traerFrente");
    let mostrarDerecha = document.querySelector(".mostrarDerecha");

    card.classList.add("mostrarIzquierda");
    traerFrente.classList.add("mostrarAlFrente");
    traerFrente.style.opacity = "1";
    mostrarDerecha.classList.add("mostrarDerecha");
  }, []);

  function mostrarScroll() {
    let card = document.querySelectorAll(".efectoMostrarArriba");

    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < card.length; i++) {
      let alturaCard = card[i].offsetTop;

      if (alturaCard - 650 < scrollTop) {
        card[i].style.opacity = 1;
        card[i].classList.add("mostrarArriba", "template_dc5h5uw");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);

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
      <div className="header">
        <nav className="nav">
          <a href="#presentacion">
            <span>
              <BiHome size="2em" />
            </span>
          </a>
          <a href="#habilidades">
            <span>
              <RiToolsFill size="2em" />
            </span>
          </a>
          <a href="#certificados">
            <span>
              <GrCertificate fill="currentColor" size="2em" />
            </span>
          </a>
          <a href="#about">
            <span>
              <SiAboutdotme size="2em" />
            </span>
          </a>
          <a href="#contactame">
            <span>
              <IoIosContacts size="2em" />
            </span>
          </a>
        </nav>
      </div>
      <section id="presentacion" className="contenedor-presentacion">
        <div className="contenedor-titulos">
          <h1 className="efectoIzquierda titulo">
            Juan Pablo Quintero Bustamante
          </h1>
          <h2 className="sub-titulo">
            Soy <span ref={el}></span>
          </h2>
          <p className="traerFrente parrafo">
            Apasionado por la programación y el desarrollo Web tanto del lado
            del frontend como del backend, me gusta aprender tecnologias y
            herramientas nuevas cada dia.
          </p>
          <div className="icons">
            {iconos.map((icono) => {
              return <Icons icono={icono} key={icono.id} />;
            })}
          </div>
        </div>
        <div className="contenedor-foto">
          <div className="mostrarDerecha foto">
            <img src={foto} alt="foto" />
          </div>
        </div>
      </section>
      <section id="habilidades" className="contenedor-habilidades">
        <h2 className="titulo">Habilidades</h2>
        <p className="parrafo efectoMostrarArriba">
          Estas son mis habilidades con su porcentaje repectivo de conocimiento
          y experiencia que he adquirido de forma autodidacta, a la hora de
          desarrollar contenido Web.
        </p>
        <div className="habilidades">
          {habilidades.map((habilidad) => {
            return <Habilidades habilidad={habilidad} key={habilidad.id} />;
          })}
        </div>
      </section>
      <section id="certificados" className="contenedor-certificados">
        <h2 className="titulo">Certificados de Cursos</h2>
        <p className="parrafo efectoMostrarArriba">
          estos son algunos cursos que he realizado en plataformas como UdeMy,
          de YouTubers tambien he aprendido mucho, y estos son alguno de los
          certificados.
        </p>
        <article>
          <ul className="efectoMostrarArriba certificados">
            {certificados.map((certificado) => {
              return (
                <Certificados certificado={certificado} key={certificado.id} />
              );
            })}
          </ul>
        </article>
      </section>
      <section id="about" className="contenedor-acerca_de_mi">
        <h2 className="titulo">Acerca de Mi</h2>
        <figure className="foto-acerca_de_mi">
          <img src={foto} alt="" />
        </figure>
        <p className="efectoMostrarArriba parrafo">
          Nací en la ciudad de Medellín departamento de Antioquia Colombia, con
          un gran deseo y anhelo de iniciarme en esta gran artistica y
          maravillosa carrera. Disfruto mucho construyendo interfaces para
          usuarios que sean adaptables y escaables para los dispositivos,
          tambien me gusta generar soluciones a los problemas que se puedan
          presentar. Tambien me gusta trabajar en grupo y analizar y debatir los
          retos y mejores soluciones a cualquier problema o eventualidad que se
          presente.
        </p>
        <div className="contenedor-boton_cv">
          <a rel="noreferrer" href="/hoja de vida 2023.pdf" download="Juan Pablo Quintero 2023">
            <button className="boton-cv" type="submit">
              Descarga mi CV
            </button>
          </a>
        </div>
      </section>
      <section id="contactame" className="contenedor-contactame">
        <div className="contenedor-info">
          <h2 className="titulo">Contactame</h2>
          <h2 className="sub-titulo">Enviame un correo</h2>
          <p className="efectoMostrarArriba parrafo">
            Puedes contactarme también enviándome un correo, enviándome un
            mensaje si quieres emplearme u obtener mis servicios.
          </p>
          <h2 className="sub-titulo">
            <b>Teléfono:</b>
            <small> (+57) 324 312 80 49</small>
          </h2>
          <h2 className="sub-titulo">
            <b>Correo:</b> <small>juanpabloqb1990@gmail.com</small>
          </h2>
          <div className="icons">
            {iconos.map((icono) => {
              return <Icons icono={icono} key={icono.id} />;
            })}
          </div>
        </div>
        <div className="contenedor-formulario">
          <form className="formulario-contacto" onSubmit={sendEmail}>
            <div className="row">
              <div className="form-input col-12 col-sm-6">
                <label htmlFor="nombre">Nombres</label>
                <input id="nombre" type="text" name="nombre" />
              </div>
              <div className="form-input col-12 col-sm-6">
                <label htmlFor="correo">Email</label>
                <input type="email" id="correo" name="email" />
              </div>
            </div>
            <div className="form-input ">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea rows="5" id="mensaje" name="mensaje"></textarea>
            </div>
            <div className="">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
