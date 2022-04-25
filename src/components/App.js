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
    
    if (type == 'clear') {
      // handleClear()

    } else if (type == 'enter') {
      // handleEqual()

    } else if (type == 'operator') {
      handleOperator(value)

    } else if (type == 'number') {
      
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

  //calculate and displays result and reset calc
  // const handleEqual = () => {
  //   if (buttonValue == 'Equal') {
  //     console.log('calculated')

  //     eval(calc)

  //     setCalc([...calc, math(a,b, {value})])

  //     setResult(calc)

  //   } else {
  //     setResult("cannot calculate");
  //   }
  // }

  //clears display
  // const handleClear = () => {
  //   console.log('clear button clicked')
  //   if (buttonValue == 'All Clear') {
  //     console.log('all clear')
  //     setResult("");
  //     setCalc("")

  //   } else if (buttonValue == 'Clear') {
  //     console.log('clear input')
  //     //make display input 0?
  //     let input = input - ('minus string letters..')
  //     setCalc("")
  //   }
  // }

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
