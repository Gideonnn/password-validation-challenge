import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gid-login',
  template: `
    <form>
      <mat-form-field>
        <input #user matInput placeholder="User">
      </mat-form-field>

      <mat-form-field>
        <input #pass matInput placeholder="Password">
      </mat-form-field>

      <button
        color="primary"
        mat-raised-button
        (click)="login(user.value, pass.value)">
        Login
      </button>

      <button
        color="primary"
        mat-raised-button
        (click)="logout()">
        Login
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
      // Persist login
    }
  }

  logout(): void {
    // Remove stored login
  }

  // Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
  // and so on, up to xyz . They cannot skip letters; acd doesn't count.
  validate1(value: string): boolean {
    return true;
  }

  // Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
  // and are therefore confusing.
  validate2(value: string): boolean {
    return true;
  }

  // Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
  validate3(value: string): boolean {
    return true;
  }

  // Passwords cannot be longer than 32 characters.
  validate4(value: string): boolean {
    return true;
  }

  // Passwords can only contain lower case alphabetic characters.
  validate5(value: string): boolean {
    return true;
  }
}
