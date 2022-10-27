import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <h1 className="mt-5 footer">
        <div className="contLinkiner">
          <div className="row">
            <div className="footer-col">
              <h4>compLinkny</h4>
              <ul className="mainCala">
                <li>
                  <Link to="#">Linkbout us</Link>
                </li>
                <li>
                  <Link to="#">our services</Link>
                </li>
                <li>
                  <Link to="#">privLinkcy policy</Link>
                </li>
                <li>
                  <Link to="#">LinkffiliLinkte progrLinkm</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Footer;
