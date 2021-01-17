import fetcher from "@/utils/fetcher";
import {
  compareDesc,
  formatISO,
  getDate,
  getHours,
  getSeconds,
  parseISO,
} from "date-fns";
import useSWR from "swr";
import { ResponsiveLine } from "@nivo/line";
import { Box } from "@chakra-ui/react";

const testTheme = {
  background: "#333333",
  textColor: "#f2f2f2",
  fontSize: 12,
  axis: {
    domain: {
      line: {
        stroke: "#f2f2f2",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#f2f2f2",
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: "#f2f2f2",
      strokeWidth: 1,
    },
  },
};

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    theme={testTheme}
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day",
      min: "2021-01-01",
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      min: "0",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    colors={{ datum: "color" }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      format: "%b %d",
      tickValues: "every 2 days",
      legend: "time scale",
      legendOffset: -12,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    lineWidth={7}
    pointSize={13}
    pointColor={{ theme: "background" }}
    pointBorderWidth={5}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableGridX={false}
    enableGridY={false}
    enableArea={true}
    areaBaselineValue={0}
    areaOpacity={0}
    useMesh={true}
    tooltip={({ point }) => {
      console.log(point);
      return (
        <div
          style={{
            background: "white",
            padding: "9px 12px",
            border: "1px solid #ccc",
            color: "black",
          }}
        >
          <div>x: {point.data.xFormatted}</div>
          <div>y: {point.data.yFormatted}</div>
        </div>
      );
    }}
  />
);

export default function Graph({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  let logs = data?.logs;
  let dataWOO = [];
  for (let i = logs?.length - 1; i > -1; i--) {
    logs[i].createdAt = formatISO(parseISO(logs[i].createdAt), {
      representation: "date",
    });
    //= getHours(parseISO(logs[i].createdAt));
    logs[i].height = parseInt(logs[i].height);
    dataWOO.push({ x: logs[i].createdAt, y: logs[i].height });
  }
  console.log(dataWOO);

  dataWOO.sort(function (a, b) {
    return a.y - b.y;
  });

  console.log(dataWOO);

  let testData2 = {
    id: plant.name,
    color: "hsl(100, 40%, 50%)",
    data: dataWOO,
  };

  let testData3 = [testData2];

  if (logs?.length) {
    return (
      <Box width="100%" height="100%" bg="main.900" color="back.900">
        <MyResponsiveLine data={testData3} />
      </Box>
    );
  }
  return "loading";
}
