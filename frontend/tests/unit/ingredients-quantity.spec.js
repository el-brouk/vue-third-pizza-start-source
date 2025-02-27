import { it, afterEach, describe, beforeEach, expect } from "vitest"
import { ingredientsQuantity } from "@/common/helpers/ingredients-quantity"
import { createPinia, setActivePinia } from "pinia"
import { prepareData } from "../helpers/prepare-data"

describe("ingredients quantity test", () => {
  beforeEach(() => {
    /* https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store */
    setActivePinia(createPinia())
    /* Функция для подготовки хранилища с данными */
    prepareData()
  })
  it("Should return object with ingredients", () => {
    /* Тестовый объект с данными пиццы */
    const pizza = {
      name: "Test pizza",
      sauceId: 1,
      doughId: 1,
      sizeId: 1,
      ingredients: [
        { ingredientId: 1, quantity: 1 },
        { ingredientId: 3, quantity: 2 },
      ],
    }

    const result = ingredientsQuantity(pizza)
    /* Ожидаем объект вида { ингредиент: количество } */
    expect(result).toEqual({
      1: 1,
      3: 2,
      2: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
    })
  })
})
