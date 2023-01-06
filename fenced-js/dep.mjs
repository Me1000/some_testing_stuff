import { foo2 } from "./dep2.mjs";

export function foo() {
    foo2();
}