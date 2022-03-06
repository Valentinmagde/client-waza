import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Courses } from './courses.types';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {

    private _course: ReplaySubject<Courses> = new ReplaySubject<Courses>(1);
    private _courses: ReplaySubject<Courses[]> = new ReplaySubject<Courses[]>(1);

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for courses
     */
    get course$(): Observable<Courses> {
        return this._course.asObservable();
    }

    /**
     * Getter for courses
     */
    get courses$(): Observable<Courses[]> {
        return this._courses.asObservable();
    }

    /**
     * Setter for courses
     */
    set class(value: Courses) {
        this._course.next(value);
    }

    /**
     * Setter for courses
     */
    set courses(value: Courses[]) {
        this._courses.next(value);
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all courses
     */
     getById(courseId: string): Observable<Courses> {
        return this._httpClient.get<Courses>(`api/course/${courseId}`).pipe(
            tap((response) => {
                this._course.next(response);
            })
        );
    }

    /**
     * Get all courses
     */
    getAll(): Observable<Courses[]> {
        return this._httpClient.get<Courses[]>('api/courses').pipe(
            tap((response) => {
                this._courses.next(response);
            })
        );
    }
}
