import { Component, OnInit,
    trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router } from '@angular/router';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    animations: [
        trigger('heroState', [
            /*state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1) translateX(0)', opacity: 1,
                //height: '*', padding: '*', minHeight: '*'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1) translateX(100%)', opacity: 0
                //height: 0, padding: 0, minHeight: 0
            })),
            transition('inactive => active', animate('200ms 0.2s ease-in')),
            transition('active => inactive', animate('200ms ease-out')),*/

            /*transition('inactive => active', [
                style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.3)'
                }),
                animate('500ms ease-in', style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                }))
            ]),*/

            state('inactive', style({ transform: 'translate(0%)' })),
            transition('void => *', [
                style({ transform: 'translate(-100%)' }), animate(250)
            ]),
            transition('* => void', [
                animate(250, style({ transform: 'translateX(100%)', opacity: 0 }))
            ])

            /*transition('void => inactive', [
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(1000)
            ]),
            transition('inactive => void', [
                animate(1000, style({transform: 'translateX(100%) scale(1)'}))
            ]),
            transition('void => active', [
                style({transform: 'translateX(0) scale(0)'}),
                animate(2000)
            ]),
            transition('active => void', [
                animate(2000, style({transform: 'translateX(0) scale(0)'}))
            ])*/

            /*state('inactive', style({ transform: 'translate(0)' })),
            state('active', style({ opacity: 0, transform: 'translate(100%)' })),
            transition('inactive => active', [
                animate(2000, keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0}),
                    style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                    style({ opacity: 0, transform: 'translateX(100%)', offset: 1})
                ]))
            ]),
            transition('active => inactive', [
                animate(2000, keyframes([
                    style({ transform: 'translateX(0)', offset: 0}),
                    style({ transform: 'translateX(15px)', offset: 0.7}),
                    style({ transform: 'translateX(-100%)', offset: 1})
                ]))
            ])*/
        ])
    ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    selectedHero: Hero;
    newHero = new Hero("", "");
    profiles: {};

    constructor(private heroService: HeroService, private router: Router) {
    }

    /*getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }*/

    ngOnInit() {
        //this.getHeroes()

        this.getNextHero()

        //this.heroService.getHeroesHttp().subscribe(data => {this.profiles = data; console.log(this.profiles)});
        /*this.heroService.getHeroesHttpPromise()
            .then((data) => this.profiles = data);*/
    }
    getNextHero() {
        this.heroService.getHeroes()
            .then(heroes => {
                if (this.heroes.length < heroes.length) {
                    var hero = heroes[this.heroes.length]
                    this.heroes.push(new Hero(hero.id, hero.name))
                }
            } ).catch(error => console.log("error parent", error));
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    goDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    animationDone(event: any) {
        this.getNextHero();
    }

    addHero() {
        this.heroService.addHero(this.newHero)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    delete(id: string) {
        console.log(id)
        this.heroService.deleteHero(id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h.id != id);
            })
    }

}
