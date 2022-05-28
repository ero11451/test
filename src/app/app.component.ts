import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoTest';
//  i know you make think this app is too basic, but
  constructor(){}

   public items: string[] = [];

   newTask:string | any = '';

   public addToList() {
           if (this.newTask == '') {
           }
           else {
               this.items.push(this.newTask);
               this.newTask = '';
           }
       }


       public deleteTask(index:any) {
           this.items.splice(index, 1);
       }
}
