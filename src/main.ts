import { IdGeneratorRepository } from './adapters/idGenerator';
import { RedirectRepository } from './adapters/inMemoryRedirectRepository';
import { CreateRedirect } from './core/useCases/createRedirect';
import { LoadRedirect } from './core/useCases/loadRedirect';
import { InputCreateRedirect } from './core/useCases/createRedirect/inputCreateRedirect';
import { InputLoadRedirect } from './core/useCases/loadRedirect/inputLoadRedirect';
import { InMemoryDB } from './adapters/db/inMemoryDB';

const main = async () => {
  const db = new InMemoryDB();

  const redirectRepository = new RedirectRepository(db);

  const idGeneratorRepository = new IdGeneratorRepository();
  const inputCreateRedirect = new InputCreateRedirect(
    'https://developer.mozilla.org',
    'https://developer.mozilla.org',
    'fom'
  );
  const createRedirect = new CreateRedirect(redirectRepository, idGeneratorRepository);
  const loadRedirect = new LoadRedirect(redirectRepository);
  
  const newRedirect = await createRedirect.run(inputCreateRedirect.toJson());
  const inputLoadRedirect = new InputLoadRedirect(new String(newRedirect.redirectId).toString());

  console.log(await loadRedirect.run(inputLoadRedirect.toJson()));
};

main().catch(err => {
  console.log(err);
});