import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DATA_SUMMARY,
  DATA_SUMMARY2,
  OVERVIEW_TITLE,
  DASHBOARD1,
} from "./config";
import OverviewSection from "./ProductionPage/components/OverviewSection/OverviewSection";
import TableinfoSection from "./ProductionPage/components/TableInfoSection/TableInfoSection";
import Card from "./ProductionPage/components/Card";

function App() {
  return (
    <div className="app-container">
      <Card>
        <OverviewSection sectionTitle={OVERVIEW_TITLE} values={DATA_SUMMARY} />
      </Card>
      <div className="dashboard-table-1">
        <Card>
          <TableinfoSection sectionTitle={DASHBOARD1} values={DATA_SUMMARY2} />
        </Card>
      </div>
    </div>
  );
}

export default App;
