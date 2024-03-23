import { Injectable } from '@angular/core';
import { Member } from '../+models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private members:Member[]=[
    {id:1001,isActive:true,fullname:'زهرا کریمی',gender:'خانم',phoneNumber:'09124356090',email:'zahrakarimi@gmail.com',address:'تهران'},
    {id:1002,isActive:true,fullname:'سارا رمصانی',gender:'خانم',phoneNumber:'09184356090',email:'sararamezani@gmail.com',address:'همدان'},
    {id:1003,isActive:true,fullname:'محسن ایمانی',gender:'آقا',phoneNumber:'09121230099',email:'Mohsenimani@gmail.com',address:'یزد'},
    {id:1003,isActive:false,fullname:'مبین کریمی',gender:'آقا',phoneNumber:'09337896010',email:'mobinkarimi@gmail.com',address:'فارس'},
  ];

  getMembers(){
    return this.members;
  };

  addMembers(member:Member){
    return this.members.push(member);
  };
}
