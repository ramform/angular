import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';
import {Hero} from "../hero";

@Component({
    selector: 'app-hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
    @Input() hero:Hero;
    title : string = '';

    constructor(
        private route:ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) {}

    ngOnInit():void {
        let id = this.route.snapshot.params['id'];
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        this.location.back();
    }

    save() {
        this.heroService.updateHero(this.hero)
        console.log(this.hero)
    }

    onUpdate(value : string) {
        if (value) {
            this.title += '<li>' + value + '</li>';
        }
    }

}
