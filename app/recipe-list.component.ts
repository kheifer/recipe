import { Component } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector:'recipe-list',
  template: `
  <h3 (click)="selectedRecipe.toggle()">{{selectedRecipe.title}}</h3>
  <div *ngIf="selectedRecipe.showHide">
  <p>Ingredients:</p>
  <ul>
    <li *ngFor="let currentIngredient of selectedRecipe.ingredients">{{currentIngredient}}</li>
  </ul>
  <p>Directions:</p>
  <ul>
    <li *ngFor="let currentDirection of selectedRecipe.directions">{{currentDirection}}</li>
  </ul>
  </div>
  `
})


export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Banana Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes']),
    new Recipe('Banana  Bacon Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Cook up that bacon till it`s crispy, and crumble it up', 'Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes'])
  ];
}
