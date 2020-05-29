// imports
import { Application } from "./deps.js";
import { magenta } from "./deps.js";
import router from "./routes.js";

// oak configs
const app = new Application();
const port = 8000;

// router config
app.use(router.routes());
app.use(router.allowedMethods());

// server
console.log(magenta(`http://localhost:${port}/`));
await app.listen({ port });
