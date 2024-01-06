import { type ClassValue, clsx } from ".vscode/node_modules/clsx/clsx.d.mts";
import { twMerge } from ".vscode/node_modules/tailwind-merge/dist/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
