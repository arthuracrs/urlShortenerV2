import { IRedirect } from '@src/core/entities/redirect';
import { IRedirectRepository } from '@src/core/port/redirectRepository';
import { IInputLoadRedirect } from './inputLoadRedirect';


export class LoadRedirect {
  constructor(private loadRedirect: IRedirectRepository) { }

  async run(inputLoadRedirect: IInputLoadRedirect): Promise<IRedirect | false> {
    return await this.loadRedirect.load(inputLoadRedirect.id);
  }
}
