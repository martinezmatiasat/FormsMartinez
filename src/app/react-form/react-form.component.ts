import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-react-form',
	templateUrl: './react-form.component.html',
	styleUrls: ['./react-form.component.scss']
})

export class ReactFormComponent {
	loginForm: FormGroup;

	signedUp: boolean = false;

	constructor(private formBuilder: FormBuilder) {
		this.loginForm = this.formBuilder.group({
			email: [
				'', 
				[
					Validators.required,
					Validators.email
				]
			],
			password: [
				'', 
				[
					Validators.required,
					Validators.minLength(8),
					Validators.pattern(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/) // Regex para requerir letras y numeros
				]
			]
		});
	}

	get emailControl() {
		return this.loginForm.controls['email'];
	}

	get passwordControl() {
		return this.loginForm.controls['password'];
	}

	signUp(): void {
		this.signedUp = true;
    	return;
	}
}