import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";
import { ChartProps, IHistorical } from "../Interface/Interface";

const Price = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const isDark = useRecoilValue(isDarkAtom);
  
  const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return (
    <div>
      {isLoading ? (
        "차트 로딩 중..."
      ) : data.error ? (
        `${data.error}`
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "가격",
              data: data?.map((price: IHistorical) => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price: IHistorical) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
              colors: ["red"],
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Price;
