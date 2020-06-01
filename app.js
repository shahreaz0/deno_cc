// imports
import { Application, send } from "./deps.js";
import { magenta } from "./deps.js";
import router from "./routes.js";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "./deps.js";

// oak configs
const app = new Application();
const port = 8000;

//views configs
const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();
app.use(viewEngine(oakAdapter, ejsEngine));

// router config
app.use(router.routes());
app.use(router.allowedMethods());

// server
console.log(magenta(`http://localhost:${port}/`));
await app.listen({ port });
