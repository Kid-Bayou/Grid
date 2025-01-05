import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer-copyright">Copyright © 2025 Grid</p>
        <div className="footer-icon-container">
          <Link to="https://github.com">
            icon
          </Link>
          <Link to="https://linkedin.com">
            icon
          </Link>
          <Link to="mailto:example@example.com">
            icon
          </Link>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;