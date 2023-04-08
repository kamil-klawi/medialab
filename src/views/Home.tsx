import { servicesData } from "@utils";
import { Form, Footer } from "@components";
import s from "@assets/styles/views/Home.module.scss";

export default function Home() {
  const renderList = servicesData.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.header}</p>
        <p>{item.description}</p>
        <span>
          {item.btn}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      </div>
    );
  });
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
        <div className={s.wrapper__grid}>{renderList}</div>
        <div className={s.wrapper__form}>
          <section className={s.form__header}>
            <span>our works</span>
            <span>Projects [4]</span>
          </section>
          <Form />
        </div>
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
