import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<h1>Home page</h1>}
    />
    <Route
      path="/login"
      element={<h1>Login</h1>}
    />
    <Route
      path="/registro"
      element={<h1>Registro</h1>}
    />
    <Route
      path="/buscador"
      element={<h1>Buscador</h1>}
    />
    <Route
      path="/musicas"
      element={<h1>Musicas</h1>}
    />
  </Routes>
</BrowserRouter>;
