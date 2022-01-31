import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Classes } from './classes.types';

@Injectable({
    providedIn: 'root',
})
export class ClassesService {

    private _class: ReplaySubject<Classes> = new ReplaySubject<Classes>(1);
    private _classes: ReplaySubject<Classes[]> = new ReplaySubject<Classes[]>(1);

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
     * Getter for classes
     */
    get class$(): Observable<Classes> {
        return this._class.asObservable();
    }

    /**
     * Getter for classes
     */
    get classes$(): Observable<Classes[]> {
        return this._classes.asObservable();
    }

    /**
     * Setter for classes
     */
    set class(value: Classes) {
        this._class.next(value);
    }

    /**
     * Setter for classes
     */
    set classes(value: Classes[]) {
        this._classes.next(value);
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all classes
     */
    getAll(): Observable<Classes[]> {
        return this._httpClient.get<Classes[]>('api/classes').pipe(
            tap((response) => {
                this._classes.next(response);
            })
        );
    }
}
