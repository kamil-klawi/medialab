import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Footer, WorksList } from "@components";
import s from "@assets/styles/views/Works.module.scss";

export default function Works() {
  useDocumentTitle("Works");
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__works}>
        <WorksList />
      </div>
      <Footer />
    </div>
  );
}
