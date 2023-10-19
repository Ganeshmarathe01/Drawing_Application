import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent{

  @ViewChild('canvas') private canvas: ElementRef;
  private cx: any;

  constructor(private socketService: SocketService) {
    this.socketService.connect();

    this.socketService.onDrawingData().subscribe((data: any) => {
      this.drawOnCanvas(data.prevPos, data.currentPos);
    });
  }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }
  

}

  
