import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/courses/courses.service';
import { Courses } from 'src/app/core/courses/courses.types';

@Component({
	selector: 'student-courses-details',
	templateUrl: './courses-details.component.html',
	styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
	course$: Observable<Courses> = Observable.create();
	course: Courses = {} as Courses;
	constructor(
		private _courseService: CoursesService,
		private _router: Router,
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

	/**
	 * Navigate to course content
	 */
	 navigateToCourseContent(courseId:number): void
	 {
		this._router.navigate(['contents', courseId]);
	 }
}