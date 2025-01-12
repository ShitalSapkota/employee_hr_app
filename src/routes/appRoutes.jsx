import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import ViewPage from "../pages/ViewPage";
import EmployeesListPage from "../pages/EmployeesListsPage";

const createRoutes = (isLoggedIn, loginHandler) => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: isLoggedIn ? (
          <Root isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
        ) : (
          <Login loginHandler={loginHandler} />
        ),
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <List /> },
          { path: "/employee/:id", element: <ViewPage /> },
          { path: "/employees", element: <EmployeesListPage /> },
          { path: "/new", element: <Form /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};

export default createRoutes;
