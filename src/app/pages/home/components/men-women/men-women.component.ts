import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories.service';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-men-women',
  templateUrl: './men-women.component.html',
  styleUrls: ['./men-women.component.scss']
})
export class MenWomenComponent implements OnInit {
 
  categories: Category;
  constructor(  private categoriesService: CategoriesService, 
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories() {
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }
}
