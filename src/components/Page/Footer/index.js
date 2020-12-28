import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="http://">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <span>@2020 By Paola.id</span>
    </footer>
  );
}
