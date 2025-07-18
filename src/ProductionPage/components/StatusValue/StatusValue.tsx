import "./styles.css";
import { EStatus } from "../../../types";
import { STATUS_COLOR_MAPPING } from "./config";

interface IStatusValueProps {
  alertname: string;
  status: EStatus;
}

const StatusValue = ({ alertname, status }: IStatusValueProps) => {
  return (
    <div className="status-value-container">
      <div className="status-icon" style={{backgroundColor: STATUS_COLOR_MAPPING[status]}}></div>
      <div className="status-alert">{alertname}</div>
    </div>
  );
};

export default StatusValue;
