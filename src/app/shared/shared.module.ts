import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DropdownModule,
    TableModule
  ],
  declarations: [
    PageHeaderComponent,
    InputComponent
  ],
  exports: [
    // SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PageHeaderComponent,
    DropdownModule,
    TableModule,
    InputComponent
  ]
})
export class SharedModule { }