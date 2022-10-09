import { IRedirect } from '@src/core/entities/redirect';
import { IRedirectRepository } from '@src/core/port/redirectRepository';
import { IInputCreateRedirect } from './inputCreateRedirect';

export class CreateRedirect {
  constructor(
    private redirectRepository: IRedirectRepository,
  ) { }

  async run(inputCreateRedirect: IInputCreateRedirect): Promise<IRedirect> {

    const redirect: IRedirect = {
      owner: inputCreateRedirect.owner,
      inputLink: inputCreateRedirect.inputLink,
      outputLink: inputCreateRedirect.outputLink
    };

    await this.redirectRepository.create(redirect);

    return redirect;
  }
}