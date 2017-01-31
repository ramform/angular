import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Hero} from "./hero";
import { HEROES } from "./moke-hero";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = "http://rest.learncode.academy/api/google/friends/";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    /*getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }*/

    /*getHero(id: number) : Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id == id));
    }*/

    getHeroesHttp() {
        return this.http.get(this.heroesUrl)
            .map((res: Response) => res.json())
    }

    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then((res: Response) => res.json())
            .catch(this.handleError);
    }

    getHero(id: string) {
        return this.http.get(this.heroesUrl + id)
            .toPromise()
            .then(hero => hero.json())
            .catch(this.handleError)
    }

    addHero(hero) {
        var newHero = {name: hero.name, job: 'nothing'}
        return this.http.post(this.heroesUrl, newHero)
            .toPromise()
            .then((res: Response) => res.json())
            .catch(this.handleError)
    }

    updateHero(hero) {
         this.http.put(this.heroesUrl + hero.id, hero)
            .toPromise()
            .then()
            .catch(this.handleError)
    }

    deleteHero(id: string) {
        return this.http.delete(this.heroesUrl + id)
            .toPromise()
            .then()
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
