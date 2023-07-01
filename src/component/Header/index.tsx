import path from "path";

export default function Header(){

    return(
        
        <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      <span className="ml-3 text-3xl text-blue-600">ShinNews</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a  href="/" className="mr-5 hover:text-gray-900 text-1xl">Top</a>
      <a href="/Business" className="mr-5 hover:text-gray-900 text-1xl">Business</a>
      <a href="/Technology" className="mr-5 hover:text-gray-900 text-1xl">Technology</a>
      <a href="/Sports" className="mr-5 hover:text-gray-900 text-1xl">Sports</a>
    </nav>
  </div>
</header>



    )




}