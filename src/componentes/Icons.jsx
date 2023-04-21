const Icons = ({ icono }) => {
  return (
    <div className="icon">
      <a href={icono.href} rel="noreferrer" target="_blank">
        <i className={icono.className}></i>
      </a>
    </div>
  );
};

export default Icons;
