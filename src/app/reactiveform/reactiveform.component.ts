import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  form:any;
  contactRegex: string = "[789][0-9]{9}"
  constructor(fb:FormBuilder){
          // this represents formGroup

   this.form= fb.group({
      // this represents instance of formcontrol class
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      contactDetails:fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNo:['',[Validators.required,Validators.pattern(this.contactRegex)]]
      }),
      skills: fb.array([]
      )
    })
    // this.form = new FormGroup({
    //   fullName: new FormControl('',
    //   [Validators.required,Validators.minLength(5)]),
    //   email:new FormControl('',[Validators.required, Validators.email]),

    //   contactDetails: new FormGroup({
    //     address: new FormControl(''),
    //     shippingAddress: new FormControl('', Validators.required),
    //     contactNo: new FormControl('', [Validators.required,Validators.pattern(this.contactRegex)])

    //   }),
    //     // angular form reactive arrays
    //   skills: new FormArray([])

    // })
    
  }
  get fullName(){
    return this.form.get('fullName')

  }
  get email(){
    return this.form.get('email')
  }
  get address(){
    return this.form.get('contactDetails.address')
  }
  get shippingaddress(){
    return this.form.get('contactDetails.shippingAddress')
  }
  get contactNo(){
    return this.form.get('contactDetails.contactNo')
  }
  get Skills(){
    return this.form.get('skills') as FormArray;
  }
  onSubmit(){
console.log(this.form.value);

  }
  // angular form reactive arrays
  addSkills(skills:HTMLInputElement){
this.Skills.push(new FormControl(skills.value))
skills.value=''

console.log(this.form.value)
}
deleteSkills(i:any, e:any){
  e.preventDefault()
  this.Skills.removeAt(i)

}
}
