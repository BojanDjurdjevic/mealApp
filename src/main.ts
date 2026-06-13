import { getMealById, getMealCategories } from "./services/mealDbService";


const x = getMealById({
    endpoint: "lookup.php", data: {param: "i", value: "52772"}
})

const r = await getMealCategories({
    endpoint: 'list.php', data: {
        param: 'a', value: 'list'
    }
})

console.log(r)