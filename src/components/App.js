import '../styles/App.css';
import Button from './Button';

const App = () => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
      <Button 
      handleClick={handleClick}
      type={type} 
      className={className} 
      value={value}
      text={text}>
      </Button>
    </div>
  );
}

export default App;
