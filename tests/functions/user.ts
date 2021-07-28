import { getUser } from "../../mod.ts";

Deno.test("Find the coolest person on github", async () => {
  await getUser("SkyBlockDev");
});
