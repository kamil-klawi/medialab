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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            veniam reiciendis iure animi ab illo reprehenderit fuga quis nobis
            consectetur dolorum ad saepe modi ipsa, culpa quos impedit totam rem
            et ex assumenda nisi obcaecati. Rerum ab officiis recusandae
            assumenda!
          </p>
        </div>
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
