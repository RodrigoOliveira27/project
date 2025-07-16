import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DATA_SUMMARY,
  DROPDOWN_LIST,
  OVERVIEW_TITLE,
  PRODUCTION_SECTION,
} from "./config";
import OverviewSection from "./ProductionPage/components/OverviewSection/OverviewSection";
import TableinfoSection from "./ProductionPage/components/TableInfoSection/TableInfoSection";
import Card from "./ProductionPage/components/Card";
import WellDisplay from "./ProductionPage/components/WellDisplay/WellDisplay";
import Button from "./ProductionPage/components/Button/button";
import DropDown from "./ProductionPage/components/DropDown/DropDown";
import { useMemo, useState } from "react";

function App() {
  const [well, setWell] = useState<string>();

  const onWellChange = (option: string) => {
    setWell((previous) => {
      console.log(`anterior:${previous} / seguinte: ${option}`);
      return option;
    });
  };

  const color = useMemo(
    () =>
      `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
    [well]
  );

  const onLogout = () => {
    alert(" User has been logged out!")
  }

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <div className="app-container-2">
        <Card>
          <OverviewSection
            sectionTitle={OVERVIEW_TITLE}
            values={DATA_SUMMARY}
          />
        </Card>
        <div className="dashboard-table-1">
          <div className="container-production-deshboard">
            <div className="production-section">
              <Card>
                <WellDisplay production={PRODUCTION_SECTION} />
              </Card>
            </div>
            <div className="deshboard-table-info-section">
              <div className="deshboard_table-info-1">
                <Card>
                  <TableinfoSection
                    sectionTitle={OVERVIEW_TITLE}
                    values={DATA_SUMMARY}
                  />
                </Card>
              </div>
              <div className="deshboard_table-info-2">
                <Card>
                  <TableinfoSection
                    sectionTitle={OVERVIEW_TITLE}
                    values={DATA_SUMMARY}
                  />
                </Card>
                <Button text="Logout" onButtonClick={onLogout} />
                <DropDown
                  selectedOption={well}
                  options={DROPDOWN_LIST}
                  onSelectOption={onWellChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
