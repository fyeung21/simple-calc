import '../styles/App.css';
import Header from './Header';
import Buttons from './Buttons';

const App = () => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
      <Header title="Simple Calc"/>
      <Buttons/>
    </div>
  );
}

export default App;
