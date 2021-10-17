import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investment } from '../../../models/Investment';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  id?: number
  investment?: Investment;
  
  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService) { }

  ngOnInit(): void {
    try {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') || "1");
      this.investment = {
        id: this.id
      };
      this.getInvestment(this.id);
    } catch (e) {
      console.error(e);
    }
  }

  getInvestment(id: number) {
    this.investmentService.getInvestmentById(id).subscribe(invest => this.investment = invest);
  }

}
