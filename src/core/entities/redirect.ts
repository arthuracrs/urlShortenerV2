export interface IRedirect {
  redirectId?: string,
  owner?: string,
  inputLink: string,
  outputLink: string
}

// export class Redirect {
//   private inputLink = '';
//   private outputLink = '';

//   setInputLink(newInputLink: string) {
//     this.inputLink = newInputLink;
//   }

//   setOutputLink(newOutputLink: string) {
//     this.outputLink = newOutputLink;
//   }

//   toJson(): IRedirect {
//     return {
//       inputLink: this.inputLink,
//       outputLink: this.outputLink
//     };
//   }
// }