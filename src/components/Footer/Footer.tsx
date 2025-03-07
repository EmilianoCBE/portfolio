
export const Footer = () => {
  return (
    <footer className="section-container flex items-center justify-between h-20">
      <div>
        <p className="text-center text-sm text-gray-400">
          Copyright &copy; 2025 Emiliano
        </p>
      </div>
      <div>
        <ul>
          <li className="inline-block mx-2">
            <a href="https://www.linkedin.com/in/emiliano-carrizales/" target="_blank" className="text-gray-400 hover:text-gray-600">
              LinkedIn
            </a>
          </li>
          <li className="inline-block mx-2">
            <a href="https://github.com/EmilianoCBE" target="_blank" className="text-gray-400 hover:text-gray-600">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
