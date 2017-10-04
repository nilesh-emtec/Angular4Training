import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm
  genders = ['male', 'female'];
  answer = '';
  defaultQuestion = 'pet';
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }



  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      username: suggestedName
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form);
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.user.answer = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    form.reset();
    form.form.patchValue({
      secret: this.defaultQuestion
    });
  }
}
