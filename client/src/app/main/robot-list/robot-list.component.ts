import { Component, OnInit } from '@angular/core';
import { Robot } from '../../shared/interfaces/robot.interface';
import { RobotsService } from '../../shared/services/robots.service';

@Component({
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})

export class RobotListComponent implements OnInit {
  robots: Robot[] = [];

  constructor(public robotsService: RobotsService) {
  }

  ngOnInit() {
    this.robotsService.getRobots()
      .subscribe(
        (robots: Robot[]) => this.robots = robots,
        (err) => console.log(err)
      );
  }
}
