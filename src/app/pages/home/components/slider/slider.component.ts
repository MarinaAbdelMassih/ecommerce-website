import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SliderModel } from 'src/app/core/models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit ,OnChanges {
 
  @Input() slider: SliderModel[];
 
  constructor() { }
 
  ngOnInit(): void {
    
  }

  ngOnChanges(changes){
    console.log(changes);
  }
}
