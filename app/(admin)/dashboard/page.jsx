
export const metadata = {
  title:
    "Belanita Dashboard | Belanita - Championing Women’s Rights",
  description: "This is Belanita Dashboard",
};

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        {/*<EcommerceMetrics />*/}

        {/*<MonthlySalesChart />*/}
      </div>

      {/*<div className="col-span-12 xl:col-span-5">*/}
      {/*  <MonthlyTarget />*/}
      {/*</div>*/}

      <div className="col-span-12">
        {/*<StatisticsChart />*/}
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/*<DemographicCard />*/}
      </div>

      <div className="col-span-12 xl:col-span-7">
        {/*<RecentOrders />*/}
      </div>
    </div>
  );
}
