export interface IRedirect {
  redirectId: string,
  owner: string,
  inputLink: string,
  outputLink: string
}

export interface IRedirectRepository {
  create(redirect: IRedirect): Promise<string>
}

export interface IIdGeneratorRepository {
  generate(): string
}

export interface IInputCreateRedirect {
  inputLink: string;
  outputLink: string;
  owner: string;
}

export function isValidURL(string: string) {
  const res: any = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
  return (res !== null);
}

export class inputCreateRedirect {
  constructor(
    protected _inputLink: string,
    protected _outputLink: string,
    protected _owner: string,
  ) { }

  public get inputLink() {
    return this._inputLink;
  }

  public set inputLink(inputLink: string) {
    if (!isValidURL(inputLink)) {
      throw new Error('fom');
      
    }
    this._inputLink = inputLink;
  }

  public get outputLink() {
    return this._outputLink;
  }

  public set outputLink(outputLink: string) {
    this._outputLink = outputLink;
  }

  public get owner() {
    return this._owner;
  }

  public set owner(owner: string) {
    this._owner = owner;
  }
}


export class CreateRedirect {
  constructor(
    private redirectRepository: IRedirectRepository,
    private idGeneratorRepository: IIdGeneratorRepository
  ) { }

  async run(inputCreateRedirect: IInputCreateRedirect): Promise<IRedirect> {

    const redirect: IRedirect = {
      redirectId: this.idGeneratorRepository.generate(),
      owner: inputCreateRedirect.owner,
      inputLink: inputCreateRedirect.inputLink,
      outputLink: inputCreateRedirect.outputLink
    };

    await this.redirectRepository.create(redirect);

    return redirect;
  }

}