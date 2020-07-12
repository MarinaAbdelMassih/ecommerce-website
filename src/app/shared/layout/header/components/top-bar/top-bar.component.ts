import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AuthManager } from '../../../../../core/managers/auth.manager';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from '../../../../../core/helpers/localStorage';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter ;
  constructor(public translate : TranslateService ,
    public localStorage: LocalStorage) { }

  ngOnInit(): void {
  }
  
  language(language: string) {
    this.translate.use(language);
    this.localStorage.setLang(language);
  }
}
