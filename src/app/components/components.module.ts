import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HabilitiesCardsComponent } from './habilities-cards/habilities-cards.component';
import { MaterialModule } from '../shared/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetalhesProjetoComponent } from './detalhes-projeto/detalhes-projeto.component';
import { BoxSkillsComponent } from './box-skills/box-skills.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HabilitiesCardsComponent,
    FooterComponent,
    ProjectsComponent,
    DetalhesProjetoComponent,
    BoxSkillsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    HabilitiesCardsComponent,
    FooterComponent,
    ProjectsComponent,
    BoxSkillsComponent
  ]
})
export class ComponentsModule { }
