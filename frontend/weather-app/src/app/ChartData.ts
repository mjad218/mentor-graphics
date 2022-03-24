export interface ChartData {
  value: any;
  data: any;
}

export const parseChartData = (data: any, term: string, value: string) => {
  const chartData: ChartData = {
    value: data[value],
    data: data[term],
  };

  return chartData;
};
