import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  categories$: any;
  id: any;
  product: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService
        .get(this.id)
        .pipe(take(1))
        .subscribe(p => {
          this.product = p || {};
        });
    }
  }

  async save(product: any) {
  if (this.id)
    this.productService.update(this.id, product);
  else
    this.productService.create(product);

  this.router.navigate(['/admin/products']);
  }

  delete () {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
