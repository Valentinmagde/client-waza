import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from './user.types';
import { NgxRolesService } from 'ngx-permissions';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _roleService: NgxRolesService
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for user
     */
    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    /**
     * Setter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._user.next(value);

        // Flush all roles on every user update
        // this._roleService.flushRoles();

        // Set user roles for further navigation
        // value.roles.forEach(({ role }: any) => {

        //     // CLient type and account type, whether principal or not, are considered as roles too
        //     this._roleService.addRole(role.name, () => true);
        // });
    }

    /**
     * Setter & getter for agents
     *
     * @param value
     */

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        return this._httpClient.get<User>('@api/user/authenticated').pipe(
            tap((user) => {
                this._user.next(user);
            })
        );
    }

    /**
     * Get user by id
     */
     getById(id: string): Observable<User> {
        return this._httpClient.get<User>(`@api/user/id/${id}`);
    }

    /**
     * Get all users
     */
    getAll(): Observable<any> {
        return this._httpClient.get<any>('@api/user');
    }

    /**
     * Get all users that are not clients
     */
     getAllNotClient(): Observable<any> {
        return this._httpClient.get<any>('@api/user/not/client');
    }

    /**
     * Add user
     *
     */
    addUser(user: {
        firstName: string;
        phone: string;
        password: string;
    }): Observable<any> {
        return this._httpClient.post<User>('@api/user', user);
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any> {
        // Differentiate between logged in user and agent
        let loggedInUser: User;
        this.user$.subscribe(sessionUser => (loggedInUser = sessionUser));

        return this._httpClient.put<User>(`@api/user/id/${user.id}`, user).pipe(
            map((response) => {
                if (loggedInUser.id === user.id) {
                    this._user.next(response);
                }

                return of(response);
            })
        );
    }

    /**
     * Delete the user
     *
     * @param user
     */
    delete(userId: number): Observable<any> {
        return this._httpClient.delete<any>(`@api/user/id/${userId}`);
    }

    /**
     * Update the password
     *
     * @param user
     */
    updatePassword(id: number, data: any): Observable<any> {
        return this._httpClient.put<User>(
            `@api/user/${id}/update/password`,
            data
        );
    }

    /**
     * Update the avatar of the given contact
     *
     * @param id
     * @param avatar
     */
    uploadAvatar(id: number, avatar: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('File', avatar);

        return this._httpClient
            .put<User>(`@api/user/${id}/update/profile`, formData)
            .pipe(
                map((response) => {
                    this._user.next(response);
                }),
                switchMap(updatedUser =>
                    this.user$.pipe(
                        // Return the updated user
                        tap(_ => updatedUser)
                    )
                )
            );
    }

    /**
     * Get all agents by client
     *
     * @param clientId
     */
    addUserByRole(
        roleId: string,
        user: { firstName: string; phone: string; password: string }
    ): Observable<User> {
        return this._httpClient.post<User>(
            `@api/user/new/by/role/${roleId}`,
            user
        );
    }


    /**
     * Get all users by specific role
     *
     * @param roleId
     */
     getAllUsersByRole(roleId: string): Observable<any> {
        return this._httpClient.get<any>(`@api/user/userhasroles/users/by/role/${roleId}`);
    }

    /**
     * Get all agents by client
     *
     * @param clientId
     */
    addUserRole(userRole: { userId: number; roleId: number }): Observable<any> {
        return this._httpClient.post<any>('@api/user/userhasroles', userRole);
    }

    /**
     * Get all agents by client
     *
     * @param clientId
     */
    removeUserRole(userId: string, roleId: string): Observable<any> {
        return this._httpClient.delete<any>(
            `@api/user/userhasroles/by/user/${userId}/role/${roleId}`
        );
    }
}
