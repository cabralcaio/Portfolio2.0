import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesProjetoComponent } from '../detalhes-projeto/detalhes-projeto.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(
    private dialog: MatDialog
  ) {}
    
  public openDetails(variavel: string): void {
    this.dialog.open(DetalhesProjetoComponent,{
      width: "700px",
      data: variavel,
    })
  }
}
