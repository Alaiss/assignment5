import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {
  private p5;

  constructor() {
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  ngOnInit() {
    this.createCanvas();
  }

  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(700, 600);
    };

    p.draw = () => {
      p.background(255);
      p.fill(255, 165, 0);
      p.ellipse(p.width / 2, p.height / 2, 130, 200);
      p.fill(255);
      p.ellipse(p.width / 2 + 30, p.height / 2 - 40, 20, 20);
      p.ellipse(p.width / 2 - 30, p.height / 2 - 40, 20, 20);
      p.fill(255, 165, 0);
      p.triangle(p.width / 2, p.height / 2, 58, 20, 86, 75);
      p.fill(255);
      p.rect(p.width / 2 - 25, p.height / 2 + 20, 55, 15);
      p.fill(0);
      p.textSize(20);
      p.text("This is a face with a very long nose,", 30, p.height-50);
      p.text("one can even say that the nose is so big that it jumps out of the sketch!", 30, p.height-30);
    };
  }

  
}
