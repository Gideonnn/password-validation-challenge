import { NgModule, Optional, SkipSelf } from '@angular/core';

// Eager loaded module
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    LoginModule,
  ],
  providers: [

  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    // Throw error when CoreModule is already instantiated.
    // https://angular.io/guide/ngmodule#prevent-reimport-of-the-coremodule
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
