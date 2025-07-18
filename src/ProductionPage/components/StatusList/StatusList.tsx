import StatusValue from "../StatusValue"
import type { IAlert } from "../../../types";
import "./styles.css"

interface IStatusListProps {
  sectionTitle: string;
  values: IAlert[];
}

const StatusList = ({ sectionTitle, values }: IStatusListProps) => {
  return (
    <div>
    <div className="section-title">
      <div className="sectiontitle">{sectionTitle}</div>
      <div className="status-container">
        {values.map((value) => (
          <div className="status-item">
            <StatusValue alertname={value.title} status={value.status} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default StatusList;