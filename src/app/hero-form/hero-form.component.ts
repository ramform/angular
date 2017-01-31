import { Component, OnInit } from '@angular/core';
import {HeroClass} from "../heroClass";

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new HeroClass(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');

    submitted = false;
    phtml = "some text"

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero() {
        this.model = new HeroClass(42, '', '');
    }

    ngOnInit() {
    }

}

