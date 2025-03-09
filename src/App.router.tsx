import { ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./providers";
import { Home } from "./pages";

interface Props {
  children?: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  )
};