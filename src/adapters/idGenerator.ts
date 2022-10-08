import { v4 as uuidv4 } from 'uuid';

import { IIdGeneratorRepository } from '../core/useCases/createRedirect'

export class IdGeneratorRepository  implements IIdGeneratorRepository{
    generate(): string {
        return uuidv4()
    }
}