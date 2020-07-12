import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

import{faAlignLeft} from '@fortawesome/free-solid-svg-icons';
import {faChalkboard } from '@fortawesome/free-solid-svg-icons';
import {faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ProductCollection } from '../../../../../core/models/product-collection.model';
import { CategoriesService } from '../../../../../core/services/categories.service';
import { Category } from '../../../../../core/models/category.model';


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  faAlignLeft = faAlignLeft ;
  faChalkboard  = faChalkboard  ;
  faCreditCard  = faCreditCard ;
  @Input() collection: ProductCollection;
  @Input() title;
  categories: Category;
  
  activeCategory: number;
  constructor(  private categoriesService: CategoriesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories() {
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  navigateToCategory(category) {
    this.router.navigateByUrl(`product/${category.slug}`, {
      state: { category }
    });
  }
}
