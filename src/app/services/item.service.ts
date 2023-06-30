import { Injectable } from '@angular/core'; //acceder en forma general-global
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  items:Item[] = [
    
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity:4,
        completed: false //boton checkbox 
      },
      {
        id: 1,
        title: 'pan',
        price: 3.5,
        quantity:8,
       completed: true
      }
    
];

  constructor() { }

  getItems(){
   
    return this.items;
  }

  addItem(item:Item){ //agregar item
    this.items.unshift(item);
  }
}
