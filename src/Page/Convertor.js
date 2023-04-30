import './Convertor.css';
import arrows from "../images/convertor/icon-arrows.svg";
import arrowsRight from "../images/convertor/arrow-right.svg";
import {useState, useEffect} from "react";



export function PageConvertor() {
    const FromInput = document.querySelector('#fromInput');
    const ToInput = document.querySelector('#toInput');
    const calendar = document.querySelector('#inputCalendar');
    const selectLeft = document.querySelector('#select_left');
    const selectRigt = document.querySelector('#select_right');

    const [ValueFrom, setValueFrom] = useState('');
    const [ValueTo, setValueTo] = useState('');
    const [ValueData, setValueData] = useState(null);
    const [currentLeft, setCurrentLeft] = useState('UAH');
    const [currentRight, setCurrentRight] = useState('USD');
    const [Api, setApi] = useState([]);
    

    const [results, setResults] = useState([]);
    function changeCurrentLeft(e){
        setCurrentLeft(e.target.value)
        fetchData(e.target.value, currentRight)
    };
    function changeCurrentRight(e){
        setCurrentRight(e.target.value)
        fetchData(currentLeft, e.target.value)
    };
    
    const fromValueChange = (e) => {
        setValueFrom(e.target.value);
        ToInput.value = Math.trunc((FromInput.value * Api[selectRigt.value]) * 100) / 100;
        setValueTo(ToInput.value);
    }
    const ToValueChange = (e) => {
        setValueTo(e.target.value);
        FromInput.value = Math.trunc((ToInput.value / Api[selectRigt.value]) * 100) / 100;
        setValueFrom(FromInput.value);
    }
    function submit(e){
        e.preventDefault();
        const historys =
        {
            from: ValueFrom,
            fromCurrent: currentLeft, 
            to: ValueTo,
            toCurrent: currentRight, 
            data: calendar.value,
        };
        setResults([...results,historys]);
        
    }
    const deleteHistory = () => {
        setResults([])
    }
    function ValueFromData(event) {
        setValueData(event.target.value);
    }
    function fetchData(from, to){
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`)
        .then(res => res.json())
        .then(
          (result) => {
            setApi(result);
          }
        )
    }

    useEffect(() => {
        fetchData(currentLeft,currentRight);
    }, [])
    
    return (
        <>
            <section className='convert-section'>
            <div className='container_mini converter'>
                <div  className='chip_text_holder gap-convertor'>
                    <h2 className='convert_text'>Конвертер валют</h2>
                    <form className='converter_content' onSubmit={(e) =>submit(e)}>
                        <div className='flexFormBlock'>
                            <p className='convert_text_parag'>В мене є:</p>
                            <div className='flexblockinput'>
                                <input className='inputMoney' 
                                id='fromInput'
                                name='fromMoney' 
                                type='text' 
                                required
                                defaultValue={ValueFrom}
                                onChange={fromValueChange}
                                placeholder='1000' />
                                
                                <select className='money-select' id='select_left' onChange={(e) =>changeCurrentLeft(e)}> 
                                    <option defaultValue="UAH" selected>UAH</option>
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="EUR">EUR</option>
                                    <option defaultValue="PLN">PLN</option>
                                    <option defaultValue="CNY">CNY</option>
                                </select>
                            </div>

                                <input className='inputMoney calendar-input' 
                                    name='calendar' 
                                    id='inputCalendar'
                                    type='date' 
                                    required
                                    defaultValue={ValueData}
                                    onChange={ValueFromData}
                                    />   
                        </div>
                        <div className='arrowsBlock'>
                            <img src={arrows} alt='arrows'></img>
                        </div>
                        <div className='flexFormBlock'>
                            <p className='convert_text_parag'>Хочу придбати:</p>
                            <div className='flexblockinput'>
                                <input className='inputMoney' 
                                name='toMoney'
                                id='toInput' 
                                type='text' 
                                required
                                defaultValue={ValueTo}
                                onChange={ToValueChange}
                                placeholder='38.7' />
                                <select  className='money-select' id='select_right' onChange={(e) =>changeCurrentRight(e)}>
                                    <option defaultValue="UAH">UAH</option>
                                    <option defaultValue="USD" selected="on">USD</option>
                                    <option defaultValue="EUR">EUR</option>
                                    <option defaultValue="PLN">PLN</option>
                                    <option defaultValue="CNY">CNY</option>
                                </select>
                            </div>
                            <div className='btn_save'>
                                <button id="corvert_save"className='Convert__bnt_blue'>Зберегти результат</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
        <section className='hystory__convert-section'>
            <div className='container_mini converter_hys'>
                <div className='converter_blocks'>
                    <div className="flex_section__text">
                    <h3 className='hystory__convert_text'>Історія конвертації</h3>
                    <button id="corvert_clear"className='Convert__bnt_blue clear_history' onClick={deleteHistory}>Очистити історію</button>
                    </div>
                    {results?.length > 0 ? (
                        <div className='converter_content_hisory'>
                           
                            {results.map((item, id) => (
                                <div key={id} className="flexItem">
                                    <span>{item.data}</span>
                                    <p>{item.from} {item.fromCurrent}</p>
                                    <img src={arrowsRight} alt="arrowsRight"/>
                                    <p>{item.to} {item.toCurrent}</p>
                                </div>
                        
                            ))}
                        </div>
                        ) : (
                            <div className="empty">
                                <p>Вы еще не сделали ни одной транзакции!</p>
                            </div>
                        )}
                    
                    
                </div>
            </div>
        </section>
    </>
);
}