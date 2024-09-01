import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import './acme-logo.css'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} logo_div`}>
      <GlobeAltIcon className="globealticon" />
      <p className="logo_text">Acme</p>
    </div>
  );
}
