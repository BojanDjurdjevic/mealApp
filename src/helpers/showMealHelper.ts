import type { MealApiResponse, MealInterface } from "../interfaces/MealInterface";


export function showMeals(parent: string, data: MealApiResponse[]) : void {
    const parentElement = document.getElementById(parent) as HTMLElement

    const meals: MealInterface[] | null = []

    data.forEach(item => {
        meals.push(item)
    })
    
    meals.forEach(meal => {
        console.log(meal)
        
        const mealHolder = document.createElement('div')

        const mealTitle = document.createElement("h2")
        mealTitle.textContent = meal.strMeal

        parentElement.append(mealHolder) 
    }); 
}