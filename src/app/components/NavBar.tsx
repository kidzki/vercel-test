'use client';
import { signOut } from 'next-auth/react';

export default function NavBar({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <>
        <p> MEDDL </p>
        <button key='signOut' onClick={() => signOut()}> NAUSGESCHMASD ETZALA!</button>
      </>
    )
  }