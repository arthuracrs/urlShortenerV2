import { IRedirect } from '../entities/redirect';

export interface IRedirectRepository {
    create(redirect: IRedirect): Promise<IRedirect>
    load(id: string): Promise<IRedirect | false>
}
