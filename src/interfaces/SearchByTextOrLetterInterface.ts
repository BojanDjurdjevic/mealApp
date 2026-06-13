import type { ApiUrlInterface } from "./ApiUrlInterface";


export interface SearchByTextOrLetterInterface extends ApiUrlInterface {
    data: {
        param: 's' | 'f',
        value: string
    }
}