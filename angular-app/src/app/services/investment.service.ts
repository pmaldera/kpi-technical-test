import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InvestmentsFilter, Investment, InvestmentsFilterData } from '../../models/Investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(
    private http: HttpClient,
  ) {
    
   }

   getInvestments(filter:InvestmentsFilter)  {
    let url = `/investments/`;
    const params = new HttpParams();
    let added = false;
    for (const key in filter) {
        if(filter[key])
            if(!added) {
                url += `?${key}=${filter[key]}`;
                added = true;
            } else {
                url += `&${key}=${filter[key]}`;
            }
    }
    return this.http.get<Investment[]>(url);
  }

  getInvestmentById(id: number) {
    const url = `/investments/${id}`;
    return this.http.get<Investment>(url);
  }

  getInvestmentsFilterValues() {
    const url = `/investments/filter-values`;
    return this.http.get<InvestmentsFilterData>(url);
  }

}
