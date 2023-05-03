import { Emitter } from "@wallerbuilt/mycelia";
import { Events } from "./types/Events";

const emit = new Emitter();

export type State = {
	toggled: boolean;
};

export let state: State = {
	toggled: false,
};

// publishers/dispatchers
export const pubs = {
	toggleBtnClick: emit.dispatch(Events.ToggleBtnClick),
};

// subscribers/listeners
export const subs = {
	onToggleBtnClick: emit.on(Events.ToggleBtnClick),
};
