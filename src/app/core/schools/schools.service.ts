import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Schools } from './schools.types';

@Injectable({
    providedIn: 'root',
})
export class SchoolsService {

    private _school: ReplaySubject<Schools> = new ReplaySubject<Schools>(1);
    private _schools: ReplaySubject<Schools[]> = new ReplaySubject<Schools[]>(1);

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
     * Getter for Schools
     */
    get school$(): Observable<Schools> {
        return this._school.asObservable();
    }

    /**
     * Getter for Schools
     */
    get schools$(): Observable<Schools[]> {
        return this._schools.asObservable();
    }

    /**
     * Setter for Schools
     */
    set school(value: Schools) {
        this._school.next(value);
    }

    /**
     * Setter for Schools
     */
    set schools(value: Schools[]) {
        this._schools.next(value);
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all Schools
     */
    getAll(): Observable<Schools[]> {
        return this._httpClient.get<Schools[]>('api/schools').pipe(
            tap((response) => {
                this._schools.next(response);
            })
        );
    }
}
