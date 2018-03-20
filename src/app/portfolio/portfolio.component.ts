import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) { 
    this.items = db.list('Instituciones').valueChanges();
  }

  ngOnInit() {
  }

}
