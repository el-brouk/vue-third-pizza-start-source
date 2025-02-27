import { it, afterEach, describe, beforeEach, expect } from "vitest"
import { pizzaPrice } from "@/common/helpers/pizza-price"
import { createPinia, setActivePinia } from "pinia"
import { prepareData } from "../helpers/prepare-data"

describe("pizza price test", () => {
  beforeEach(() => {
    /* https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store */
    setActivePinia(createPinia())
    /* Функция для подготовки хранилища с данными */
    prepareData()
  })
  it("Should return price of the pizza", () => {
    const pizza = {
      name: "Test pizza",
      sauceId: 1, // Томатный соус за 50 рублей
      doughId: 1, // Тонкое тесто за 300 рублей
      sizeId: 1, // 30 см, множитель 1
      ingredients: [
        { ingredientId: 1, quantity: 1 }, // Грибы за 33 рубля * 1 = 33 рубля
        { ingredientId: 3, quantity: 2 }, // Салями за 42 рубля * 2 = 84 рубля
      ],
    }

    // 50 + 300 + 33 + 84 = 467

    const result = pizzaPrice(pizza)
    expect(result).toBe(467)
  })
})
