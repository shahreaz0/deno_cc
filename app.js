import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  if (req.url === "/" && req.method === "GET") {
    req.respond({ body: "<h1>Home</h1>" });
  } else if (req.url === "/about" && req.method === "GET") {
    req.respond({ body: "<h1>Shahreaz</h1>" });
  }
}
