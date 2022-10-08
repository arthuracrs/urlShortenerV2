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
    private inputLink: string,
    private outputLink: string,
    private owner: string,
  ) { 
    if (!isValidURL(inputLink)) {
      throw new Error('Invalid inputLink');
    }

    if (!isValidURL(outputLink)) {
      throw new Error('Invalid outputLink');
    }
  }

  toJson(): IInputCreateRedirect{
    return {
      inputLink: this.inputLink,
      outputLink: this.outputLink,
      owner: this.owner
    }
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