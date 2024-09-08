import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';

import { 
  RevenueChartSkeleton, 
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

import "./overview.css"

export default async function Page() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();

return (
    <main>
      <h1 className={`${lusitana.className} h1_dashboard`}>
        Dashboard
      </h1>
      {/* <div className="card_wrapper_div">
        <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
        </Suspense>
      </div>
      <div className="suspense_invoices_div">
        <Suspense fallback={<RevenueChartSkeleton />} >
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />} >
          <LatestInvoices />
        </Suspense>
      </div> */}
    </main>
  );
}