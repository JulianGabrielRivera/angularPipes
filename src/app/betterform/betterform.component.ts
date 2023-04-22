import { Component } from '@angular/core';
import { NgForm ,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-betterform',
  templateUrl: './betterform.component.html',
  styleUrls: ['./betterform.component.css']
})
export class BetterformComponent {
constructor(){

}
onSubmit(f:NgForm){
  console.log(f.value)
  // we can only send ngform data to this onSubmit method, we wont be able to send a string and others
}
getValue(f:any){
  console.log(f);
  
}
}
