import logo_reverse from "../../assets/images/global/logo-reverse.png";
import style from "./Footer.module.scss";

// import FooterSvgSelector from "./FooterSvgSelector";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className={style.footer__logo}>
          {/* <FooterSvgSelector id="logo-reverse" /> */}
          <img src={logo_reverse} alt="" />
        </div>
        <div className={style.footer__content}>
          <div className={style.footer__contacts}>
            <div className={style.footer__item}>г. Москва, Цветной б-р, 40</div>
            <div className={style.footer__item}>+7 495 771 21 11</div>
            <div className={style.footer__item}>info@skan.ru</div>
          </div>
          <div className={style.footer__copyright}>Copyright. 2022</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
