import { aereaSelectHandler } from "../handlers/aereaSelectHandler"
import { categorySelectHandler } from "../handlers/categorySelectHandler"
import { ingredientSelectHandler } from "../handlers/ingredientSelectHandler"


export function hookSelectEvents() {
    const categorySelect = document.querySelector("#categories")
    const ingredientSelect = document.querySelector("#ingredients")
    const areaSelect = document.querySelector("#area")

    categorySelect?.addEventListener("change", categorySelectHandler)
    ingredientSelect?.addEventListener("change", ingredientSelectHandler)
    areaSelect?.addEventListener("change", aereaSelectHandler)
}