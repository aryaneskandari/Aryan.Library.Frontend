import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class BookDetailsComponent {
  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    id: [null],
    title: [null, Validators.required],
    writer: [null, Validators.required],
    publisher: null,
    price: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
