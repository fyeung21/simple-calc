import '../scss/styles.scss';

const Display = ({displayText}) => {
  return (
    <div className="displayCont">
        <span>{displayText === "" ? "0" : displayText}</span>
    </div>
  );
}

Display.defaultProps = {
    displayText: '0'
}

export default Display;