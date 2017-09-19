"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Recipe = (function () {
    function Recipe(title, ingredients, directions) {
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
        this.showHide = false;
    }
    Recipe.prototype.toggle = function () {
        this.showHide = !this.showHide;
    };
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map