import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  
  stars = new Array(5).fill('');
  @Input() value = 1;
  @Input() readonly = true;
  @Input() price;
  newValue;
  constructor() { }

  ngOnInit() {
  }
}
