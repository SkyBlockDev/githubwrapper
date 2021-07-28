import { createGist, getGist, deleteGist, updateGist } from "../../mod.ts";
Deno.test("Create a gist get it and delete it after", async () => {
  const gist = await createGist({
    description: "This gist was created using githubwrapper",
    files: {
      "thisfile.md": {
        name: "thisfile.md",
        content: "# this file",
      },
    },
  });
  //See if the id is valid
  await getGist(gist.id);

  await updateGist(gist.id, {
    description: "This gist was edited using githubwrapper",
    files: {
      "thisfile2.md": {
        name: "thisfil2e.md",
        content: "# File twoo",
      },
    },
  });

  await deleteGist(gist.id);
});
