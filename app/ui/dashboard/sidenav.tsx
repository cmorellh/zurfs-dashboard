import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

import "./sidenav.css"

export default function SideNav() {
  return (
    <div className="sidemain_div">
      <Link className="sidelink" href="/">
        <div className="logo_div">
          <AcmeLogo />
        </div>
      </Link>
      <div className="navlinks_div space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="div_single_box"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="button_styles">
            <PowerIcon className="w-6" />
            <div className="div_signout">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
