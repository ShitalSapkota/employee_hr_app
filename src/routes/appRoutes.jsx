import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form/Form";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error_Page/ErrorPage";
import ViewPage from "../pages/View_SinglePage/ViewPage";
import EmployeesListPage from "../pages/EmployeeName_List/EmployeesListsPage";

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
