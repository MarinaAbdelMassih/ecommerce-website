import { Component, OnInit } from '@angular/core';
import {faChalkboard } from '@fortawesome/free-solid-svg-icons';
import {faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-four-part',
  templateUrl: './four-part.component.html',
  styleUrls: ['./four-part.component.scss']
})
export class FourPartComponent implements OnInit {

  faChalkboard =faChalkboard;
  faCreditCard = faCreditCard ;
  constructor() { }

  ngOnInit() {
  }

}
