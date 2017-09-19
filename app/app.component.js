"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipe = 'Banana Pancakes and shit';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n     <h1>Recipe List {{month}}/{{day}}/{{year}}</h1>\n     <h2>{{recipe}}</h2>\n\n     <recipe-list></recipe-list>\n\n      <recipe-edit [childSelectedRecipe]=\"selectedRecipe\"></recipe-edit>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map