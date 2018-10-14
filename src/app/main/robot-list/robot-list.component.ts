import { Component } from "@angular/core";
import { Robot } from "../../shared/interfaces/robot.interface";
import { RobotsService } from "../../shared/services/robots.service";


@Component({
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})

export class RobotListComponent {
    robots:Robot[]=[]

  constructor(public robotsService: RobotsService) { }

  ngOnInit() {
    this.robots = this.robotsService.getRobots()
  }
}
