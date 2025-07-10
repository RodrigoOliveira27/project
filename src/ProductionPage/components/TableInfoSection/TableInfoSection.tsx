import "./styles.css"
import type { ISummaryData } from "../../../types";
import TableValueDisplay from "../TableVauleDisplay/TableValueDisplay";

interface ITableinfoSectionProps {
  sectionTitle: string;
  values: ISummaryData[];
}

const TableinfoSection = ({ sectionTitle, values }: ITableinfoSectionProps) => {
  return (
    <div className="section-container">
      <div className="sectiontitle">{sectionTitle}</div>
      <div className="table-container">
        {values.map((value) => (
          <div className="table-item">
          <TableValueDisplay
            item={value}
          /></div>
        ))}
      </div>
    </div>
  );
};

export default TableinfoSection;

