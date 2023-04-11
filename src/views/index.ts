import { lazy } from "react";

const Blog = lazy(() => import("./Blog"));
const Works = lazy(() => import("./Works"));

import Home from "./Home";
import Agency from "./Agency";
import Services from "./Services";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

export { Home, Agency, Services, Works, Blog, Contact, PageNotFound };
