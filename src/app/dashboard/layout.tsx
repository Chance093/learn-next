import Navbar from '../_components/Navbar'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      {children}
    </main>
  )
}
