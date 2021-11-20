import { browser } from "$app/env";
import { writable } from "svelte/store";

export const lang = writable("es");
export const userData = writable((browser && JSON.parse(localStorage.getItem("tj_userData"))) || []);

userData.subscribe((val) => browser && (localStorage["tj_userData"] = JSON.stringify(val)));

