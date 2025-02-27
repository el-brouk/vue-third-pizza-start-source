import doughSizes from "@/common/data/doughSizes"
import ingredients from "@/common/data/ingredients"
import sauces from "@/common/data/sauces"
import sizes from "@/common/data/sizes"

// добавляет свойство value в объекте dough, присваивая ему соответствующее значение из объекта doughSizes, используя dough.id в качестве ключа.
export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  }
}

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  }
}

export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  }
}

export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  }
}
