import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  public constructor(private httpClient: HttpClient) {
  }

  getRobots() {
    return this.httpClient.get('http://localhost:3000/robots');
  }

  addRobot() {
    // this.robots.push({
    //   name: 'Lucifer',
    //   type: 'Allurer ',
    //   nature: Nature.bad,
    //   numberOfParts: 666
    // });
  }

}
