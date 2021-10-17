import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Investment, InvestmentsFilter, InvestmentsFilterData } from '../models/Investment';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  ) {

  }

  ngOnInit() {
  }
}
