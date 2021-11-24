import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 allInfo: Employee[] = [];


updateInfo: Employee = {
  id: 0,
  username: '',
  password:'',
  address:''
}

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

  //come back
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
