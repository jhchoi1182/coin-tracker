import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";
import { ChartProps, IHistorical } from "../Interface/Interface";

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  const isDark = useRecoilValue(isDarkAtom);
  console.log(data);

  return (
    <div>
      {isLoading ? (
        "차트 로딩 중..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "가격",
              data:
                data?.map((data) => {
                  return {
                    x: data.time_close,
                    y: [data.open, data.high, data.low, data.close],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            title: {
              text: "코인 차트",
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
