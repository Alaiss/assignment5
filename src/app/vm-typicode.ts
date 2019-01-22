export class Position {
    _id:         string;
    PositionName: string;
    PositionDescription: string;
    PositionBaseSalary: number;
    __v: number;
}

export class Employee {
    _id:         string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position: Position;
    HireDate: string;
    SalaryBonus: number;
    __v: number;
}

export class Project {
    _id:         string;
    ProjectName: string;
    ProjectDescription:  string;
    ProjectStartDate: string;
    ProjectEndDate: null;
    __v: number;
}

export class Team {
    _id:      string;
    TeamName: string;
    TeamLead: Employee;
    __v:      number; //maybe needs deletion
    Employees: Employee[];
    Projects: Project[];
}


