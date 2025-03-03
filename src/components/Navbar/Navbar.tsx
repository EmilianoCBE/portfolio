
export const Navbar = () => {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 ">
      <nav className="flex justify-center pt-6">
        <ul className="flex justify-center gap-6 border border-solid border-[#eaeaea] p-5 rounded-2xl w-fit bg-[#121212]/60 backdrop-blur-md">
          <li>
            <a href="">
              Home
            </a>
          </li>
          <li>
            <a href="">
              Projects
            </a>
          </li>
          <li>
            <a href="">
              Experience
            </a>
          </li>
          <li>
            <a href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
