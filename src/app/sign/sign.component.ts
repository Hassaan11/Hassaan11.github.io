import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  Name = '';
  SurName = '';
  Email = '';
  Password = '';

  formdata: FormGroup = new FormGroup({});
  persons = [{ name: 'Hassaan', email: 'hassaan@gmail.com' }];
  constructor() {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      emailaddress: new FormControl(''),
      password: new FormControl(''),
    });
  }

  add(data: any) {
    this.Email = data.emailaddress;
    this.Name = data.name;
    this.SurName = data.surname;
    this.Password = data.password;
    console.log(
      'Name: ',
      this.Name,
      'SurName: ',
      this.SurName,
      'Email: ',
      this.Email,
      'Password: ',
      this.Password
    );
    this.persons.push({ name: this.Name, email: this.Email });
    console.log(this.persons);

    // var formData: any = new FormData();
    // formData.append('name', this.formdata.get('name').value);
    // formData.append("avatar", this.formdata.get('avatar').value);
  }
}
