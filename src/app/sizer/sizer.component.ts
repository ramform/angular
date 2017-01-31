import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'my-sizer',
    template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [ngStyle]="{'font-size': size + 'px'}">FontSize: {{size}}px</label>
  </div>
  <p myHighlight [defaultColor]="'violet'">child highLight text</p>
  `
})
export class SizerComponent {
    @Input() size: number;
    @Output() sizeChange = new EventEmitter<number>();

    currentStyles = {};

    constructor() {
        this.setCurrentStyles();
    }

    setCurrentStyles() {
        this.currentStyles = {
            'font-size': this.size + 'px'}
    }

    dec() {
        this.resize(-1);
    }
    inc() {
        this.resize(+1);
    }


    resize(num: number) {
        this.size += num;
        this.setCurrentStyles();
        this.sizeChange.emit(this.size);
    }
}
