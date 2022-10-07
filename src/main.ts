// console.clear();
// import { server } from '@src/server';

// const port = 3000;

// server.listen(port, () => {
//   console.log(`running on port ${port}`);
// });

import { inputCreateRedirect } from './core/useCases/createRedirect';

const newInput = new inputCreateRedirect('fom', 'fom', 'fom');

newInput.inputLink = 'https://developer.mozilla.org/en-US/docs/Web/API/URL';

console.log(newInput.inputLink);