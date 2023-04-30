import './Reset.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/Header/Header"
import {Banner} from "./component/Banner/Banner"
import {SectionTwo} from "./component/SectionTwo/SectionTwo"
import {PageConvertor} from "./Page/Convertor"
// import {HistoryConvertor} from "./Page/HistoryConvertor"
import {Footer} from "./component/Footer/Footer"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<><Banner/><SectionTwo/></>} />
          <Route path='/converter' element={<><Banner/><PageConvertor/></>} />
      </Routes>
      <Footer />
        
    </BrowserRouter>
    </div>
  );
}

export default App;
