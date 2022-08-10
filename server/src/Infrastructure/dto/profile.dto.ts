export class CreateProfileDto {
    readonly name: string;
    readonly age: number;

    constructor(name : string, age: number){
      this.name = name;
      this.age = age;
    }
  }