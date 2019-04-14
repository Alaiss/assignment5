import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

class Ball {
  private x;
  private y;
  private speedX;
  private speedY;
  private img;
  private p;

 constructor(p) {
    this.p=p;
    this.x=this.p.random(10,990);
    this.y=this.p.random(10,490);
    // console.log("x="+this.x);
    // console.log("y="+this.y);
    this.speedX=this.p.random(-10,10);
    this.speedY=this.p.random(-10,10);
    this.img = this.p.loadImage('../../assets/BallImg.png');
  }

  public drawBall(){
    this.p.image(this.img, this.x, this.y, this.img.width / 8, this.img.height / 8);
  }

  public update(){
    this.x=this.x+this.speedX;
    this.y=this.y+this.speedY;
  }

  //Setters
  public setX(x) {
    this.x = x;
  }

  public setY(y) {
    this.y = y;
  }

  public setSpeedX(speedX) {
    this.speedX = speedX;
  }

  public setSpeedY(speedY) {
    this.speedY = speedY;
  }
  // public setImg(img) {
  //   this.img = this.p.createImg('../../assets/BallImg.png');
  // }

  //Getters
  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }

  public getSpeedX() {
    return this.speedX;
  }

  public getSpeedY() {
    return this.speedY;
  }

  public getImg() {
    return this.img;
  }

  public getWidth(){
    return this.img.width / 8;
  }

  public getHeight(){
    return this.img.height / 8;
  }
};

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})

export class Assignment3Component implements OnInit {
  private p5;
  private B;
  private rectRX;
  private rectRY;
  private rectRWidth;
  private rectRHeight;
  private rectGX;
  private rectGY;
  private rectGWidth;
  private rectGHeight;

  constructor() { }

  private createCanvas() {
    this.p5 = new p5(this.sketch, this.B);
  }

  ngOnInit() {
    this.createCanvas();
  }

  private sketch(p: any, b: Ball, rectRX, rectRY, rectRWidth, rectRHeight, rectGX, rectGY, rectGWidth, rectGHeight) {
    p.setup = () => {
      p.createCanvas(1000, 500);
      b = new Ball(p);
      //left rect
      rectRHeight = 50;
      rectRWidth = 100;
      rectRY = p.height-rectRHeight;
      rectRX = 0;

      //right rect
      rectGHeight = 50;
      rectGWidth = 100;
      rectGY = p.height-rectGHeight;
      rectGX = p.width-rectGWidth;
    };

    p.draw = () => {
      p.background(255);
      //left rect
      if (p.mouseX > rectRX && p.mouseX < rectRX + rectRWidth && p.mouseY > rectRY && p.mouseY < rectRY + rectRHeight) {
        p.fill(255, 0, 0);
      } 
      else {
        p.fill(0, 255, 0);
      }
      p.rect(rectRX, rectRY, rectRWidth,rectRHeight);
      //

      //right rect
      if (p.mouseX > rectGX && p.mouseX < rectGX + rectGWidth && p.mouseY > rectGY && p.mouseY < rectGY + rectGHeight) {
        p.fill(0, 255, 0);
      } 
      else {
        p.fill(255, 0, 0);
      }
      p.rect(rectGX, rectGY, rectGWidth, rectGHeight);
      //

      b.drawBall();
      b.update();

      //Collision detection
      //y
      if(b.getY()+b.getHeight()*2 > p.height || b.getY()-b.getHeight()/2<0){
        b.setSpeedY(-b.getSpeedY());
      }

      //x
      if(b.getX() < 0 || b.getX()+b.getWidth() > p.width){
        b.setSpeedX(-b.getSpeedX());
      }
    };


  }
}

