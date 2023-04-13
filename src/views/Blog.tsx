import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { BlogList, Footer } from "@components";
import s from "@assets/styles/views/Blog.module.scss";

export default function Blog() {
  useDocumentTitle("Blog");
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__magazine}>
        <BlogList />
      </div>
      <Footer />
    </div>
  );
}
