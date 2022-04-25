import '../scss/styles.scss';

const Button = ({type, className, text, value, handleClick}) => {
  return (
    <div className="buttonCont">
        <button className={className} value={value} onClick={() => handleClick(type, value)}>{text}</button>
    </div>
  );
}

export default Button;