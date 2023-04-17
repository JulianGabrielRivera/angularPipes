import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angularPipes';
count:number = 285645;
decimal:number = 3.14352;
price:number = 99.99;
today:Date = new Date();
postObject:object = {id:1,
postTitle:'post 1'};
postArray: Array<string> =["post 1", "post 2", 'post 3','post 4']
// if i put object here in the front end it wont work as userDetails.city?
userDetails = {
  name:'julian',
  city:'orlando',
  countryCode:'US'
}
dummyText:string = 'dumyakjdfkajdkgjandgjnkadbgkajbgkdjabgajk'
  constructor(){

  }

}
