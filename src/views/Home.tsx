import { FormServices, FormWorks, Footer } from "@components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import s from "@assets/styles/views/Home.module.scss";

export default function Home() {
  useDocumentTitle("Start page");
  return (
    <div className={s.wrapper}>
      <div className={s.inner__wrapper}>
        <div className={s.wrapper__image} />
        <div className={s.wrapper__content}>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in
            repellat minus optio exercitationem quos pariatur, ipsum quidem modi
            quae velit cum facilis natus quasi suscipit eos. Ex rerum asperiores
            nesciunt tempora temporibus nostrum ut labore, vel esse qui non.
          </span>
        </div>
        <div className={s.wrapper__grid}>
          <FormServices />
        </div>
        <div className={s.wrapper__form}>{FormWorks(s.form__header)}</div>
        <div className={s.wrapper__images}>
          <div className={s.wrapper__image} />
          <div className={s.wrapper__image} />
          <div className={s.wrapper__image} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
