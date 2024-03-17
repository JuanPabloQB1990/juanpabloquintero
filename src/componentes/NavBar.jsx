import { BiHome } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";
import { DiReact } from "react-icons/di";

const NavBar = () => {
  return (
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
          <a href="#proyectos">
            <span>
              <DiReact size="2em" />
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
  )
}

export default NavBar
