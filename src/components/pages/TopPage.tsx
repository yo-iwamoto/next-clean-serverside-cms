import { buttonVariants } from '../ui/button';
import Link from 'next/link';

export function TopPage() {
  return (
    <main>
      <Link className={buttonVariants({ variant: 'default' })} href='/new'>
        Craete Post
      </Link>
    </main>
  );
}
