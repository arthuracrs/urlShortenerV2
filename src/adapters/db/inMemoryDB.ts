/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class InMemoryDB {
  private memory: any = {};

  save(key: string, value: any): any {
    if (this.memory[key] === undefined){
      this.memory[key] = [value];
      return value;
    }
    
    return true;
  }

  load(key: string): any {
    return this.memory[key];
  }

  print(){
    console.log('===============DB================');
    console.log(this.memory);
    console.log('=================================');
  }
}