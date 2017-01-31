import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sizer-parent',
    template: `
    <my-sizer [size]="startSize" (sizeChange)="startSize = $event"></my-sizer>
    <div [ngStyle]="{'font-size': startSize + 'px'}">parent resizable text {{ startSize }}px</div>
    <input type="number" name="sizer" [(ngModel)]="startSize">

    <p [myHighlight]="color">Highlight me!</p>
    `,
    styles: [':host {display: block; border: 1px solid black;} :host /deep/ p {font-size: 25px }']
})
export class SizerParentComponent implements OnInit {
    startSize: number = 22;
    color: string = "red";

    constructor() {
    }

    ngOnInit() {
    }

    changeSize(event: number) {
        this.startSize = event;
    }
}