import { navItems } from "@/data/navItems";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    if (isHomePage) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }

  };

  return (
    <header className="z-50 fixed top-0 left-0 right-0 ">
      <nav className="flex justify-center pt-6">
        <ul className="flex justify-center gap-6 border border-solid border-[#eaeaea] p-5 rounded-2xl w-fit bg-[#121212]/60 backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.name === "Projects" ? (
                <Link to={item.path} className="transition-colors hover:text-[#b3b3b3]">
                  {item.name}
                </Link>
              ) : (
                <a 
                  href={`#${item.sectionId}`} 
                  onClick={(e) => handleNavigation(e, item.sectionId)}
                  className="transition-colors hover:text-[#b3b3b3]"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
          
          {/* <li className="absolute left-10">
            <Link to="/" className="text-xl font-bold">Home</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
