import { getRepository, getRepositories, getRepositoryArtifacts, getRepositoryArtifact, createRepository } from "../../mod.ts";

Deno.test("View the coolest repository on github", async () => {
  await getRepository("skyblockdev", "githubwrapper");
});

Deno.test("View the repositories of a cool organization", async () => {
  await getRepositories("skytils");
});

Deno.test("Get the artifacts and view one of them", async () => {
  const artifacts = await getRepositoryArtifacts("skytils", "skytilsmod");
  await getRepositoryArtifact("skytils", "skytilsmod", artifacts.artifacts[0].id.toString());
});

if (Deno.env.get("TEST_ORG"))
  Deno.test("Create a repository", async () => {
    await createRepository(Deno.env.get("TEST_ORG")!, {
      name: "this is a test repo",
    });
  });
