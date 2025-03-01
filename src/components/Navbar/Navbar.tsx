
export const Navbar = () => {
  return (
    <header className="z-50 position-fixed">
      <nav className="flex justify-center">
        <ul className="flex justify-center gap-6 border border-solid border-[#eaeaea] p-5 rounded-2xl w-fit">
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
              About
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
