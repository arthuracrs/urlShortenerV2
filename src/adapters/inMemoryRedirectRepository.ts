/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IRedirect } from '@src/core/entities/redirect';
import { IRedirectRepository } from '@src/core/port/redirectRepository';
import { InMemoryDB } from './db/inMemoryDB';

export class RedirectRepository implements IRedirectRepository {
  private redirectsKey = 'redirects';

  constructor(private db: InMemoryDB) { }

  create(redirect: IRedirect): Promise<any> {
    const newRedirect = (this.db.save(this.redirectsKey, redirect));

    return new Promise((resolve) => {
      resolve(newRedirect);
    });
  }

  load(id: string): Promise<IRedirect | false> {
    const redirects: Array<IRedirect> = this.db.load(this.redirectsKey);

    if (redirects == undefined) {
      this.db.save(this.redirectsKey, []);

      return new Promise((resolve) => {
        resolve(false);
      });
    }

    for (let i = 0; i < redirects.length; i++) {
      if (redirects[i].outputLink == id) {
        return new Promise((resolve) => {
          resolve(redirects[i]);
        });
      }
    }

    return new Promise((resolve) => {
      resolve(false);
    });
  }

}