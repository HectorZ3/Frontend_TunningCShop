import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MegaMenuModule } from 'primeng/megamenu';

const modulosPrime: any = [
  ButtonModule,
  ToastModule,
  ToolbarModule,
  SplitButton,
  InputTextModule,
  IconField,
  InputIcon,
  MegaMenuModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    modulosPrime
  ],
  exports: [
    modulosPrime
  ]

})
export class ModprimengModule { }
