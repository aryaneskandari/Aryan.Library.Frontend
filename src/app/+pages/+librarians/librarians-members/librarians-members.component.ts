import { Component, OnInit, inject } from '@angular/core';
import { MemberService } from '../../../+services/member.service';
import { Member } from '../../../+models/Member';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-librarians-members',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './librarians-members.component.html',
  styleUrl: './librarians-members.component.css'
})
export class LibrariansMembersComponent implements OnInit{
  data:Member[]=[]
  memberService=inject(MemberService);

  ngOnInit(): void {
    this.data=this.memberService.getMembers();
  }
  displayedColumns: string[] = [ 'isActive', 'fullname', 'gender', 'phoneNumber','email','address'];
}
