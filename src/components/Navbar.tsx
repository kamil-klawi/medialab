import { useState, useEffect, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { IAnchor } from "@types";
import { checkRoute } from "@utils";
import Brand from "@assets/images/brand/medialab.svg";
import s from "@assets/styles/components/Navbar.module.scss";

export default function Navbar() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");
  const toggleVisibility = () => setVisibility(!visibility);
  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
    document
      .querySelector("body")
      ?.setAttribute("data-theme", theme.toString());
  }, [theme]);

  const obj = {
    show: { display: "flex" },
    hidden: { display: "none" },
  };
  return (
    <>
      <nav className={s.nav}>
        <div className={s.nav__logo}>
          <img src={Brand} alt="medialab" />
        </div>
        <ul className={s.nav__menu}>
          <li className={s.nav__item}>
            <span onClick={toggleTheme} className={s.nav__theme}>
              theme
            </span>
          </li>
          <li className={s.nav__item}>
            <Anchor url="/" name="start page" />
          </li>
          <li className={s.nav__item}>
            <Anchor url="/agency" name="agency" />
          </li>
          <li className={s.nav__item}>
            <Anchor url="/services" name="services" />
          </li>
          <li className={s.nav__item}>
            <Anchor url="/works" name="case studies" />
          </li>
          <li className={s.nav__item}>
            <Anchor url="/blog" name="our blog" />
          </li>
          <li className={s.nav__item}>
            <Anchor url="/contact" name="get in touch" />
          </li>
        </ul>
        <div
          style={visibility ? obj.show : obj.hidden}
          className={s.nav__dropdown}
        >
          <ul className={s.nav__menu_mobile}>
            <li className={s.nav__item}>
              <span onClick={toggleTheme} className={s.nav__theme}>
                theme
              </span>
            </li>
            <li className={s.nav__item}>
              <Anchor url="/" name="start page" />
            </li>
            <li className={s.nav__item}>
              <Anchor url="/agency" name="agency" />
            </li>
            <li className={s.nav__item}>
              <Anchor url="/services" name="services" />
            </li>
            <li className={s.nav__item}>
              <Anchor url="/works" name="case studies" />
            </li>
            <li className={s.nav__item}>
              <Anchor url="/blog" name="our blog" />
            </li>
            <li className={s.nav__item}>
              <Anchor url="/contact" name="get in touch" />
            </li>
          </ul>
        </div>
        <span onClick={toggleVisibility} className={s.nav__text}>
          menu
        </span>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function Anchor(props: IAnchor) {
  return (
    <>
      <Link
        className={`${s.nav__link} ${
          checkRoute() === props.url ? s.nav__active : ""
        }`}
        to={props.url}
      >
        <div className={s.inner}>
          <span className={s.inner__link}>
            <span className={s.link}>{props.name}</span>
          </span>
          <span className={s.inner__link} aria-hidden="true">
            <span className={s.link}>{props.name}</span>
          </span>
        </div>
      </Link>
    </>
  );
}
