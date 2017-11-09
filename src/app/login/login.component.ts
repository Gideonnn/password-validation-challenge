import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'gid-login',
  template: `
    <form>
      <mat-form-field>
        <input #user matInput placeholder="User" [value]="getUsername()">
      </mat-form-field>

      <mat-form-field>
        <input #pass matInput placeholder="Password">
      </mat-form-field>

      <button
        color="primary"
        mat-raised-button
        *ngIf="!isLoggedIn()"
        (click)="login(user.value, pass.value)">
        Login
      </button>

      <button
        color="primary"
        mat-raised-button
        *ngIf="isLoggedIn()"
        (click)="logout()">
        Logout
      </button>
    </form>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  login(user: string, pass: string): void {
    if (
      this.validate1(pass) &&
      this.validate2(pass) &&
      this.validate3(pass) &&
      this.validate4(pass) &&
      this.validate5(pass)
    ) {
      localStorage.setItem('user', user);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!this.getUsername();
  }

  getUsername(): string | null {
    return localStorage.getItem('user') ;
  }

  // Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
  // and so on, up to xyz . They cannot skip letters; acd doesn't count.
  validate1(pass: string): boolean {

    const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    for (let i = 0; i < alphabet.length - 2; i++) {
      const chars = `${alphabet[i]}${alphabet[i + 1]}${alphabet[i + 2]}`;
      if (pass.indexOf(chars) !== -1) {
        console.log('validate1: pass');
        return true;
      }
    }

    console.log('validate1: fail');
    return false;
  }

  // Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
  // and are therefore confusing.
  validate2(pass: string): boolean {
    const passed = !/i|O|l/g.test(pass);
    console.log(passed ? 'validate2: pass' : 'validate2: fail');
    return passed;
  }

  // Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
  validate3(pass: string): boolean {
    const passed = /((.)\2){2}/g.test(pass);
    console.log(passed ? 'validate3: pass' : 'validate3: fail');
    return passed;
  }

  // Passwords cannot be longer than 32 characters.
  validate4(pass: string): boolean {
    const passed = pass.length <= 32;
    console.log(passed ? 'validate4: pass' : 'validate4: fail');
    return passed;
  }

  // Passwords can only contain lower case alphabetic characters.
  validate5(value: string): boolean {
    return true;
  }
}
