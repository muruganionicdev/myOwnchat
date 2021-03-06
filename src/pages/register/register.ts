// login and signup page

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../services';
import { ChatsPage } from '../';

declare var window:any;

@Component({
	selector: 'page-register',
	templateUrl: 'register.html'
})
export class RegisterPage {
	focus = false
	input = false
	data = {
		username:null,
		password: null,
		rpassword: null
	}

	constructor(private navCtrl: NavController, private loginService: LoginService) {
		// forward to chats if we are already logged in
		//loginService.complete.then(user => {
			// we dont need to do this since its handled in the login function, but just in case you want to do it here
			//this.navCtrl.push(ChatsPage, {}, {animate: true, direction: 'forward'});
		//});
	}

	// begin the login
	newUser() {
		// console.log(this.data.username);
		this.loginService.register(this.data).then(() => {
			
			//this.navCtrl.setRoot(ChatsPage, {}, {animate: true, direction: 'forward'});
		}, data => {
			console.log(data);
		});
	};

}