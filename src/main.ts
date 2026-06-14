import { hookSelectEvents } from "./events/selectEvents";
import { fillSelectWithOptions } from "./helpers/htmlSelectHelper";
import { showMeals } from "./helpers/showMealHelper";
import { getMealById, getMealCategories, getRandomMeals } from "./services/mealDbService";

/*
const x = getMealById({
    data: {param: "i", value: "52772"}
})

const r = await getMealCategories({
    data: {
        param: 'c', value: 'list'
    }
})

console.log(r)
*/

async function main() {
    hookSelectEvents()

    const categories = await getMealCategories({
        data: {param: 'c', value: 'list'}
    })
    const ingredients = await getMealCategories({
        data: {param: 'i', value: 'list'}
    })
    const aerea = await getMealCategories({
        data: {param: 'a', value: 'list'}
    })

    fillSelectWithOptions("categories", categories)
    fillSelectWithOptions("ingredients", ingredients)
    fillSelectWithOptions("aerea", aerea)

    const randomMeals = await getRandomMeals(3)

    console.log(randomMeals)
    
    showMeals('mealHolder', randomMeals)
}

main()
