import StatusValue from "../../../StatusValue";
import type { ISummaryData } from "../../../types";
import "./styles.css"

interface IStatusListProps {
  sectionTitle: string;
  value: ISummaryData[];
}

const StatusList = ({ sectionTitle, value }: IStatusListProps) => {
  return (
    <div className="section-container">
      <div className="sectiontitle">{sectionTitle}</div>
      <div className="table-container">
        {value.map((value) => (
          <div className="table-tem">
            <StatusValue alertname={value.title} status={value.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusList;
