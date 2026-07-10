import { Injectable } from '@angular/core';
import { 
  Database,
  ref,
  push,
  listVal,
  objectVal,
  update,
  remove 
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: Database) {}

  create(product: any) {
    const productsRef = ref(this.db, 'products');
    return push(productsRef, product);
  }

  getAll() {
  const productsRef = ref(this.db, 'products');
  return listVal(productsRef, { keyField: 'id' });
  }

  get(productId: string) {
  const productRef = ref(this.db, `products/${productId}`);
  return objectVal(productRef);
  }

  update(productId: string, product: any) {
  const productRef = ref(this.db, `products/${productId}`);
  return update(productRef, product);
  }

  delete(productId: string) {
  const productRef = ref(this.db, `products/${productId}`);
  return remove(productRef);
}

} 