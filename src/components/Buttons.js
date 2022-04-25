import '../scss/styles.scss';
import { calculatorButtons } from '../globals/calculator-button-data';
import Button from './Button';

const Buttons = ({handleClick}) => {
  return (
    <div className="buttonsCont">
        {calculatorButtons.map((oneButton, i) => {
            return (
                <Button key={i}
                    type={oneButton.type}
                    className={oneButton.className}
                    value={oneButton.value}
                    text={oneButton.text}
                    handleClick={handleClick}
                />
            );
        })}
    </div>
  );
}

export default Buttons;