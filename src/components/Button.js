import '../scss/styles.scss';

const Button = ({type, className, text, value}) => {
  return (
    <div className="buttonCont">
        <button type={type} className={className} value={value}>{text}</button>
    </div>
  );
}

export default Button;