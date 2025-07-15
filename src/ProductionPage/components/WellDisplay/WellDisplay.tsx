import type { IProduction } from "../../../types";
import InformationPills from "../InformationPills/InformationPills";
import OverviewSection from "../OverviewSection";
import StatusList from "../StatusList/StatusList";
import "./styles.css";

interface IWellDisplayProps {
  production: IProduction;
}

const WellDisplay = ({ production }: IWellDisplayProps) => {
  return (
    <div className="well-display-container">
      <OverviewSection
        sectionTitle={production.overView.title}
        values={production.overView.list}
      />
      <div className="production-content">
        <InformationPills src={production.wellImage} />
        <StatusList
          sectionTitle={production.statusAlerts.title}
          values={production.statusAlerts.list}
        />
      </div>
    </div>
  );
};

export default WellDisplay;
