import { ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./providers";
import { Home, ProjectsPage } from "./pages";

interface Props {
  children?: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  )
};