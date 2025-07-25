import { Component } from '@angular/core';
import { VennDiagramComponent } from '../venn-diagram/venn-diagram.component';
import { MilestoneCardsComponent } from '../milestone-cards/milestone-cards.component';
import { ProgressBarsComponent } from '../progress-bars/progress-bars.component';
import { CompletionChartsComponent } from '../completion-charts/completion-charts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    VennDiagramComponent,
    MilestoneCardsComponent,
    ProgressBarsComponent,
    CompletionChartsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'Vestibulum Urna Odio, Pulvinar Tempus Eros Nec';
}
