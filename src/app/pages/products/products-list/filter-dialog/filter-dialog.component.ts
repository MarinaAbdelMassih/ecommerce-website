import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faFemale} from '@fortawesome/free-solid-svg-icons';
import {faMale} from '@fortawesome/free-solid-svg-icons';
import {faTshirt} from '@fortawesome/free-solid-svg-icons';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import {faHatCowboy} from '@fortawesome/free-solid-svg-icons';
import {faShoePrints} from '@fortawesome/free-solid-svg-icons';

import {faPercentage} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  faStar = faStar ;
  faFemale = faFemale;
  faMale = faMale ;
  faTshirt = faTshirt;
  faPercentage = faPercentage ;
  faGift = faGift ;
  faHatCowboy = faHatCowboy;
  faShoePrints = faShoePrints;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close() {
    this.dialog.closeAll();
  }

}
