'use client'
import NavBar from '../components/NavBar';

export default function dashboard({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <p>Meddl du Kaschper</p>
      {children}
    </>
  )
}