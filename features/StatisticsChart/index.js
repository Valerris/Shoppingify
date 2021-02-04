import { StatisticsChartContainerS } from "./styled";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";
import { theme } from "constants/index";
import SectionH from "components/SectionH/SectionH";

const { colors } = theme;

const data = [
	{ month: "January", x: 35 },
	{ month: "February", x: 125 },
	{ month: "March", x: 35 },
	{ month: "April", x: 10 },
	{ month: "May", x: 32 },
	{ month: "June", x: 9 },
	{ month: "July", x: 42 },
];

export default function StatisticsChart(props) {
	// < UI >
	const UI = (
		<StatisticsChartContainerS>
			<SectionH>Monthly Summary</SectionH>

			<ResponsiveContainer width="100%" height={302}>
				<LineChart
					data={data}
					margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
				>
					<Line
						type="monotone"
						name="items"
						dataKey="x"
						stroke={colors.orange0}
					/>
					<XAxis dataKey="month" strokeDasharray="3 3" />
					<YAxis strokeDasharray="3 3" />
					<Legend verticalAlign="bottom" />
					<Tooltip />
					<CartesianGrid strokeDasharray="3 3" />
				</LineChart>
			</ResponsiveContainer>
		</StatisticsChartContainerS>
	);

	return UI;
}
