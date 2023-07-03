import Link from "next/link";
import path from "path";

export default function Header() {

  return (

    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <span className="ml-3 text-3xl text-blue-600">ShinNews</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900 text-1xl">Top</Link>
          <Link href="/Business" className="mr-5 hover:text-gray-900 text-1xl">Business</Link>
          <Link href="/Technology" className="mr-5 hover:text-gray-900 text-1xl">Technology</Link>
          <Link href="/Science" className="mr-5 hover:text-gray-900 text-1xl">Science</Link>
          <Link href="/Entertainment" className="mr-5 hover:text-gray-900 text-1xl">Entertainment</Link>
          <Link href="/Sports" className="mr-5 hover:text-gray-900 text-1xl">Sports</Link>
          <Link href="/Health" className="mr-5 hover:text-gray-900 text-1xl">Health </Link>
        </nav>
      </div>
    </header>



  )




}