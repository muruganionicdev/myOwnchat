import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage, AccountPage, ContactsPage } from '../';
// import { ContactModal } from '../../components';
import { LoginService, ChatService } from '../../services';

@Component({
	selector: 'page-chats',
	templateUrl: 'chats.html'
})
export class ChatsPage {
	constructor( public chatService: ChatService, private navCtrl: NavController, private loginService: LoginService) {
		// contacts / chats list state
		// loginService.getNav(navCtrl);
		// console.log();
		loginService.complete.then(user => {
			// alert(user.id+' user id is:');
			if (!user.id) {
				this.goToLogin();
			}
		}, () => {
			alert('empty user id is:');
			this.goToLogin();
		});
		/*if(loginService.complete.length ==null){
			loginService.go();
		}*/
		// 
	}
	// go to login page
	goToLogin(){
		this.loginService.go();
	}
	// go to accounts
	account() {
		this.navCtrl.push(AccountPage, {}, {animate: true, direction: 'forward'});
	}

	// go to a chat
	chat(id) {
		this.navCtrl.push(ChatPage, {chatId: id}, {animate: true, direction: 'forward'});
	}

	goContacts() {
		this.navCtrl.setRoot(ContactsPage, {}, {animate: true, direction: 'back'});
	}
}