import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  public courseId: string = '';

  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      const id = params['id'];
      this.courseId = id;
      new Promise((resolve) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve(true);
        }, 5000);
      });
    });
  }
}
