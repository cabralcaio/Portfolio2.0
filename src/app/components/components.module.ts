import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HabilitiesCardsComponent } from './habilities-cards/habilities-cards.component';
import { MaterialModule } from '../shared/material/material.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HabilitiesCardsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    HabilitiesCardsComponent
  ]
})
export class ComponentsModule { }
