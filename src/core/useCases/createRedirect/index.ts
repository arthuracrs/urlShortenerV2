import { IRedirect } from '@src/core/entities/redirect';
import { IIdGeneratorRepository } from '@src/core/port/idGeneratorRepository';
import { IRedirectRepository } from '@src/core/port/redirectRepository';
import { IInputCreateRedirect } from './inputCreateRedirect';

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