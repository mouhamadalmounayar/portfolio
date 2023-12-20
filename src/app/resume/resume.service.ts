import { Injectable } from '@angular/core'
@Injectable({
    providedIn: 'root',
})
export class Statistics {
    private projects: number;
    private certification: number;
    private problems: number;
    constructor() {
        this.projects = 0;
        this.certification = 0;
        this.problems = 0;
    }
    getProjects(): number {
        return this.projects;
    }
    getCertification(): number {
        return this.certification;
    }
    getProblems(): number {
        return this.problems;
    }

}