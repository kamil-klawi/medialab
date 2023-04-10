import { useNavigate } from "react-router-dom";
import s from "@assets/styles/components/Footer.module.scss";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <span>&copy; medialab {currentYear()}</span>
        <span>|</span>
        <span>All right reserved</span>
      </div>
      <div className={s.footer__content}>
        <span onClick={() => navigate("/terms")}>terms</span>
        <span>|</span>
        <span onClick={() => navigate("/privacy")}>privacy</span>
        <span>|</span>
        <span onClick={() => navigate("/cookies")}>cookies</span>
      </div>
    </footer>
  );
}

function currentYear() {
  const year: number = new Date().getFullYear();
  return year;
}
