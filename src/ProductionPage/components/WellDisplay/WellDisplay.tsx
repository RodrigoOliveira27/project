import { imagem } from "../../../config";
import type { ISummaryData } from "../../../types";
import InformationPills from "../InformationPills/InformationPills";
import ValueDisplay from "../ValueDisplay/ValueDisplay";
import "./styles.css";

interface IWellDisplayProps {
  sectionTitle: string;
  values: ISummaryData[];
}

const WellDisplay = ({ sectionTitle, values }: IWellDisplayProps) => {
  return (
    <div>
      <div>{sectionTitle}</div>
      <div>
        {values.map((value) => (
          <ValueDisplay
            title={value.title}
            value={value.value}
            unit={value.unit}
          />
        ))}
      </div>
      <div>
        <InformationPills src={imagem} />
      </div>
    </div>
  );
};

export default WellDisplay;
