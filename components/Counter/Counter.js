import { CounterS } from "./styled";

function Counter(props) {
	const { children } = props;

	const UI = <CounterS>{children || "0"}</CounterS>;

	return UI;
}

export default Counter;

Counter.defaultProps = { counterValue: 0 };
