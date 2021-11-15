import { browser } from "$app/env";
import { writable } from "svelte/store";

export const lang = writable("es");
export const userData = writable((browser && JSON.parse(localStorage.getItem("userData"))) || []);

userData.subscribe((val) => browser && (localStorage.userData = JSON.stringify(val)));