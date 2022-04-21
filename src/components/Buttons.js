import '../styles/App.css';
import { calculatorButtons } from '../globals/calculator-button-data';
import Button from './Button';

const Buttons = () => {
  return (
    <div className="buttons-cont">
        {calculatorButtons.map((oneButton, i) => {
            return (
                <Button key={i}
                    type={oneButton.type}
                    className={oneButton.className}
                    value={oneButton.value}
                    text={oneButton.text}
                />
            );
        })}
    </div>
  );
}

export default Buttons;