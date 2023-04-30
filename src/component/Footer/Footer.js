import './Footer.css';
import {Link} from "react-router-dom";
import facebook from "../../images/social/facebook.svg";
import instagram from "../../images/social/instagram.svg";
import twitter from "../../images/social/twitter.svg";
import youtube from "../../images/social/youtube.svg";
import mobile from "../../images/footer/mobile.svg";
import phone from "../../images/footer/phone.svg";
export function Footer() {
    return (
      <footer className='footer'>
        <div className="container flexbox__footer">
          <div className='footer__first_block'>
            <div className='flexbox_logo'>
                <img className='flexbox_logo__img' src="/images/logo.svg" alt="companyLogo"></img>
                <p className='Title'>Чіп Чендж</p>
            </div>
                <p className='copy'>04128, м.Київ, вул. Хрещатик, 19
                    Ліцензія НБУ №156
                    Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
            
          </div>
          <nav>
            <ul className='footer__list'>
              <li className='footer__url'>Послуги</li>
              <li className='footer__url'>Конвертер валют</li>
              <li className='footer__url'>Контакти</li>
              <li className='footer__url'>Задати питання</li>
            </ul>
          </nav>
          <ul>
            <div className='navlink'>
                <img src={mobile} alt='mobile'></img>
                <p>3773</p>
            </div>
            <p className='phone__text'>Цілодобова підтримка</p>
            
          </ul>
          <ul>
            <div className='navlink'>
                <img src={phone} alt='phone'></img>
                <p>8 800 111 22 33</p>
            </div>
            <p className='phone__text'>Безкожтовно для дзвінків в межах України</p>
            
          </ul>
          <div className='social'>
            <Link to='/facebook'><img src={facebook} alt='facebook'></img></Link>
            <Link to='/instagram'><img src={instagram} alt='instagram'></img></Link>
            <Link to='/twitter'><img src={twitter} alt='twitter'></img></Link>
            <Link to='/youtube'><img src={youtube} alt='youtube'></img></Link>
          </div>
        </div>
      </footer>
        
    );
  }