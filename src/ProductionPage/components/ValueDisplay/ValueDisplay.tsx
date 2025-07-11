import "./styles.css";

interface IValueDisplayProps {
  title: string;
  value?: string | number | boolean;
  unit?: string;
}

const ValueDisplay = ({ title, value, unit }: IValueDisplayProps) => {
  return (
    <div className="value-display-container">
      <div>{title}</div>
      <div>
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>
    </div>
  );
};

export default ValueDisplay;
