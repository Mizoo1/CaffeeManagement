import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  password = true;
  confirmpassword = true;

  constructor() { }

  ngOnInit(): void {
    // Initialize component properties or perform initialization logic here
  }
}
