import FooterSvgSelector from "./FooterSvgSelector";

import style from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__wrapper}>
          <div className={style.footer__logo}>
            <FooterSvgSelector id="logo-reverse" />
          </div>
          <div className={style.footer__content}>
            <div className={style.footer__contacts}>
              <div className={style.footer__item}>
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
