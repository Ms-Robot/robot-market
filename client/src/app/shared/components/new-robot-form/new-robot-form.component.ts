import { Component, OnInit } from '@angular/core';
import { Nature } from '../../interfaces/robot.interface';

@Component({
  selector: 'app-new-robot-form',
  templateUrl: './new-robot-form.component.html',
  styleUrls: ['./new-robot-form.component.css']
})
export class NewRobotFormComponent implements OnInit {
  robotNameVariable: string;
  robotEmailVariable: string;
  robotNatureVariable: Nature;
  robotNumberOfPartsVariable: number;


  constructor() { }

  ngOnInit() {
  }

  saveRobot() {
    console.log(this.robotNameVariable)
  }

}
