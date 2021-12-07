import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroeComponent {
    name: string = 'iron man';
    age: number = 30;

    get capitalizedName(): string {
        return this.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    } 

    changeName(): void {
        this.name = 'deadpool';
    }

    changeAge(): void {
        this.age = 27;
    }

    reset(): void {
        this.name = 'iron man';
        this.age = 30;
    }
}