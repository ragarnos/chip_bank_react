import './Header.css';
import { NavLink } from "react-router-dom";  
export function Header() {
    return (
      <header>
        <div className="container flexbox">
          <div className='flexbox_logo'>
            <img className='flexbox_logo__img' src="/images/logo.svg" alt="companyLogo"></img>
                <NavLink to="/" className={({ isActive }) => isActive? "active": ''}>
                  <p className='Title'>Чіп Чендж</p>
                </NavLink>
          
          </div>
          <nav>
            <ul className='navlink'>
            
              <li>
                <NavLink to="/service" className={({ isActive }) => isActive? "active": ''}>
                  Послуги
                </NavLink>
              </li>
            
              <li>
                <NavLink to="/converter" className={({ isActive }) => isActive? "active": ''}>
                    Конвертер валют
                </NavLink>
              </li>
              <li>
                <a href='contact'>Контакти</a>
              </li>
              <li>
                <a href='question'>Задати питання</a>
              </li>
            </ul>
          </nav>
          <ul className='navlink'>
            <img src='/images/login.svg' alt='login'></img>
            <a href='/login' className='login'>Особистий кабінет</a>
          </ul>
        </div>
      </header>
    );
  }