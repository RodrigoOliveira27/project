import { EStatus } from "../../../types";

export const STATUS_COLOR_MAPPING: { [key in EStatus]: string } = {
    [EStatus.Success]: "green",
    [EStatus.Error]: "red",
    [EStatus.Warning]: "yellow",
}