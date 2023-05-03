import { dom, mount } from "@wallerbuilt/mycelia";

import Button from "@/components/Button";
import buttonStyle from "@/components/ButtonStyle.module.css";
import { combineClasses, swapClass } from "helpers/className";
import { pubs, subs, state } from "store";

type BtnClickEvt = Event & { target: HTMLButtonElement }

const appSelector = "#app";

const { div, hr, h3 } = dom;

const toggleBtnClass = combineClasses(buttonStyle.base, buttonStyle.bgLight);

const ToggleBgButton = Button({
	className: toggleBtnClass,
	textContent: "Click me!",
	onclick: (e) => {
		state.toggled = !state.toggled
		pubs.toggleBtnClick(e)
	}
}) as HTMLButtonElement;

const swap = (e: BtnClickEvt) =>
	state.toggled
		? swapClass(buttonStyle.bgLight, buttonStyle.bgDark, e.target)
		: swapClass(buttonStyle.bgDark, buttonStyle.bgLight, e.target)

subs.onToggleBtnClick(swap);

const App = div({}, [
	h3("Buttons"),
	hr(),
	Button("hello"),
	ToggleBgButton
]);

mount(App, appSelector);
