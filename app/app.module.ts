import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { RecipeListComponent } from './recipe-list.component';
import { EditRecipeComponent } from './recipe-edit.components';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  EditRecipeComponent,
                  RecipeListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
