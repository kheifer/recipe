export class Recipe {
  public showHide: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }

  toggle(){
    this.showHide = !this.showHide;
  }
}
