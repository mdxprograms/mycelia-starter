export const hasClass = (cls: string, element: HTMLElement): boolean =>
	[...element.classList].includes(cls);

export const swapClass = (
	cls1: string,
	cls2: string,
	element: HTMLElement
): void => {
	element.classList.remove(cls1);
	element.classList.add(cls2);
};

export const combineClasses = (first: string, ...rest: string[]) => {
	if (!first || first.length === 0)
		throw Error("Must supply at least one className as an argument");

	return `${first} ${rest.map((c) => c).join("")}`
};
