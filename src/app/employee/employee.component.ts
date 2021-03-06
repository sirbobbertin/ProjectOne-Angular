import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 allInfo: Employee[] = [];


updateInfo: Employee = {
  id: 0,
  userName: '',
  password:'',
  address:'',
  jobType:1
}

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
   // var employeeId =
  }

  editInfo(){
    this.employeeService.updateInfoService(this.updateInfo).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['employee-info']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  goToEditComponent(employeeId: any){
    console.log("logged: " + employeeId);
    this.router.navigate(['employee-edit', employeeId])
  }

  retrieveUserEmployeeType(){
    return this.authService.retrieveUserEmployeeType();
  }

  

  
  // viewInfo(){
  //   this.employeeService.viewInfoService().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.router.navigate(['employee-info']);
  //     },
  //     (error)=> {
  //       console.log(error);
  //     }
  //   );
  // }
}
