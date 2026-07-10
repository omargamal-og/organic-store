import { Product } from './../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$: any;
  category = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.categories$ = this.categoryService.getCategories();

    this.productService.getAll().subscribe(products => {
      this.products = products as Product[];
      this.applyFilter();
    });

    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter(p => p.category === this.category)
      : this.products;
  }
}