import React, { useEffect, useState } from "react";
import "./App.css";
import Typed from "typed.js";

import foto from "./img/Foto.jpg";
import Icons from "./componentes/Icons.jsx";
import Habilidades from "./componentes/Habilidades";
import Certificados from "./componentes/Certificados";

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
    mostrarDerecha.classList.add("mostrarDerecha");
  }, []);

  function mostrarScroll() {
    let card = document.querySelectorAll(".efectoMostrarArriba");

    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < card.length; i++) {
      let alturaCard = card[i].offsetTop;

      if (alturaCard - 650 < scrollTop) {
        card[i].style.opacity = 1;
        card[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);

  /* function mostrarScroll2() {
    let card = document.querySelectorAll(".contenedor-cursos");

    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < card.length; i++) {
      let alturaCard = card[i].offsetTop;

      if (alturaCard - 650 < scrollTop) {
        card[i].style.opacity = 1;
        card[i].classList.add("mostrarArriba");
      }
    }
  } */

  // window.addEventListener("scroll", mostrarScroll2);

  return (
    <div className="contenedor">
      <section className="contenedor-presentacion">
        <div className="contenedor-titulos">
          <h1 className="efectoIzquierda titulo">
            Juan Pablo Quintero Bustamante
          </h1>
          <div className="contenedor-descripcion">
            <h2 className="titulo-descripcion">
              Soy <span ref={el}></span>
            </h2>
          </div>
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
      <section className="contenedor-habilidades">
        <h2 className="titulo">Habilidades</h2>
        <div className="habilidades">
          {habilidades.map((habilidad) => {
            return <Habilidades habilidad={habilidad} key={habilidad.id} />;
          })}
        </div>
      </section>
      <section className="efectoMostrarArriba contenedor-cursos">
        <h2 className="titulo">Certificados de Cursos</h2>
        <article className="efectoMostrarArriba certificados">
          {certificados.map((certificado) => {
            return (
              <Certificados certificado={certificado} key={certificado.id} />
            );
          })}
        </article>
      </section>
      <section className="contenedor-acerca_de_mi">
        <h2 className="titulo">Acerca de Mi</h2>
        <article className="acerca-de-mi">
          <figure className="foto-acerca_de_mi">
            <img src={foto} alt="" />
          </figure>
          <p className="efectoMostrarArriba parrafo">
            Nací en la ciudad de Medellín departamento de Antioquia Colombia,
            con un gran deseo y anhelo de iniciarme en esta gran artistica y
            maravillosa carrera llamada Analisis y Desarrollo de aplicaciones
            Web. Disfruto mucho construyendo interfaces para usuario que sean
            adaptables para los dispositivos, tambien me gusta generar
            soluciones a los problemas que puedan presentar las aplicaciones.
            Todas las Tecnologías que he aprendiendo y estoy aprendiendo son de
            manera autodidacta en las plataformas como Udemy o platzi con
            relación a desarrollo front-end y back-end.
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
