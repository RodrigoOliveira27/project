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