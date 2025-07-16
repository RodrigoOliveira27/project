import "./styles.css"

interface IDropDownProps {
  selectedOption?: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const DropDown = ({ selectedOption, options, onSelectOption }: IDropDownProps) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onSelectOption(e.target.value)}
      className="drop-down"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
