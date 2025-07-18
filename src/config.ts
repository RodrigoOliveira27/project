import {
  EStatus,
  type IAlert,
  type IAlertstatus,
  type IOverview,
  type IProduction,
  type ISummaryData,
} from "./types";

export const OVERVIEW_TITLE: string = "Overview";

export const DASHBOARD1: string = "ROD TAPER INFORMATION";

export const imagem: string = "/img1.png";

export const DATA_SUMMARY: ISummaryData[] = [
  {
    title: "Tubing Pressure",
    value: 100,
    unit: "PSI",
  },
  {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
  {
    title: "Mechanical Pressure",
    value: 12,
    unit: "PSI",
  },
  {
    title: "Tubing Pressure",
    value: 100,
    unit: "PSI",
  },
    {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
];

export const DATA_SUMMARY2: ISummaryData[] = [
  {
    title: "Tubing Pressure",
    value: 100,
    unit: "PSI",
  },
  {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
  {
    title: "Tubing Pressure",
    value: 100,
    unit: "PSI",
  },
  {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
    {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
  {
    title: "Tubing Pressure",
    value: 100,
    unit: "PSI",
  },
  {
    title: "Casing Pressure",
    value: 85,
    unit: "PSI",
  },
];

export const ALERTS: IAlert[] = [
  {
    title: "Production",
    status: EStatus.Success,
  },
  {
    title: "Production",
    status: EStatus.Success,
  },
  {
    title: "Production",
    status: EStatus.Success,
  },
  {
    title: "Production",
    status: EStatus.Success,
  },
  {
    title: "Monitoring",
    status: EStatus.Warning,
  },
  {
    title: "Reaching KPIs",
    status: EStatus.Error,
  },
];

export const STATUS_ALERT_SECTION: IAlertstatus = {
  title: "Alert Status",
  list: ALERTS,
};

export const OVERVIEW_SECTION: IOverview = {
  title: "Beam Pump",
  list: DATA_SUMMARY,
};

export const PRODUCTION_SECTION: IProduction = {
  wellImage: "/img1.png",
  overView: OVERVIEW_SECTION,
  statusAlerts: STATUS_ALERT_SECTION,
};

export const DROPDOWN_LIST: string[] = ["well 01", "well 02", "well 03"];

export const TABS_NAMES: string[] = ["Beam Pump"]