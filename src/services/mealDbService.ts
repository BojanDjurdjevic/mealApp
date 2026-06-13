import axios from "axios"
import type { ApiUrlInterface } from "../interfaces/ApiUrlInterface"
import type { MealApiResponse } from "../interfaces/MealInterface";

const API_URL = "https://www.themealdb.com/api/json/v1/1/"

function buildApiUrl(data: ApiUrlInterface): string {
    const queryParams = data.data.map(p => `${encodeURIComponent(p.param)}=${encodeURIComponent(p.value)}`).join("&")
    // "param=value&param=value"...

    return API_URL + data.endpoint + "?" + queryParams;
}

export async function getMealById(data: ApiUrlInterface): Promise<MealApiResponse> {
    const url = buildApiUrl(data);
    
    const response = await axios.get(url)
    console.log(response)
    
    return response.data.meals 
}