import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header className="border-bottom p-2">
        <div className="d-flex justify-content-between align-items-center ms-2">
          <div className="d-flex align-items-center gap-2">
            <img className="logo1" src="assets/images/logo.png" alt="Logo" />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle ms-4"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                se-lab-acp
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ...
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-success bi bi-arrow-down">
              Download Report
            </button>
          </div>
          <a href="..." className="btn btn-outline-danger mt-2">
            Log Out
          </a>
        </div>
        <div>
          <a href="..." className="button btn btn-primary me-2">
            Analytics
          </a>
          <a href="..." className="button btn btn-primary me-2">
            Analytics
          </a>
          <a href="..." className="button btn btn-primary me-2">
            Production
          </a>
          <a href="index.html" className="button-on btn btn-primary">
            Beam Pump
          </a>
        </div>
      </header>
      <div className="main">
        <div className="over my-3">
          <h5 className="titles mb-1">OVERVIEW</h5>
          <div className="row row-cols-auto g-3">
            <div className="col">
              <p className="subtitles mb-1">CUMULATIVE GROSS PROD.</p>
              <p>
                <b className="value">13</b> bbl
              </p>
            </div>
            <div className="col">
              <p className="subtitles mb-1">CUMULATIVE RUNTIME</p>
              <p>
                <b className="value">1039</b> min
              </p>
            </div>
            <div className="col">
              <p className="subtitles mb-1">LAST POLLED PIP</p>
              <p>
                <b className="value">0</b> psi
              </p>
            </div>
            <div className="col">
              <p className="subtitles mb-1">LAST POLLED BHP</p>
              <p>
                <b className="value">0</b> psi
              </p>
            </div>
            <div className="col">
              <p className="subtitles mb-1">LAST POLLED FHC</p>
              <p>
                <b className="value">0</b> ft
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="column beam-pump">
            <h5 className="titles">BEAM PUMP</h5>
            <div className="info-grid">
              <div className="info-item">
                <p className="subtitles mb-1">COUNTER BALANCE</p>
                <p>
                  <b className="value">0%</b>
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">HZ</p>
                <p>
                  <b className="value">0</b> rpm
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">SPM</p>
                <p>
                  <b className="value">38</b> SPM
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">STATUS</p>
                <p>
                  <b className="value">Hand</b>
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">OPERATION MODE</p>
                <p>
                  <b className="value">N/A</b>
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">DRIVE STATUS</p>
                <p>
                  <b className="value">Forward</b>
                </p>
              </div>
              <div className="info-item">
                <p className="subtitles mb-1">DRIVE FAULT</p>
                <p>
                  <b className="value">No Fault</b>
                </p>
              </div>
            </div>
            <div className="beam-alert-container alertstatus">
              <div>
                <img src="assets/images/img1.png" alt="" />
              </div>
              <div className="alert-status-box">
                <h6 className="titles ms-4">ALERT STATUS</h6>
                <ul className="alert-list ">
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    ESD Shutdown
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Operation Shutdown
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Vibration Shutdown
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    HH Pressure Shutdown
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Alarm High
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Alarm Low
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Breached Hight
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>{" "}
                    Breached Low
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Fault Hight
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Fault Low
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Count Hight
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Count Low
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Sensors Fault
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Load Fault
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Positon Fault
                  </li>
                  <li>
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Torque Fault
                  </li>
                  <li className="background">
                    <i className="bg-success rounded-circle d-inline-block ms-4 me-3 circle"></i>
                    Pump Off Fault
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-wrapper">
            <div className="column info-data">
              <h5 className="titles">ROD TAPER INFORMATION</h5>
              <ul className="data-list">
                <li>
                  <div className="values background">
                    <span className="ms-2">Diameter</span>
                    <span className="me-2">
                      <b>1000</b> in
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">Length</span>
                    <span className="me-2">
                      <b>2755</b> ft
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">Modulus</span>
                    <span className="me-2">
                      <b>305</b> MPSI
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">Speed of sound</span>
                    <span className="me-2">
                      <b>16300</b> ft/sec
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">Weight</span>
                    <span className="me-2">
                      <b>290</b> ibs/ft
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="column info-data">
              <h5 className="titles">POLLED DATA</h5>
              <ul className="data-list">
                <li>
                  <div className="values background">
                    <span className="ms-2">Energy</span>
                    <span className="me-2">0</span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">Gas Production</span>
                    <span className="me-2">
                      <b>100</b> SCF/day
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">Gross Production</span>
                    <span className="me-2">
                      <b>13</b> bb/day
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">Net Production</span>
                    <span className="me-2">
                      <b>10</b> bb/day
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">Pump Speed</span>
                    <span className="me-2">
                      <b>38</b> SPM
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">Run time</span>
                    <span className="me-2">0</span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">PPRL</span>
                    <span className="me-2">
                      <b>550</b> %
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values">
                    <span className="ms-2">MPRL</span>
                    <span className="me-2">
                      <b>30</b> %
                    </span>
                  </div>
                </li>
                <li>
                  <div className="values background">
                    <span className="ms-2">Stroke Count</span>
                    <span className="me-2">
                      <b>3899</b> %
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
