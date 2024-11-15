import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectedGroceries, selectGroceryByType } from '../../store/selectors/grocery.selctors';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>;
  // $ is used as convention for a variable which contains observable
  constructor(private store:Store<{groceries:Grocery[]}>){
    this.groceries$ = store.select(selectedGroceries);
  }

  onTypeChange(event: Event){
    const selectedType = (event.target as HTMLSelectElement).value;
    if (selectedType) {
      this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType))
    } else {
      this.filteredGroceries$ = undefined;
    }
  }

  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    this.store.dispatch(addToBucket(payload));    
  }

  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }
    this.store.dispatch(removeFromBucket(payload));  
  }

}
