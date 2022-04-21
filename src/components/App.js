import '../styles/App.css';
import Buttons from './Buttons';

const App = () => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
      <Buttons/>
    </div>
  );
}

export default App;
