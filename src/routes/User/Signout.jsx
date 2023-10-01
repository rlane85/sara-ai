//router
import { useLoaderData, redirect } from "react-router-dom";

//fetcher
import { signout } from "../controllers/signout";

export async function loader({ request, params }) {
  const response = await signout();
  // console.log(response);
  if (response) return redirect("/");
  else return null;
}

export const Signout = () => {
  const loaderData = useLoaderData();
  return loaderData ? loaderData : null;
};
