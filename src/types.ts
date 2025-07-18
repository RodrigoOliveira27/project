export interface ISummaryData {
    title: string,
    value: string | boolean | number,
    unit?: string
}

export enum EStatus{
    Success = "ok",
    Error = "error",
    Warning = "warning"
}

export interface IAlert {
    title: string,
    status: EStatus
}

export interface IProduction {
    wellImage: string;
    overView: IOverview;
    statusAlerts: IAlertstatus;
}

export interface IOverview {
    title: string;
    list: ISummaryData[];
}

export interface IAlertstatus {
    title: string;
    list: IAlert[];
}
