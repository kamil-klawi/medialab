import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Footer, Cards } from "@components";
import s from "@assets/styles/views/Agency.module.scss";

export default function Agency() {
  useDocumentTitle("Agency");
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__image} />
      <div className={s.inner__wrapper}>
        <div className={s.wrapper__content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            molestiae assumenda quasi, iusto, molestias voluptates repellat qui
            enim nulla adipisci dolores, error ab nisi tempora aliquid nihil
            similique modi eos! Adipisci nam totam eveniet quia quod libero modi
            minima quis!
          </p>
        </div>
        <section className={s.wrapper__team}>
          <span className={s.wrapper__header}>our story</span>
          <span className={s.wrapper__header}>who we are?</span>
          <span className={s.wrapper__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            molestiae assumenda quasi, iusto, molestias voluptates repellat qui
            enim nulla adipisci dolores, error ab nisi tempora aliquid nihil
            similique modi eos! Adipisci nam totam eveniet quia quod libero modi
            minima quis!
          </span>
          <span className={s.wrapper__subHeader}>what we do?</span>
          <span className={s.wrapper__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            molestiae assumenda quasi, iusto, molestias voluptates repellat qui
            enim nulla adipisci dolores, error ab nisi tempora aliquid nihil
            similique modi eos! Adipisci nam totam eveniet quia quod libero modi
            minima quis!
          </span>
        </section>
        <section className={s.wrapper__team}>
          <span className={s.wrapper__header}>our team</span>
          <span className={s.wrapper__header}>management staff</span>
          <div className={s.wrapper__card}>
            <Cards />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
