import { CaseDetailPage } from "@cases/pages/detail/CaseDetailPage";
import { CaseListPage } from "@cases/pages/list/CaseListPage";
import { MainLayout } from "@shared/layouts/MainLayout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <CaseListPage />,
      },
      {
        path: "/cases/:id",
        element: <CaseDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
