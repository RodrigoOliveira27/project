import "./styles.css";

interface IStatusValueProps {
  alertname: string;
  status: string | number | boolean;
}

const StatusValue = ({ alertname , status }: IStatusValueProps) => {
  return (
    <div className="status-value">
       {alertname} {status}
    </div>
  );
};

export default StatusValue;