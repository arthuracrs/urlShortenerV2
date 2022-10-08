// console.clear();
// import { server } from '@src/server';

// const port = 3000;

// server.listen(port, () => {
//   console.log(`running on port ${port}`);
// });


import { IdGeneratorRepository } from "./adapters/idGenerator";
import { RedirectRepository } from "./adapters/redirectRepository";
import { inputCreateRedirect, CreateRedirect } from './core/useCases/createRedirect';

const input = new inputCreateRedirect(
  'https://developer.mozilla.org',
  'https://developer.mozilla.org',
  'fom'
);
const redirectRepository = new RedirectRepository()
const idGeneratorRepository = new IdGeneratorRepository()
const createRedirect = new CreateRedirect(redirectRepository, idGeneratorRepository);

const main = async () => {
  console.log(await createRedirect.run(input.toJson()))
}

main()