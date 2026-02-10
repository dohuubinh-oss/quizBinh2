'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import SocialButton from '@/components/ui/SocialButton';

type Variant = 'LOGIN' | 'REGISTER';
type AuthenticationFormProps = React.HTMLAttributes<HTMLDivElement>;

export function AuthenticationForm({
  className,
  ...props
}: AuthenticationFormProps) {
  const router = useRouter();
  const [variant, setVariant] = React.useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleVariant = React.useCallback(() => {
    setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
    setError(null); // Clear error on variant change
  }, []);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = variant === 'LOGIN' ? '/api/auth/login' : '/api/auth/register';
    const url = `${apiUrl}${endpoint}`;

    const body = variant === 'LOGIN' 
      ? JSON.stringify({ email, password }) 
      : JSON.stringify({ name, email, password });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      // On successful login or register, redirect to the home page
      router.push('/');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`Attempting to log in with ${provider}`);
    // Here you would typically trigger the OAuth flow
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {/* Social Login Buttons */}
      <div className="grid gap-4">
        <SocialButton provider="google" onClick={() => handleSocialLogin('google')} />
        <SocialButton provider="facebook" onClick={() => handleSocialLogin('facebook')} />
      </div>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit}>
        <div className="grid gap-3">
          {variant === 'REGISTER' && (
            <div className="grid gap-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" value={name} onChange={onChange} placeholder="John Doe" type="text" disabled={isLoading} />
            </div>
          )}
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" value={email} onChange={onChange} placeholder="name@example.com" type="email" disabled={isLoading} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" value={password} onChange={onChange} placeholder="••••••••" type="password" disabled={isLoading} />
          </div>

          {error && (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          )}

          <Button disabled={isLoading} className="mt-2">
            {isLoading && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 animate-spin">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            {variant === 'LOGIN' ? 'Sign In' : 'Create Account'}
          </Button>
        </div>
      </form>

      {/* Toggle Variant */}
      <div className="text-center text-sm text-gray-500">
        {variant === 'LOGIN' ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={toggleVariant} className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline focus:outline-none" type="button">
          {variant === 'LOGIN' ? 'Start a 14 day free trial' : 'Sign In'}
        </button>
      </div>
    </div>
  );
}
