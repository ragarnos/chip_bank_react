import './Banner.css';
import {Link} from "react-router-dom";
import Banner_Back from "../../images/Banner/Banner_Back.png"
import Card_banner from "../../images/Banner/card-debit.png"
export function Banner() {
    return (
      <section className='banner' style={{backgroundImage: `url('${Banner_Back}')`}}>
            <div className='container_mini flexBox'>
                <div className='chip_text'>
                    <h1>Чіп Чендж</h1>
                    <p className='chip_text_parag'>Обмінник валют - навчальний</p>
                    <button className='Convert__bnt'><Link to='/converter'>Конвертер валют</Link></button>
                </div>
                <div className='Card'>
                    <img src={Card_banner} alt='card'></img>
                </div>
            </div>
      </section>
        
    );
  }