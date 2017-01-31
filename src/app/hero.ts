/*export class Hero {
    id: number;
    name: string;
    state: string;
}*/

export class Hero {
    constructor(
        public id: string,
        public name: string,
        public state: string = 'inactive'
    ) {}


    toggleState() {
        this.state = (this.state === 'active') ?  'inactive' : 'active';
    }

    /*toggleState() {
        this.state = (this.state === 'active') ?  'void' : 'active';
    }*/
}
