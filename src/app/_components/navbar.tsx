import { type Session } from "next-auth";
import Logo from "./menu/logo";
import CatalogLink from "./menu/catalogLink";
import ProductSearch from "./menu/productSearch";
import UserMenu from "./menu/userMenu";
import AddProductButton from "./menu/addProductButton";
import { auth } from "~/server/auth";

export default async function Navbar({ session }: { session: Session }) {
  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN" || role === "WORKER";
  
  return (
    <div className="navbar bg-gradient-to-r from-purple-300 to-indigo-400 px-4 shadow-md">
      <div className="flex-1 flex items-center gap-4">
        <Logo />
        <CatalogLink />
        <ProductSearch />
      </div>
      <div className="flex-none gap-4 flex items-center">
      {isAuthorized && (
        <AddProductButton />)}
        <UserMenu session={session} />
      </div>
    </div>
  );
}
