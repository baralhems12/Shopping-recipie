import { Ingredients } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredients[]>();
  //ingredients array of type "Ingredients Model"
  private ingredients: Ingredients[] = [
    new Ingredients("Apple", 20),
    new Ingredients("Grape", 8)
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredientsFrmRecipe(recipeIngredients: Ingredients[]) {
    this.ingredients.push(...recipeIngredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
