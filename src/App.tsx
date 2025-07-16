import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DATA_SUMMARY,
  DATA_SUMMARY2,
  OVERVIEW_TITLE,
  DASHBOARD1,
  ALERTS,
  imagem,
  STATUS_ALERT_SECTION,
  PRODUCTION_SECTION,
} from "./config";
import OverviewSection from "./ProductionPage/components/OverviewSection/OverviewSection";
import TableinfoSection from "./ProductionPage/components/TableInfoSection/TableInfoSection";
import Card from "./ProductionPage/components/Card";
import StatusList from "./ProductionPage/components/StatusList/StatusList";
import InformationPills from "./ProductionPage/components/InformationPills/InformationPills";
import WellDisplay from "./ProductionPage/components/WellDisplay/WellDisplay";

function App() {
  return (
    <div className="app-container">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
