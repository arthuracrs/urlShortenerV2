import { IIdGeneratorRepository } from '@src/core/port/idGeneratorRepository';
import { v4 as uuidv4 } from 'uuid';


export class IdGeneratorRepository implements IIdGeneratorRepository{
  generate(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return uuidv4();
  }
}