import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/courses/courses.service';
import { Courses } from 'src/app/core/courses/courses.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {
  courses$: Observable<Courses[]> = Observable.create();
  constructor(
    private _courseService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courses$ = this._courseService.getAll();
  }

}
