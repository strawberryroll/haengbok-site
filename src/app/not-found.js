import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Return{' '}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  );
}
