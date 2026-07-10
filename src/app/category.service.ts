  import { Injectable } from '@angular/core';
  import {
    Database,
    ref,
    query,
    orderByChild,
    listVal
  } from '@angular/fire/database';

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryService {

    constructor(private db: Database) { }

    getCategories() {
    const categoriesRef = ref(this.db, 'categories');
    const categoriesQuery = query(categoriesRef, orderByChild('name'));

    return listVal(categoriesQuery, { keyField: '$key' });
  }
  }