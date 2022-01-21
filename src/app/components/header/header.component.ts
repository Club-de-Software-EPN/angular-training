import { Component, OnInit, Input } from '@angular/core';

export type HeaderSection = {
  title: string;
  path: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public sections: HeaderSection[] = [];

  constructor() {}

  ngOnInit(): void {}
}
