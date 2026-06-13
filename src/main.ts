import { getMealById } from "./services/mealDbService";


const x = getMealById({
    endpoint: "lookup.php", data: [
        {param: "i", value: "52772"}
    ]
})