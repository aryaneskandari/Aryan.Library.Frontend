import { Injectable } from '@angular/core';
import { Book } from '../+models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books:Book[]=[
    {id:1001,title:'C++',writer:'علی ایمانی',publisher:'انتشارات نص',price:25000},
    {id:1002,title:'C#',writer:'ساراصدیفی',publisher:'آی تی ',price:45000},
    {id:1003,title:'SQl Server',writer:'محمدرضا تهرانی',publisher:'انتشارات تکنولوِژی',price:35000}
  ];
  getBooks(){
    return this.books;
  }
  addBook(book:Book){
    this.books.push(book);
  }
}
