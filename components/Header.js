
import Link from 'next/link';
const Header = () => {
   return (
      <div>
      <h1>fq</h1>
         <Link prefetch href="/">
            <a>Home</a>
         </Link>
         {' '}
         <Link prefetch href="/about">
            <a>About Page</a>
         </Link>
      </div>
   );
};

export default Header;
