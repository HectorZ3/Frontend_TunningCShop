import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModprimengModule } from '../../modprimeng.module';
import { MegaMenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ModprimengModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MegaMenuItem[] = [];

  megaMenuVisible: boolean = false;

  ngOnInit() {
    // Definimos solo los items del MegaMenu (sin columnas adicionales)
    this.items = [
        // Submenú de Categorías
        {
           label: 'Sedán',
           icon: 'pi pi-car',
           command: () => console.log('Sedán')
        },
        {
           label: 'Hatchback',
           icon: 'pi pi-car',
           command: () => console.log('Hatchback')
        },
        {
           label: 'Coupé',
           icon: 'pi pi-car',
           command: () => console.log('Coupé')
        },
        {
           label: 'Cabriolet',
           icon: 'pi pi-car',
           command: () => console.log('Cabriolet')
        },
        {
           label: 'Roadster',
           icon: 'pi pi-car',
           command: () => console.log('Roadster')
        },
        {
           label: 'SUV',
           icon: 'pi pi-car',
           command: () => console.log('SUV')
        },
        {
           label: 'CUV',
           icon: 'pi pi-car',
           command: () => console.log('CUV')
        },
        {
           label: 'MVP',
           icon: 'pi pi-car',
           command: () => console.log('MVP')
        }  
        
    ];
  }

  toggleMegaMenu() {
    this.megaMenuVisible = !this.megaMenuVisible;
  }
}
