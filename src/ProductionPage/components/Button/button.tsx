import "./styles.css";

export interface IButtonProps {
  text: string;
  onButtonClick: () => void;
  variant?: "download" | "logout";
  showIcon?: boolean;
}

const Button = ({ text, onButtonClick, variant = "download", showIcon = false }: IButtonProps) => {
  const className = variant === "download" ? "button-download" : "button-logout";

  return (
    <button className={className} onClick={onButtonClick}>
      {variant === "download" && showIcon && <span className="icon">↓</span>}
      {text}
    </button>
  );
};

export default Button;