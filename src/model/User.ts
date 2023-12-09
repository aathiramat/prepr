export class User {
    public firstName: string;
    public lastName: string;
    public username: string;
    public password: string;
    public confirmPassword: string;
    public email: string;
    public userType: string;
    public language: string;
}

export enum UserType {
    learner = 'Learner',
    job_seeker = 'Job seeker / Applicant',
    employee = 'Employee',
    founder = 'Founder',
    educator = 'Educator',
    mentor = 'Mentor',
}

export enum Language {
    eng = 'English',
    fre = 'French'
}