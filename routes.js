// imports
import { Router } from "https://deno.land/x/oak/mod.ts";

// router config
const router = new Router();

// routes
router.get("/", ({ response }) => {
  response.type = "html";
  response.body = "<h1>Home</h1>";
});

router.get("/about", ({ response }) => {
  response.type = "html";
  response.body = "<h1>About</h1>";
});

export default router;
