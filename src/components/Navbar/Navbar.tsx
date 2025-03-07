
export const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="z-50 fixed top-0 left-0 right-0 ">
      <nav className="flex justify-center pt-6">
        <ul className="flex justify-center gap-6 border border-solid border-[#eaeaea] p-5 rounded-2xl w-fit bg-[#121212]/60 backdrop-blur-md">
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
              Experience
            </a>
          </li>
          {/* <li>
            <a href="#about" onClick={(e) => handleScroll(e, "technologies")}>
              Technologies
            </a>
          </li> */}
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
