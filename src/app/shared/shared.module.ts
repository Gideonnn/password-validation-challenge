import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
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
