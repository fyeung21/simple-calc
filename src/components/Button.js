import '../scss/styles.scss';

const Button = ({type, className, text, value, handleClick}) => {
  return (
    <div className="buttonCont">
        <button type={type} className={className} value={value} onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;