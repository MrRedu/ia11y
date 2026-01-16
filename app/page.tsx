// app/old-page/page.tsx (or any other server component)
import { redirect } from 'next/navigation';
import type { Route } from 'next'; // Optional: Use Route type for safety

export default function OldPage() {
  // Perform logic here if needed (e.g., auth check)
  const destination = '/en' as Route; // Type assertion helps with Next.js type safety
  redirect(destination);

  // This part of the code won't run because redirect throws an error
  return null;
}
