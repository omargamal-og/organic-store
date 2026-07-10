import { Component, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-filter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  categories$: any;
  @Input('category') category = '';

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }

}
