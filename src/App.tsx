import "./App.css";
import "./ValueDisplay"
import 'bootstrap/dist/css/bootstrap.min.css';
import ValueDisplay from "./ValueDisplay";
import { DATA_SUMMARY } from "./config";


function App() {
  return (
    <>
    {DATA_SUMMARY.map(value => <ValueDisplay title={value.title} />)}
    </>
  );
}

export default App;
