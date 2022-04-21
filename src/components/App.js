import '../scss/styles.scss';
import Header from './Header';
import Buttons from './Buttons';
import Footer from './Footer';

const App = () => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
        <Header title="Simple Calc"/>
      <main>
        <Buttons/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
