//import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css'
import style from './App.module.css';
import ButtonsContainer from './components/ButtonContainer';
import Display from './components/Display';
import {useState} from 'react';

function App() {

  const [calVal, setCalVal] = useState('');
  
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C'){
      setCalVal("");
    }else if (buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };


  // <Display></Display> ====  use props
  // <ButtonContainer></ButtonContainer>  ===== ek method ko as a prop la raha h aur behavoiur ko parent tk bubbleup kar raha h 
  return (
    <div className= {style.calculator}>
      <Display displayValue = {calVal}></Display>   
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App



