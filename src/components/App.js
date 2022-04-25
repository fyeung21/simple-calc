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

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
        <Header title="Simple Calc"/>
      <main>
        <Display/>
        <Buttons/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
