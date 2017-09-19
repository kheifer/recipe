import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe List {{month}}/{{day}}/{{year}}</h1>
     <h2>{{recipe}}</h2>

     <recipe-list></recipe-list>

      <recipe-edit [childSelectedRecipe]="selectedRecipe"></recipe-edit>
    </div>
    `
})

export class AppComponent {
  recipe: string = 'Banana Pancakes and shit';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


 }
