import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-display',
  templateUrl: './detail-display.component.html',
  styleUrl: './detail-display.component.scss'
})
export class DetailDisplayComponent {
  
  buttonCount: number = 0;
  showParagraph: boolean = false;

  getButtonCount() {
    return this.buttonCount;
  }

  buttonIncrement() {
    this.buttonCount++;
    
  }

  flipShow() {
    return this.showParagraph = !this.showParagraph;
  }

  getColor() {
    return (this.getButtonCount() >=5) ? 'skyblue': 'white';
  }
}
