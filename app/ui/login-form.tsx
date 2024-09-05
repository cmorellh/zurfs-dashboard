'use client';

// UI
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { CommandLineIcon } from '@heroicons/react/20/solid';

import { Button } from './button';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import "./login-form.css"

// Authentication
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="form_main_div">
        <h1 className={`${lusitana.className} form_h1`}>
          Please log in to continue
        </h1>
        <CommandLineIcon className="commandline_symbol" />
        <div className="input_divs">
          <div>
            <label className="email_label" htmlFor="email">
              Email
            </label>
            <div className="input_divs">
              <input
                className="peer email_input"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="atsymbolicon" />
            </div>
          </div>
          <div className="password_div">
            <label className="password_label" htmlFor="password">
              Password
            </label>
            <div className="input_divs">
              <input
                className="peer password_input"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="keyicon" />
            </div>
          </div>
        </div>
        <Button className="button" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="login_arrow" />
        </Button>
        <div className="error_msg_div space-x-1" aria-live="polite" aria-atomic="true">
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="exclamation_icon" />
                <p className="exclamation_p">{errorMessage}</p>
              </>
            )}
        </div>
      </div>
    </form>
  );
}
