import './App.css'
import CompletePaper from './components/CompletePaper'

function App() {

  // const [printing, setPrinting] = useState(false);
  
  // const handleHide = () => {
  //   setPrinting(true);
  //   setTimeout(() => {
  //     window.print();
  //     setPrinting(false);
  //   }, 100); 
  // };

  return (
    <>
    {/* <h1>Test Your Self</h1>
    
    {
      !printing && (
        <Input />
      )
    }
    <button onClick={handleHide}>Hide</button> */}
    <CompletePaper />
    </>
  )
}

export default App
