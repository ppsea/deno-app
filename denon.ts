import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 8000;
const HOST = env.HOST || "localhost";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Denon is implemented";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`App is listening on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);
