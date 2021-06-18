import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

import { Params, ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  
  pipeDate = new DatePipe('en-US');

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(String(id))
      .then(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}
