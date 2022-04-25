import '../scss/styles.scss';
import Header from './Header';
import Display from './Display';
import Buttons from './Buttons';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  //store calculations, user input
  const [calc, setCalc] = useState("");

  //store result after calculation to display on screen
  const [result, setResult] = useState("");

  //detects type and switches to correct function
  const handleClick = (type, value) => {

    console.log('clicked', type);
    console.log('clicked', value)
    
    if (type === 'clear') {
      handleClear(value)

    } else if (type === 'enter') {
      handleEqual()

    } else if (type === 'operator') {
      handleOperator(value)

    } else if (type === 'number') {
      
      handleNumber(value)
    }
  }

  //input number to calc string
  const handleNumber = (value) => {
      setCalc(`${calc}${value}`);
  }

  //input operator to calc string
  const handleOperator = (value) => {
    setCalc(`${calc} ${value} `);
  }

  //calculate and store answer into result state variable
  const handleEqual = () => {
      console.log('calculating')

      let calculate = eval(calc);

      setResult(calculate);

      //reset calc state variable
      setCalc("");
  }

  //clear display and calc string
  const handleClear = (value) => {

    if (value === 'All Clear') {
      //clear all states
      setResult("");
      setCalc("")

    } else if (value == 'Clear') {
      //delete calc string's last input
      let editInput;

      if(calc[calc.length -1] === ' '){
        editInput = calc.slice(0, calc.length -3)

      }else{
        editInput = calc.slice(0, calc.length -1)

      }
      //set calc state variable with edited input
      setCalc(editInput)
    }
  }

  return (
    <div className="App">
        <Header title="Simple Calc"/>
      <main>
        <Display result={result}/>
        <Buttons handleClick={handleClick}/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
