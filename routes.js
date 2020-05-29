// imports
import { Router } from "./deps.js";

// router config
const router = new Router();

// routes
router.get("/", (ctx) => {
  ctx.render("views/home.ejs", { pageTitle: "Home" });
});

router.get("/about", (ctx) => {
  ctx.render("views/about.ejs", { pageTitle: "About" });
});

export default router;
