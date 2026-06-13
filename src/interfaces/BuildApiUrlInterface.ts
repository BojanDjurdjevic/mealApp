import type { ApiUrlInterface } from "./ApiUrlInterface";


export interface BuildApiUrlInterface extends ApiUrlInterface {
    data: {param: string, value: string}
}