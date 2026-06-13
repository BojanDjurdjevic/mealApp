import axios from "axios"
import type { MealApiResponse } from "../interfaces/MealInterface";
import type { SearchByTextOrLetterInterface } from "../interfaces/SearchByTextOrLetterInterface";
import type { SingleProductSearchInterface } from "../interfaces/SingleProductSearchInterface";
import type { BuildApiUrlInterface } from "../interfaces/BuildApiUrlInterface";
import type { getCategoriesInterface } from "../interfaces/getCategoriesInterface";

const API_URL = "https://www.themealdb.com/api/json/v1/1/"

function buildApiUrl(endpoint: string, data: BuildApiUrlInterface): string {
    /*
    const queryParams = data.data.map(p => `${encodeURIComponent(p.param)}=${encodeURIComponent(p.value)}`).join("&")
    // "param=value&param=value"...

    return API_URL + data.endpoint + "?" + queryParams; */

    console.log(API_URL + endpoint + "?" + data.data.param + "=" + data.data.value)

    return API_URL + endpoint + "?" + data.data.param + "=" + data.data.value;
}

async function callApi(endpoint: string, data: SearchByTextOrLetterInterface | SingleProductSearchInterface | getCategoriesInterface)
: Promise<MealApiResponse>
{
    const url = buildApiUrl(endpoint, data)
    const response = await axios.get(url)
    return response.data.meals 
}

export async function searchMeal(data: SearchByTextOrLetterInterface): Promise<MealApiResponse> {
    return callApi("search.php", data)
}

export async function getMealById(data: SingleProductSearchInterface): Promise<MealApiResponse> {
    return callApi("lookup.php", data)
}

export async function getMealCategories(data: getCategoriesInterface): Promise<MealApiResponse> {
    return callApi('list.php', data)
}