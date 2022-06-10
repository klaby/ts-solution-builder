// import { Colors } from "../color";
// import { Mode, SourceType } from "../types";

import { Colors } from "@/color";
import { Mode, SourceType } from "@/types";

export type Example = {
  type: SourceType;
  color: Colors;
  mode: Mode;
};

export function defineExample<T extends Example>(schema: T): T {
  return schema;
}
