import { dom, Emitter, mount } from "@wallerbuilt/mycelia";
import Button from "@/components/Button";
import buttonStyle from "@/components/ButtonStyle.module.css";
import { Events } from "./types/Events";
import { combineClasses, hasClass, swapClass } from "helpers/className";

const appSelector = "#app";
const emit = new Emitter();

const { div, hr, h3 } = dom;

const toggleBtnClass = combineClasses(buttonStyle.base, buttonStyle.bgLight);

const ToggleBgButton = Button({
	className: toggleBtnClass,
	textContent: "Click me!",
	onclick: emit.dispatch(Events.ToggleBtnClick),
}) as HTMLButtonElement;

const App = div({}, [h3("Buttons"), hr(), Button("hello"), ToggleBgButton]);

emit.on(Events.ToggleBtnClick)((e) =>
	hasClass(buttonStyle.bgLight, e.target)
		? swapClass(buttonStyle.bgLight, buttonStyle.bgDark, e.target)
		: swapClass(buttonStyle.bgDark, buttonStyle.bgLight, e.target)
);

mount(App, appSelector);
