// CURRENTLY CREATING TYPES DOESNT INCLUDE FUNCTIONS
// const data = await Deno.emit("mod.ts", {
//   compilerOptions: {
//     declaration: true,
//     emitDeclarationOnly: true,
//     declarationDir: "./index.d.ts",
//   },
// });
// Deno.writeTextFileSync(
//   "dist/index.d.ts",
//   Object.entries(data.files)
//     .map((x) => (x[1].includes("export * from") || x[1].includes("import type {") ? "" : x[1]))
//     .join("\n")
// );
