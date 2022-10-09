import { isValidURL } from '@utils';

export interface IInputCreateRedirect {
    inputLink: string;
    outputLink: string;
    owner: string;
  }
  
export class InputCreateRedirect {
  constructor(
      private inputLink: string,
      private outputLink: string,
      private owner: string,
  ) { 
    if (inputLink.length === 0 || !isValidURL(inputLink)) {
      throw new Error('Invalid inputLink');
    }
  
    if (outputLink.length === 0 || !isValidURL(outputLink)) {
      throw new Error('Invalid outputLink');
    }

    if (owner.length === 0) {
      throw new Error('Invalid outputLink');
    }
  }
  
  toJson(): IInputCreateRedirect{
    return {
      inputLink: this.inputLink,
      outputLink: this.outputLink,
      owner: this.owner
    };
  }
}