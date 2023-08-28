import './App.css'
import Home from './Home/Home';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import CompletePaperPreview from './Home/CompletePaperPreview';
import CompletePaper from './components/CompletePaper';
import MCQSelector from './MCQSelector';
import ShortQuestionSelector from './ShortQuestionSelector';
import MCQsSQsLongPaper from './components/MCQsSQsLongPaper';


function App() {


  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mcqsPaper' element={<MCQSelector />} />
        <Route exact path='/sqsPaper' element={<ShortQuestionSelector />} />
        <Route exact path='/mcqsAndsqsPaper' element={<CompletePaper />} />
        <Route exact path='/completePaper' element={<MCQsSQsLongPaper />} />
      </Routes>
    </Router>
    
    {/* <CompletePaper /> */}
    </>
  )
}

export default App
