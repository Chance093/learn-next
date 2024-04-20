import Link from 'next/link';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className='m-8'>
        <nav>
          <ul className=' flex gap-8 justify-center'>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link href='/dashboard/create-post'>Create Post</Link>
            </li>
            <li>
              <Link href='/dashboard/settings'>Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}
