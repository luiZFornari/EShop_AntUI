import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPublico from "./componentes/MenuPublico";
import MenuPrivado from "./componentes/MenuPrivado";
import Home from "./componentes/telas/home/Home";
import Sobre from "./componentes/telas/Sobre";
import NotFound from "./componentes/NotFound";
import Login from "./componentes/telas/login/Login";
import Produto from "./componentes/telas/produto/Produto";
import Categoria from "./componentes/telas/categoria/Categoria";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "produtos",
        element: <Produto />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
