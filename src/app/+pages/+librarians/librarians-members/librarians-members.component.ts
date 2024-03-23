import { Component, OnInit, inject } from '@angular/core';
import { MemberService } from '../../../+services/member.service';
import { Member } from '../../../+models/Member';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details/member-details.component';

@Component({
  selector: 'app-librarians-members',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MemberDetailsComponent
  ],
  templateUrl: './librarians-members.component.html',
  styleUrl: './librarians-members.component.css'
})
export class LibrariansMembersComponent implements OnInit{
addData() {
  this.currentAction='add';
}
removeData() {
throw new Error('Method not implemented.');
}
editData() {
throw new Error('Method not implemented.');
}
  currentAction='list';

  data:Member[]=[]
  memberService=inject(MemberService);

  ngOnInit(): void {
    this.data=this.memberService.getMembers();
  }
  displayedColumns: string[] = [ 'isActive', 'fullname', 'gender', 'phoneNumber','email','address'];
}
