import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../../+services/book.service';
import { Book } from '../../../+models/Book';
import { MatTableModule } from'@angular/material/table';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-librarians-books',
  standalone: true,
  imports: [
    MatTableModule,
    BookDetailsComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './librarians-books.component.html',
  styleUrl: './librarians-books.component.css'
})
export class LibrariansBooksComponent implements OnInit{
editData() {
throw new Error('Method not implemented.');
}
removeData() {
throw new Error('Method not implemented.');
}
addData() {
  this.currentAction='add';
}
  currentAction='list';
  data:Book[]=[]
  ngOnInit(): void {
    this.data=this.bookService.getBooks();
  }
  bookService=inject(BookService);
  displayedColumns: string[] = [ 'id','title', 'writer', 'publisher', 'price'];

}
