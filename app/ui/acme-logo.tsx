// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { ZurfsIcon } from '@heroicons/react/23/outline';

import {
  GlobeAltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

import { lusitana } from '@/app/ui/fonts';

import './acme-logo.css'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} logo_div`}>
      <CpuChipIcon className="globealticon" />
      <p className="logo_text">Zurfs Forecasts</p>
    </div>
  );
}

