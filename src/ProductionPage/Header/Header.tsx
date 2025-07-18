import { useState } from "react";
import "./styles.css";
import InformationPills from "../components/InformationPills/InformationPills";
import DropDown from "../components/DropDown/DropDown";
import Button from "../components/Button/button";
import { DROPDOWN_LIST, TABS_NAMES } from "../../config";
import TabsHeader from "../components/Tabs/Tabs";

const Header = () => {
  const [well, setWell] = useState<string>();

  const onWellChange = (option: string) => {
    setWell((previous) => {
      console.log(`anterior:${previous} / seguinte: ${option}`);
      return option;
    });
  };

  const onLogout = () => {
    alert("User has been logged out!");
  };

const onDownload = () => {
    alert("Downloading...");
  };

  const [activeTab, setActiveTab] = useState<string>(TABS_NAMES[0]);


  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="left-side">
          <InformationPills src="/logo.png" />
        </div>

        <div className="middle-side">
          <DropDown
            selectedOption={well}
            options={DROPDOWN_LIST}
            onSelectOption={onWellChange}
          />

          <Button
            text="Download Report"
            variant="download"
            showIcon
            onButtonClick={onDownload}
          />
        </div>

        <div className="right-side">
          <Button
            text="Log Out"
            variant="logout"
            onButtonClick={onLogout}
          />
        </div>
      </div>

      <TabsHeader
        tabNames={TABS_NAMES}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default Header;