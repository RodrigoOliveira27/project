import './styles.css';

interface ITabsProps {
    tabNames: string[];
    setActiveTab: (tab: string) => void
    activeTab: string;
}

const TabsHeader = ({ tabNames , setActiveTab, activeTab }: ITabsProps) => {

  return (
    <div className="tabs-container">
      {tabNames.map((tab) => (
        <div
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
          {activeTab === tab && <div className="underline" />}
        </div>
      ))}
    </div>
  );
};

export default TabsHeader;
