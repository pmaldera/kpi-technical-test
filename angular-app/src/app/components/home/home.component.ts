import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Investment, InvestmentsFilter, InvestmentsFilterData } from '../../../models/Investment';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  investments?: Investment[] = [];

  chartData = {
    type: ChartType.PieChart,
    data: [],
    columns: ['Investissemnt', 'Enveloppe (en meu)'],
    title: "Répartition des enveloppes (en meu)"
  }
  @Input() filter: InvestmentsFilter = {
    'ville': '',
    'etat_d_avancement': ''
  };
  @Input() filterData: InvestmentsFilterData = {
    'ville': [],
    'etat_d_avancement': []
  };

  constructor(
    private investmentService: InvestmentService,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.filter = {
      'ville': '',
      'etat_d_avancement': ''
    };
    this.filterData = {
      'ville': [],
      'etat_d_avancement': []
    };
    this.getFilterData();
    this.getInvestments();
    
  }

  getInvestments() {
    this.investmentService.getInvestments(this.filter).subscribe(invests => {
      this.investments = invests;
      //@ts-ignore
      this.chartData.data = this.investments?.map(i => [`${i.lycee} à ${i.ville}`, parseFloat(i.enveloppe_prev_en_meu)]);
    });
    this.cdr.detectChanges();
  }

  getFilterData() {
    this.investmentService.getInvestmentsFilterValues().subscribe(filterValues => this.filterData = filterValues);
  }

  filterValueChangeHandler(element?: any) {
    if(element) {
      this.filter[element.name] = element.value;
      this.getInvestments();
    }
  }
}
