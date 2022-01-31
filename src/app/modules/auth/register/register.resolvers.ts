import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassesService } from 'src/app/core/classes/classes.service';
import { Classes } from 'src/app/core/classes/classes.types';
import { SchoolsService } from 'src/app/core/schools/schools.service';
import { Schools } from 'src/app/core/schools/schools.types';

@Injectable({
    providedIn: 'root'
})
export class ClassesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _classesService: ClassesService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classes[]> {
        return this._classesService.getAll();
    };
}

@Injectable({
    providedIn: 'root'
})
export class SchoolsResolver implements Resolve<any>
{

    /**
     * Constructor
     */
    constructor(
        private _schoolsService:SchoolsService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Schools[]> {
        return this._schoolsService.getAll();
    }
}
