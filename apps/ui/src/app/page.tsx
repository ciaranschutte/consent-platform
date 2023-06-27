import { User } from 'common';

export default function Home() {
  const user: User = {
    id: '1',
    name: 'Homer Simpson',
    email: 'homersimpson@example.com',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <h1>OHCRN Patient Enrolment Portal</h1>
          <p>Sample text for the landing page.</p>
        </div>
      </div>
    </main>
  );
}
