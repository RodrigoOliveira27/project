import "./styles.css";

interface IValueDisplayProps {
  title: string;
  value?: string | number | boolean;
  unit?: string;
}

const ValueDisplay = ({ title, value, unit }: IValueDisplayProps) => {
  return (
    <div className="ValueDisplayContainer">
      <div className="Title ">{title}</div>
      <div className="ValueContainer">
        <span className="Value">{value}</span>
        <span className="Unit">{unit}</span>
      </div>
    </div>
  );
};

export default ValueDisplay;
