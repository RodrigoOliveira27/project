import "./styles.css";

export interface IButtonProps {
  text: string;
  alertText: string; 
}

const Button = ({ text, alertText }: IButtonProps) => {
  const handleClick = () => {
    alert(alertText); 
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;