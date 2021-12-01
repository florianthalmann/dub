//import * as sc from 'supercolliderjs';
import * as sc from 'supercolliderjs';
import * as _ from 'lodash';

async function run() {
  const lang = await sc.lang.boot();
  const pyr8 = await lang.interpret("(1..8).pyramid");
  console.log(pyr8);
}

run();