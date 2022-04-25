import '../scss/styles.scss';
import Header from './Header';
import Display from './Display';
import Buttons from './Buttons';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  //store calculations, user input
  const [calc, setCalc] = useState("");

  //store result flag to display result or calc
  const [isResult, setIsResult] = useState(false);

  //detects type and switches to correct function
  const handleClick = (type, value) => {

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
      if (isResult === true) {
        setCalc(`${value}`);

        //switch result flag back to false
        setIsResult(false);

      } else {
        setCalc(`${calc}${value}`);
      }
  }

  //input operator to calc string
  const handleOperator = (value) => {
    setCalc(`${calc} ${value} `);
  }

  //calculate and store answer into result state variable
  const handleEqual = () => {
      console.log('calculating')

      let calculate = eval(calc);

      setCalc(`${calculate}`);
      setIsResult(true);
  }

  //clear display and calc string
  const handleClear = (value) => {

    if (value === 'All Clear') {
      //clear calc state
      setCalc("")
      
      //set result flag back to false
      setIsResult(false);

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
        <Display displayText={calc} />
        <Buttons handleClick={handleClick}/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
