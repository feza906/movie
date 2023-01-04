import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import {About} from './About';
import { Header } from './components/Header';
import { Shows } from './Shows';
import { SingleShow } from './SingleShow';
import {Footer} from './components/Footer'

function App() {
    return(
      <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        
        <Route path='/shows' element = {<Shows/>}/>
        <Route path='shows/singleshow/:id' element={<SingleShow/>}/>

      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
