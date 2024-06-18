import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  items: Array<string> = ["Frite","Pomme","Lait","Pain","Oeufs","Pâtes",
    "un mac très cher"
  ];
}
