const data = await Deno.emit("mod.ts", {
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
