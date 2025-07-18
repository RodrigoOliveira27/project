import type { ISummaryData } from "../../../types";
import ValueDisplay from "../ValueDisplay/ValueDisplay";
import "./styles.css";

interface IOverviewSectionProps {
  sectionTitle: string;
  values: ISummaryData[];
}

const OverviewSection = ({ sectionTitle, values }: IOverviewSectionProps) => {
  return (
    <div className="Overview">
      <div className="section-title-over">{sectionTitle}</div>
      <div className="info">
        {values.map((value) => (
          <ValueDisplay
            title={value.title}
            value={value.value}
            unit={value.unit}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewSection;
