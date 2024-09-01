import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

import "./login.css";

export default function LoginPage() {
  return (
    <main className="main">
      <div className="main_div_flex space-y-2.5">
        <div className="acme_div_flex">
          <div className="logo_div">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}