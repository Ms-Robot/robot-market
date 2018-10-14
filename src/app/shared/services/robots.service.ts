import { Injectable } from '@angular/core';
import { Robot, Nature } from '../components/robot-table/interfaces/robot.interface';


@Injectable({
  providedIn: 'root'
})
export class RobotsService {
  robots: Robot[] = [{
    name: 'Mischa',
    type: 'Helper',
    nature: Nature.good,
    numberOfParts: 42
  },
  {
    name: 'Glutton',
    type: 'Feeder',
    nature: Nature.bad,
    numberOfParts: 9999999999999999999
  },
  {
    name: 'Serce',
    type: 'Motivator',
    nature: Nature.good,        
    numberOfParts: 1
  }];
 

  getRobots () {
    return this.robots;
  }
  addRobot() {
    this.robots.push({
      name: 'Lucifer',
      type: 'Allurer ',
      nature: Nature.bad,
      numberOfParts: 666
    })
  }

}
