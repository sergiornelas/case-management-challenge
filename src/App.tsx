import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./shared/layouts/MainLayout/MainLayout";
import { CaseListPage } from "./features/cases/pages/list/CaseListPage";
import { CaseDetailPage } from "./features/cases/pages/detail/CaseDetailPage";

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
