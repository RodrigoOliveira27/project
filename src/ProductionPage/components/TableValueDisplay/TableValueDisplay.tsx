import type { ISummaryData } from "../../../types";
import "./styles.css";

interface ITableValueDisplayProps {
  item: ISummaryData;
}

const TableValueDisplay = ({ item }: ITableValueDisplayProps) => {
  return (
      <div className="value-container">
        <div className="title">{item.title}</div>
        <div className="information">
          <span className="value">
            <b>{item.value}</b>
          </span>
          <span className="unit">{item.unit}</span>
        </div>
      </div>
  );
};

export default TableValueDisplay;
