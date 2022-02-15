import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/courses/courses.service';
import { Courses } from 'src/app/core/courses/courses.types';

@Injectable({
    providedIn: 'root'
})
export class CourseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _courseService: CoursesService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Courses[]> {
        return this._courseService.getAll();
    };
}
