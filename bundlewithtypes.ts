const data = await Deno.emit("dist/browser.bundle.js", {
  compilerOptions: {
    declaration: true,
    emitDeclarationOnly: true,
    declarationDir: "./",
  },
});

Deno.writeTextFileSync(
  "dist/index.d.ts",
  Object.entries(data.files)
    .map((x) => x[1])
    .join("\n")
);
