import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/15/5c/68/the-large-and-tasty-chicken.jpg',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'http://2.bp.blogspot.com/-MIRhUVZ7rbA/UXx9BssDfnI/AAAAAAAAIeQ/TBwn0f43S_w/s1600/IMG_7126.JPG',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
