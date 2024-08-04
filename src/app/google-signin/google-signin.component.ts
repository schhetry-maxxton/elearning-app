import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  ngOnInit(): void {
    // Ensure the global `onSignIn` function is set
    (window as any).onSignIn = this.onSignIn.bind(this);
  }

  // Callback for successful sign-in
  onSignIn(googleUser: any): void {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Get the ID token and send it to your server
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  }
}
