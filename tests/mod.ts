import { setToken } from "../mod.ts";
if (Deno.env.get("TOKEN")) setToken(Deno.env.get("TOKEN")!);
import "./functions/mod.ts";
