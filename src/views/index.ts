import { lazy } from "react";

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const Blog = lazy(() => wait(3000).then(() => import("./Blog")));
const Works = lazy(() => wait(3000).then(() => import("./Works")));

import Home from "./Home";
import Agency from "./Agency";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

export { Home, Agency, Works, Blog, Contact, PageNotFound };
