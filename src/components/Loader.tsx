import s from "@assets/styles/components/Loader.module.scss";

export default function Loader() {
  return (
    <div className={s.wrapper__letters}>
      <div className={s.wrapper__row}>
        <div className={`${s.letter} ${s.top__right}`}>L</div>
        <div className={`${s.letter} ${s.top__left}`}>M</div>
      </div>
      <div className={s.wrapper__row}>
        <div className={`${s.letter} ${s.bottom__right}`}>6</div>
        <div className={`${s.letter} ${s.bottom__left}`}>9</div>
      </div>
    </div>
  );
}
