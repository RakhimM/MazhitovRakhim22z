
// "use client";

import AdminReturnsList from "../_components/returns/returnAdminList";
import ReturnsList from "../_components/returns/returnList";
import { pacifico } from "~/lib/font";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export default async function ReturnsPage() {
  // const { data: session } = useSession();
  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN" || role === "WORKER";
  const placeholderImage = await db.placeholderImage.findFirst({
    where: { name: "Пустой список возвратов" },
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
        Мои возвраты
      </h1>
      {isAuthorized ? (
        <AdminReturnsList />
      ) : (
        <ReturnsList  placeholderImage = {placeholderImage}/>
      )}
    </div>
  );
}
