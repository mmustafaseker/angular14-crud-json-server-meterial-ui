import { Component, OnInit } from '@angular/core';
import { companymodel } from '../Model/companyModel';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companydata !:companymodel[];

  constructor() { }

  ngOnInit(): void {
  }

}
