import "./login.css";

import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
import { auth, signIn, signOut } from "@/auth";
import { redirect } from 'next/navigation';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
        redirect("/dashboard");
      }}
    >
      <p>You are not logged in</p>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

export default async function LoginPage() {
  let session = await auth();
  let user = session?.user?.email;

  return (
    <main className="main">
      <div className="main_div_flex space-y-2.5">
        <div className="acme_div_flex">
          <div className="logo_div">
            <AcmeLogo />
          </div>
        </div>
        {/* <LoginForm /> */}
        <div className=" text-white flex items-center mx-auto content-center">
          {user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}
        </div>
      </div>
    </main>
  );
}