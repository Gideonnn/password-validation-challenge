import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    MaterialModule,
  ],
})
export class SharedModule { }
