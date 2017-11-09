import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
})
export class SharedModule { }
