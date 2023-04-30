import './SectionTwo.css';
import {Link} from "react-router-dom";
import Card_holder from "../../images/sectionTwo/card_holder.png"
export function SectionTwo() {
    return (
      <section className='conver_banner'>
            <div className='container_mini flexBox'>
                <div className='chip_text_holder'>
                    <h2>Конвертер валют</h2>
                    <p className='chip_text_holder_parag'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
                    <Link className='Convert__bnt_blue' to='/converter'>Конвертувати валюту</Link>
                </div>
                <div>
                    <img className='holder_card' src={Card_holder} alt='card_holder'></img>
                </div>
            </div>
      </section>
        
    );
  }