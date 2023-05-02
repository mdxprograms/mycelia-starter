import { dom, Props } from "@wallerbuilt/mycelia";

const Button = (props: Props = {}) => {
	const self = dom.button(props);

	return self;
};

export default Button;
