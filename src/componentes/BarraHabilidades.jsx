import styled, { keyframes } from "styled-components";

const BarraHabilidades = ({width}) => {
  const Barra = styled.div`
    margin: auto;
    width: 200px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 20px 25px 45px rgba(0, 0, 0, 0.4);
    padding: .5px;
  `;

  const anime = keyframes`
        0%{width: 20%};
        100%{width: ${width}%};
    `;

  const Progreso = styled.div`
    width: ${width}%;
    height: 100%;
    background-color: #00ff95;
    border-radius: 10px;
    animation: ${anime} 10s ease;
    text-align: center;
    font-weight: 700;
    color: white;
    line-height: normal;
  `;

  return (
    <div>
      <Barra>
        <Progreso>
            {width} %
        </Progreso>
      </Barra>
    </div>
  );
};

export default BarraHabilidades;
