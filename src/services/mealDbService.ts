import axios from "axios"
import type { ApiUrlInterface } from "../interfaces/ApiUrlInterface"
import type { MealApiResponse, MealInterface } from "../interfaces/MealInterface";
import type { SearchByTextOrLetterInterface } from "../interfaces/SearchByTextOrLetterInterface";
import type { SingleProductSearchInterface } from "../interfaces/SingleProductSearchInterface";
import type { BuildApiUrlInterface } from "../interfaces/BuildApiUrlInterface";
import type { getCategoriesInterface } from "../interfaces/getCategoriesInterface";

const API_URL = "https://www.themealdb.com/api/json/v1/1/"

function buildApiUrl(data: BuildApiUrlInterface): string {
    /*
    const queryParams = data.data.map(p => `${encodeURIComponent(p.param)}=${encodeURIComponent(p.value)}`).join("&")
    // "param=value&param=value"...

    return API_URL + data.endpoint + "?" + queryParams; */

    console.log(API_URL + data.endpoint + "?" + data.data.param + "=" + data.data.value)

    return API_URL + data.endpoint + "?" + data.data.param + "=" + data.data.value;
}

async function callApi(data: SearchByTextOrLetterInterface | SingleProductSearchInterface | getCategoriesInterface)
: Promise<MealApiResponse>
{
    const url = buildApiUrl(data)
    const response = await axios.get(url)
    return response.data.meals 
}

export async function searchMeal(data: SearchByTextOrLetterInterface): Promise<MealApiResponse> {
    return callApi(data)
}

export async function getMealById(data: SingleProductSearchInterface): Promise<MealApiResponse> {
    return callApi(data)
}

export async function getMealCategories(data: getCategoriesInterface): Promise<MealApiResponse> {
    return callApi(data)
}