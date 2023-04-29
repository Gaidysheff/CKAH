import GlobalSvgSelector from "../../assets/GlobalSvgSelector";
import style from "./Footer.module.scss";

// import { typography } from "../../styles/typography";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__wrapper}>
          <div className={style.footer__logo}>
            <GlobalSvgSelector id="logo-reverse" />
          </div>
          <div className={style.footer__content}>
            <div className={style.footer__contacts}>
              <div
                className={style.footer__item}
                // style={typography.Text_body}
              >
                г. Москва, Цветной б-р, 40
              </div>
              <div className={style.footer__item}>+7 495 771 21 11</div>
              <div className={style.footer__item}>info@skan.ru</div>
            </div>
            <div className={style.footer__copyright}>Copyright. 2022</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
