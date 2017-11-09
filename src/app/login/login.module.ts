import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login.component';

// Modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }
