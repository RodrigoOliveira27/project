import "./styles.css"

interface IDropDownProps {
  selectedOption?: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const DropDown = ({ selectedOption, options, onSelectOption }: IDropDownProps) => {
  return (
    <div className="dropdown-wrapper">
    <select
      value={selectedOption}
      onChange={(e) => onSelectOption(e.target.value)}
      className="dropdown-select"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
};

export default DropDown;
