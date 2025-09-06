"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes"; // If you use next-themes for dark mode

interface ContributionDay {
  date: string;
  contributionCount: number;
}

export default function Projects() {
  const [days, setDays] = React.useState<ContributionDay[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/api/github-stats/creepolite")
      .then((res) => res.json())
      .then((data) => {
        const weeks = data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        const allDays: ContributionDay[] = weeks.flatMap((week: any) => week.contributionDays);
        setDays(allDays);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch stats");
        setLoading(false);
      });
  }, []);

  // Filter data by time range
  const filteredData = React.useMemo(() => {
    if (!days.length) return [];
    const referenceDate = new Date(days[days.length - 1]?.date);
    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    else if (timeRange === "7d") daysToSubtract = 7;
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return days.filter((item) => new Date(item.date) >= startDate);
  }, [days, timeRange]);

  const total = filteredData.reduce((sum, d) => sum + d.contributionCount, 0);

  // If you use next-themes or similar, get the current theme
  const { theme } = useTheme ? useTheme() : { theme: "dark" };

  // Chart config for ChartContainer
  const chartConfig = {
    contributions: {
      label: "Contributions",
      color: "#fff", // White color for the line
    },
  };

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto pt-0 px-6 md:px-0 py-10 max-[900px]:px-3 max-[600px]:px-1 max-[430px]:px-1"
    >
      <h1 className="text-9xl font-semibold mt-4 mb-2 bg-gradient-to-r from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent max-[900px]:text-6xl max-[600px]:text-4xl max-[430px]:text-2xl max-[430px]:mb-4">
        Work
      </h1>
      <p className="text-white/70 mb-9 max-w-2xl max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs max-[430px]:mb-5">
        From beautiful marketing websites to fun, intuitive mobile apps, all the way to powerful, data-driven SaaS dashboards that your clients will love to use.
      </p>
      <div className="flex justify-between items-center mb-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:mb-6 max-[430px]:flex-col max-[430px]:items-start max-[430px]:mb-4">
        <div></div>
        <a
          href="https://github.com/creepolite"
          className="text-lg font-medium border-b-2 border-[#dba146] hover:border-black transition max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs"
        >
          See all projects
        </a>
      </div>

      {/* GitHub Stats Area Chart */}
      <Card className="pt-0 my-8 bg-[#18181b] text-white"> {/* Dark background and white text */}
        <CardHeader className="flex items-center gap-2 space-y-0 border-b border-zinc-700 py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>GitHub Contributions Area Chart</CardTitle>
            <CardDescription>
              Showing contributions for the selected time range
            </CardDescription>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="fillContributions" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#fff"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="#fff"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#333" /> {/* Dark grid lines */}
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tick={{ fill: "#fff" }} // White axis labels
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                      className="bg-zinc-900 text-white border-zinc-700"
                    />
                  }
                />
                <Area
                  dataKey="contributionCount"
                  type="natural"
                  fill="url(#fillContributions)"
                  stroke="#fff" // White line
                  stackId="a"
                  name="Contributions"
                />
                <ChartLegend content={(props) => <ChartLegendContent {...props} />} />
              </AreaChart>
            </ChartContainer>
          )}
          {!loading && !error && (
            <p className="mt-4 text-center">
              Total contributions in range: <b>{total}</b>
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}