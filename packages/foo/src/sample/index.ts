import { defineExample } from "bar";

// Look at packages/foo/dist/src/sample/index.d.ts
export const Example = defineExample({
  type: "fails",
  color: "blue",
  mode: "development",
});
