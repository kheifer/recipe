import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-edit',
  template: `
    <div>
        <div *ngIf="selectedRecipe">
          <h3>{{selectedRecipe.title}}</h3>

          <hr>
          <h3>Edit Recipe</h3>
          <label>Enter Recipe Description:</label>
          <input [(ngModel)]="selectedRecipe.description">

          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
  `
})

export class EditRecipeComponent {
@Input() childSelectedRecipe: Recipe;
}
