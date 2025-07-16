import "./styles.css";

export interface IButtonProps {
  text: string;
  onButtonClick: () => void 
}

const Button = ({ text, onButtonClick }: IButtonProps) => {

  return <button onClick={onButtonClick}>{text}</button>;
};

export default Button;