import { hookSelectEvents } from "./events/selectEvents";
import { getMealById, getMealCategories } from "./services/mealDbService";


const x = getMealById({
    data: {param: "i", value: "52772"}
})

const r = await getMealCategories({
    data: {
        param: 'c', value: 'list'
    }
})

console.log(r)


function main() {
    hookSelectEvents()
}

main()
