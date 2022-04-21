import '../styles/App.css';

const Button = ({type, className, text, value}) => {
  return (
    <div className="button-cont">
        <button type={type} className={className} value={value}>{text}</button>
    </div>
  );
}

export default Button;