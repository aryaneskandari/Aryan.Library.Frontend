import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class MemberDetailsComponent {
  private fb = inject(FormBuilder);
  memberForm = this.fb.group({
    id: null,
    isActive: [null, Validators.required],
    fullname: [null, Validators.required],
    gender: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    email: null,
    address: [null, Validators.required],
  });


  onSubmit(): void {
    alert('Thanks!');
  }
}
