import { Metadata } from 'next';

import { MetricsSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Metrics',
};

export default function Page() {
    return (
    <div>
        <h1 className='text-2xl text-white'>Metrics</h1>
        <MetricsSkeleton/>
    </div>
    ) 
}