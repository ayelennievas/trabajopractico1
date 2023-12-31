import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  items: Item [] = [];
  total:number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
   // this.items = [];
    this.items = this.itemService.getItems()
    this.getTotal();
  }
  
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id) // eliminar un dato de la lista
    this.getTotal(); //cuando se elimina se llama a getTotal
  
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  getTotal(){ //obtener total
    this.total = this.items
                 .filter(item => !item.completed )
                 .map(item => item.quantity * item.price)
                 .reduce((acc, item)=> acc += item, 0);
  }

}
