import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private route: ActivatedRoute,db: AngularFireDatabase) {
    const etapa = this.route.snapshot.paramMap.get('etapa'); 
    this.items = db.list('Instituciones',ref => ref.orderByChild('etapas/'+etapa).equalTo(true)).valueChanges();
  }

  ngOnInit() {
  }

}
