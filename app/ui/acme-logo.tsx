import {
  CpuChipIcon
} from '@heroicons/react/24/outline';

import { lusitana } from '@/app/ui/fonts';

import './acme-logo.css'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} logo_div`}>
      <CpuChipIcon className="globealticon h" />
      <p className="logo_text">Zurfs Forecasts by CMH</p>
    </div>
  );
}

