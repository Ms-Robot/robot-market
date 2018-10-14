import { Component, OnInit } from '@angular/core';
import { Robot } from './interfaces/robot.interface';
import { RobotsService } from '../../../services/robots.service';

@Component({
  selector: 'app-robot-table',
  templateUrl: './robot-table.component.html',
  styleUrls: ['./robot-table.component.css']
})
export class RobotTableComponent implements OnInit {
  robots:Robot[]=[]

  constructor(public robotsService: RobotsService) { }

  ngOnInit() {
    this.robots = this.robotsService.getRobots()
  }
 
}
