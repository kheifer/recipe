import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe List {{month}}/{{day}}/{{year}}</h1>
     <h3>{{recipe}}</h3>
      <div *ngFor="let selectedRecipe of recipes">
        <h3>{{selectedRecipe.title}}</h3>
        <p>Ingredients:</p>
        <ul>
          <li *ngFor="let currentIngredient of selectedRecipe.ingredients">{{currentIngredient}}</li>
        </ul>
        <p>Directions:</p>
        <ul>
          <li *ngFor="let currentDirection of selectedRecipe.directions">{{currentDirection}}</li>
        </ul>
        <button (click)="blowMe()">Click me!</button>
      </div>
    </div>
    `
})

export class AppComponent {
  recipe: string = 'Banana Pancakes and shit';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Banana Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes']),
    new Recipe('Banana  Bacon Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Cook up that bacon till it`s crispy, and crumble it up', 'Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes'])
  ];
  blowMe(){
    alert("Blow me!!?");
  }
 }
