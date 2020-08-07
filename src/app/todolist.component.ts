import { Component} from '@angular/core';

@Component({
    selector: 'todolist',
    templateUrl: './todolist.component.html',
    
})
export class TodolistComponent {
   Title='TODO-LIST'
   
   items_list=[{
       'itemname':'clean the room'},{'itemname':'collect the passes'}]
    addItem(x){
        this.items_list.push({'itemname':x})
        console.log(this.items_list)

    }
    RemoveItem(i){
         this.items_list=this.items_list.filter(x =>i.itemname!==x.itemname)
    }
   

}
