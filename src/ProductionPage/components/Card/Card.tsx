import { type JSX } from "react";
import "./styles.css";

interface ICardProps {
  children: string | JSX.Element | JSX.Element[];
}

const Card = ({ children }: ICardProps) => {
  return <div className="card-container">{children}</div>;
};

export default Card;
