import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Store } from '@ngrx/store';
import { Grocery } from '../models/grocery.model';
import { groceryAction } from './store/actions/grocery.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BucketComponent,GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private store:Store<{groceries:Grocery[]}>){
    // this.groceries$ = store.select(selectedGroceries);
  }

  ngOnInit(): void {
    this.store.dispatch(groceryAction.loadGroceries())
  }
}
