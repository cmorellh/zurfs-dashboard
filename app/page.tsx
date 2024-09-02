import Link from 'next/link';
import Image from 'next/image';

// Styling Components
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Style sheets
import styles from '@/app/ui/home.module.css'
import "./page.css";

export default function Page() {
  return (
    <main className="main">
      <div className="acmelogo_div">
        <AcmeLogo />
      </div>
      <div className="hero_main_div">

        {/* Left Hero Div (Welcome...) */}
        <div className="left_hero_div">
          <div className={styles.shape} /> 
          <p className={`left_paragraph`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="a_href_text">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link href="/login" className="login_button">
            <span>Log in</span> <ArrowRightIcon className="span_arrow_icon" />
          </Link>
        </div>

        {/* Right Hero Div (Images) */}
        <div className="right_hero_div">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hero_desktop"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="hero_mobile"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
