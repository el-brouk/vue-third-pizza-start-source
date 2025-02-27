import { useDataStore } from "@/stores/data"

/* Функция вернёт объект { ингредиент: количество } */
export const ingredientsQuantity = (pizza) => {
  const data = useDataStore()
  // reduce используется для того, чтобы пройти по всем элементам массива data.ingredients и накапливать результат в объекте acc
  return data.ingredients.reduce((acc, val) => {
    acc[val.id] = pizza.ingredients.find((item) => item.ingredientId === val.id)?.quantity ?? 0
    return acc
  }, {})
}

/* ?.quantity ?? 0 — оператор optional chaining (?.) 
проверяет, существует ли найденный элемент в pizza.ingredients. 
Если элемент найден, мы берем его количество (quantity). 
Если элемент не найден (или find возвращает undefined), 
то оператор nullish coalescing (??) присваивает 0, 
чтобы избежать ошибки при доступе к свойству quantity */
