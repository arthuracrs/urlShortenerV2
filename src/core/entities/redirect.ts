

export class Redirect {
  private inputLink = '';
  private outputLink = '';

  setInputLink(newInputLink: string) {
    this.inputLink = newInputLink;
  }

  setOutputLink(newOutputLink: string) {
    this.outputLink = newOutputLink;
  }

  toJson(): any {
    return {
      inputLink: this.inputLink,
      outputLink: this.outputLink
    };
  }
}