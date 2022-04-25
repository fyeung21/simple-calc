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

  // let buttonValue = e.target.value;

  //detects type and switches to correct function
  // const handleClick = ({type}) => {
  //   console.log('clicked');
  //   if (type == 'clear') {
  //     handleClear()

  //   } else if (type == 'enter') {
  //     handleEqual()

  //   } else if (type == 'operator') {
  //     handleCalc()

  //   } else if (type == 'number') {
  //     handleNumber()
  //   }
  // }

  //input number to calc
  // const handleNumber = (e) => {
  //   e.preventDefault();
  //   const number = e.target.elements.calculatorButtons.value;
  //     setCalc([...calc, number]);
  // }

  //input operator to calc...
  // const handleCalc = () => {
  //   if (buttonValue == 'Add') {
  //     e.preventDefault();
  //     //use value prop...
  //     let addition = calc++;
  //     setCalc(addition)

  //   } else if (buttonValue == 'Subtract') {
  //     let subtraction = calc--;
  //     setCalc(subtraction)
  //   }
  // }

  //calculate and displays result and reset calc
  // const handleEqual = () => {
  //   if (buttonValue == 'Equal') {
  //     console.log('calculated')

  //     const math = (a, b, {value}) => {
        
  //       if (value === 'Add') {
  //         a + b

  //       } else if (value === 'Subtract') {
  //         a - b

  //       } else if (value === 'Multiply') {
  //         a * b

  //       } else if (value === 'Divide') {

  //         if (a || b === '0' ) {
  //           setResult('cannot divde by zero')
  //         } else {
  //           a / b
  //         }

  //       } else {
  //         setResult('math error');
  //       }
  //     }
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
  // handleClick={handleClick}
  return (
    <div className="App">
        <Header title="Simple Calc"/>
      <main>
        <Display result={result}/>
        <Buttons />
      </main>
        <Footer/>
    </div>
  );
}

export default App;
