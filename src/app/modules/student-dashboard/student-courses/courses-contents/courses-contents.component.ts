import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/courses/courses.service';
import { Courses } from 'src/app/core/courses/courses.types';

@Component({
	selector: 'student-courses-contents',
	templateUrl: './courses-contents.component.html',
	styleUrls: ['./courses-contents.component.scss']
})
export class CoursesContentsComponent implements OnInit {
	course$: Observable<Courses> = Observable.create();
	course: Courses = {} as Courses;
	constructor(
		private _courseService: CoursesService,
	) { }

	ngOnInit(): void {
		this.course$ = this._courseService.course$;
	}

    relatedCoursesSlides: OwlOptions = {
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true
    }
}