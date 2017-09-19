"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var EditRecipeComponent = (function () {
    function EditRecipeComponent() {
    }
    return EditRecipeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", recipe_model_1.Recipe)
], EditRecipeComponent.prototype, "childSelectedRecipe", void 0);
EditRecipeComponent = __decorate([
    core_1.Component({
        selector: 'recipe-edit',
        template: "\n    <div>\n        <div *ngIf=\"selectedRecipe\">\n          <h3>{{selectedRecipe.title}}</h3>\n\n          <hr>\n          <h3>Edit Recipe</h3>\n          <label>Enter Recipe Description:</label>\n          <input [(ngModel)]=\"selectedRecipe.description\">\n\n          <button (click)=\"finishedEditing()\">Done</button>\n        </div>\n      </div>\n  "
    })
], EditRecipeComponent);
exports.EditRecipeComponent = EditRecipeComponent;
//# sourceMappingURL=recipe-edit.components.js.map