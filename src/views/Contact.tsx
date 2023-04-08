import { IAnchor } from "@types";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import s from "@assets/styles/views/Contact.module.scss";

export default function Contact() {
  useDocumentTitle("Get in touch");
  return (
    <div className={s.wrapper}>
      <div className={s.info__wrapper}>
        <h1>Get in touch</h1>
        <div></div>
      </div>
      <div className={s.inner__wrapper}>
        <div>
          <span>S.</span>
          <Anchor url="https://www.instagram.com/" name="instagram" />
          <Anchor url="https://www.instagram.com/" name="facebook" />
          <Anchor url="https://www.instagram.com/" name="twitter" />
          <Anchor url="https://www.instagram.com/" name="linkedin" />
        </div>
        <div>
          <span>P.</span>
          <Anchor url="https://www.instagram.com/" name="behance" />
          <Anchor url="https://www.instagram.com/" name="dribbble" />
          <Anchor url="https://www.instagram.com/" name="github" />
        </div>
      </div>
      <div className={s.info__wrapper}>
        <div>
          <span className={s.info__header}>say hi!</span>
          <Anchor url="/" name="medialab@studio.agency" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

function Anchor(props: IAnchor) {
  return (
    <>
      <a href={props.url} className={s.anchor}>
        <div className={s.anchor__inner}>
          <span className={s.inner__link}>
            <span className={s.link}>{props.name}</span>
          </span>
          <span className={s.inner__link} aria-hidden="true">
            <span className={s.link}>{props.name}</span>
          </span>
        </div>
      </a>
    </>
  );
}
