import { createRoot } from "react-dom/client";
import { lazy, StrictMode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/lib/styles";
import { GAME_THEME } from "@/lib/theme";
import "@/index.css";

const PortfolioPage = lazy(() =>
  import("@/pages/Portfolio").then(({ PortfolioPage }) => ({
    default: PortfolioPage,
  })),
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={GAME_THEME}>
      <GlobalStyle />
      <BrowserRouter basename="/valley-riding">
        <Suspense fallback={null}>
          <Routes>
            <Route path="*" element={<PortfolioPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
