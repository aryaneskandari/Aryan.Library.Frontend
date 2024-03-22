import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../../+services/book.service';
import { Book } from '../../../+models/Book';
import { MatTableModule } from'@angular/material/table';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'app-librarians-books',
  standalone: true,
  imports: [
    MatTableModule,
    BookDetailsComponent
  ],
  templateUrl: './librarians-books.component.html',
  styleUrl: './librarians-books.component.css'
})
export class LibrariansBooksComponent implements OnInit{
  data:Book[]=[]
  ngOnInit(): void {
    this.data=this.bookService.getBooks();
  }
  bookService=inject(BookService);
  displayedColumns: string[] = [ 'id','title', 'writer', 'publisher', 'price'];

}
