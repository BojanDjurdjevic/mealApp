import type { ApiUrlInterface } from "./ApiUrlInterface";

export interface getCategoriesInterface extends ApiUrlInterface {
    data: {
        param: 'a' | 'c' | 'i',
        value: string
    }
}