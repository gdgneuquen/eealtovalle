import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

  item: Observable<any>;

  constructor(private route: ActivatedRoute,db: AngularFireDatabase) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = db.object('Instituciones/'+id).valueChanges();
    
  }

  ngOnInit() {
   
  }

}
