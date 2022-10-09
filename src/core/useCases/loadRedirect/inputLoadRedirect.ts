export interface IInputLoadRedirect {
    id: string
}

export class InputLoadRedirect {
  constructor(private id: string){
    if(id.length === 0){
      throw new Error('Invalid id');
    }
  }

  toJson(){
    return {
      id: this.id
    };
  }
}