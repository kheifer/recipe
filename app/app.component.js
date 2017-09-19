"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var AppComponent = (function () {
    function AppComponent() {
        this.recipe = 'Banana Pancakes and shit';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        this.recipes = [
            new recipe_model_1.Recipe('Banana Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes']),
            new recipe_model_1.Recipe('Banana  Bacon Pancakes', ['1 Egg', '2 Tbspn Sugar', '1.5 cups flour', '1 tspn vanilla extract', '1 banana', '3/4 cup of milk', '2 tspn baking powder', '1 tspn baking soda'], ['Cook up that bacon till it`s crispy, and crumble it up', 'Add all ingredients to bowl and mix', 'make some delicious fucking banana pancakes'])
        ];
    }
    AppComponent.prototype.blowMe = function () {
        alert("Blow me!!?");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n     <h1>Recipe List {{month}}/{{day}}/{{year}}</h1>\n     <h3>{{recipe}}</h3>\n      <div *ngFor=\"let selectedRecipe of recipes\">\n        <h3>{{selectedRecipe.title}}</h3>\n        <p>Ingredients:</p>\n        <ul>\n          <li *ngFor=\"let currentIngredient of selectedRecipe.ingredients\">{{currentIngredient}}</li>\n        </ul>\n        <p>Directions:</p>\n        <ul>\n          <li *ngFor=\"let currentDirection of selectedRecipe.directions\">{{currentDirection}}</li>\n        </ul>\n        <button (click)=\"blowMe()\">Click me!</button>\n      </div>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map