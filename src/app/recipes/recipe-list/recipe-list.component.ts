import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
