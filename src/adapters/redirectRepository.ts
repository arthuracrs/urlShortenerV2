import { IRedirect, IRedirectRepository } from "@src/core/useCases/createRedirect";

export class RedirectRepository implements IRedirectRepository {
    create(redirect: IRedirect): Promise<string> {
        return new Promise((resolve, reject)=>{
            resolve('')
        })
    }
}