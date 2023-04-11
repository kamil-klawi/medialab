import { worksData } from "@utils";
import s from "@assets/styles/components/WorkCard.module.scss";

export default function WorksList() {
  const renderList = worksData.map((item, index) => {
    return WorkCard(index, item.name, item.year);
  });
  return <>{renderList}</>;
}

function WorkCard(index: number, name: string, year: number) {
  return (
    <div className={s.card} key={index}>
      <div className={s.card__image} />
      <div className={s.card__inner}>
        <div className={s.card__content}>
          <span className={s.card__text}>{name}</span>
          <span className={s.card__text}>{year}</span>
        </div>
        <div className={s.card__button}>
          <span className={s.button__text}>check the website</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={s.button__svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
