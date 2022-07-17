import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/Services/data.service';
import { ITab } from '../Models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dati!: ITab[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDataElem();
  }

  getDataElem() {
    this.dataService.getData().subscribe(
      data => {
        this.dati = data;
        console.log('la chiamata è stata eseguita', data)
      }
    )

  }


}
