import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeModule } from "./welcome/welcome.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom(BrowserModule, WelcomeModule, ShoppingListModule),
  ],
};