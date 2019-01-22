import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Employee, Project, Position, Team } from './vm-typicode';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

@Injectable()
export class DataManagerService {

  private url = "https://bti425teamsapi.herokuapp.com";
  private teamlist:Team[];
  private emplist:Employee[];
  private projlist:Project[];
  private poslist:Position[];  

  constructor(private http:HttpClient, private router:Router)
  {

  }
  
  getTeams(): Observable<Team[]>
  {
    return this.http.get<Team[]>(`${this.url}/teams`)
  }

  getTeam(_id:string):Observable<Team>
  {
    return this.http.get<Team>(`${this.url}/team/${_id}`);
  }

  editTeam(t:Team): Observable<any>
  {
    return this.http.put<any>(`${this.url}/team/${t._id}`, t);
  }

  createTeam(t:Team): Observable<any>
  {
    return this.http.post<any>(`${this.url}/teams`, t)
    .pipe(map(wrapper => wrapper.message));
  } 

  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.url}/employees`)
  }

  getEmployee(_id:string):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.url}/employee/${_id}`);
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`)
  }

  getProjects(): Observable<Project[]> 
  {
    return this.http.get<Project[]>(`${this.url}/projects`)
  }

  getProject(_id:string): Observable<Project>
  {
    return this.http.get<Project>(`${this.url}/project/${_id}`);;
  }
}
