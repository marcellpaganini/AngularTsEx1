export class Foo {

    constructor(public name:string){
        this.name = name;
    }

    fire():void {
        console.log('BANG!')
    }

    fireWeapon(weapon:Foo.Weapons):void {
        console.log(`Fire the ${weapon}`);
    }

    fireWeaponToString(weapon:Foo.Weapons):string{
        return Foo.Weapons[weapon];
    }
}

export namespace Foo {
    export enum Weapons {Cannon, Torpedos, MachineGun, DeathRay, NailGun};
}

let myFirstFoo = new Foo('Lenny');

console.log(`I am a Foo and my name is ${myFirstFoo.name}`);
myFirstFoo.fire();
myFirstFoo.fireWeapon(Foo.Weapons.Cannon);

let theWeapon:string;
theWeapon = myFirstFoo.fireWeaponToString(Foo.Weapons.DeathRay);
console.log(`The weapon fired from toString is ${theWeapon}`);