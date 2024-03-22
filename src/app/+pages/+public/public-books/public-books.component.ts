import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-public-books',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './public-books.component.html',
  styleUrl: './public-books.component.css'
})
export class PublicBooksComponent {

}
