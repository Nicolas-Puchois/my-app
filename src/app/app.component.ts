import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { WelcomeModule } from "./welcome/welcome.module";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        ShoppingListModule, WelcomeModule]
})
export class AppComponent {
  title = 'my-app';
}
