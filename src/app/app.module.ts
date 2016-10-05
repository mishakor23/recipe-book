import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { app_routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesModule } from './recipes/recipes.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCq2lOavw7YV8OH_PGNeJkHsTnGWjPwVf4",
  authDomain: "recipe-book-22592.firebaseapp.com",
  databaseURL: "https://recipe-book-22592.firebaseio.com",
  storageBucket: "recipe-book-22592.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    AngularFireModule.initializeApp(firebaseConfig),
    ShoppingListModule,
    RecipesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
