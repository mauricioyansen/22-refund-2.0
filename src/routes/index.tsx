import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
// import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isloading = false;

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isloading) return <Loading />;
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
