export function fillSelectWithOptions(elementId: string, data: any): void {
    const select = document.getElementById(elementId) as HTMLSelectElement

    data.forEach(option => {
        console.log(option.strCategory)
        const selectOption = document.createElement('option') as HTMLOptionElement
        selectOption.value = option.strCategory
        selectOption.textContent = option.strCategory
        select.append(selectOption)
    });
}