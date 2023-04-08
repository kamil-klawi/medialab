import s from "@assets/styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span>&copy; medialab 2023</span>
      <div className={s.footer__content}>
        <span>privacy police</span>
        <span>cookies police</span>
      </div>
    </footer>
  );
}
