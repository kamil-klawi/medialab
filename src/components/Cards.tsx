import { managementStaff } from "@utils";
import { useNavigate } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsDribbble,
  BsBehance,
  BsGithub,
} from "react-icons/bs";
import s from "@assets/styles/components/Card.module.scss";

export default function Cards() {
  const navigate = useNavigate();
  const renderList = managementStaff.map((item, index) => {
    return (
      <div key={index} className={s.card}>
        <div className={s.card__image} />
        <div className={s.card__content}>
          <span>{item.name}</span>
          <span>{item.appointment}</span>
        </div>
        <div className={s.card__social}>
          <div>
            <span
              className={s.card__link}
              onClick={() => navigate(item.instagramUrl)}
            >
              <BsInstagram size={20} />
            </span>
            <span
              className={s.card__link}
              onClick={() => navigate(item.facebookUrl)}
            >
              <BsFacebook size={20} />
            </span>
            <span
              className={s.card__link}
              onClick={() => navigate(item.twitterUrl)}
            >
              <BsTwitter size={20} />
            </span>
            <span
              className={s.card__link}
              onClick={() => navigate(item.linkedinUrl)}
            >
              <BsLinkedin size={20} />
            </span>
          </div>
          <div>
            <span
              className={s.card__link}
              onClick={() => navigate(item.dribbbleUrl)}
            >
              <BsDribbble size={20} />
            </span>
            <span
              className={s.card__link}
              onClick={() => navigate(item.behanceUrl)}
            >
              <BsBehance size={20} />
            </span>
            <span
              className={s.card__link}
              onClick={() => navigate(item.githubUrl)}
            >
              <BsGithub size={20} />
            </span>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
}
