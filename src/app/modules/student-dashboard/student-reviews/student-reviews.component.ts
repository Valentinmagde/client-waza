import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-reviews',
    templateUrl: './student-reviews.component.html',
    styleUrls: ['./student-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

}