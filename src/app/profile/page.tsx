
import React from "react";
import { db } from "~/server/db";
import UserProfile from "../_components/profile/userProfile";
import { AddUser } from "../_components/profile/addUser";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function Page({ searchParams }: {
  searchParams?: {
    size?: string;
    page?: string;
    userId?: string;
  }}) {
  const session = await auth();
  const page = Number(searchParams?.page ?? "1");
  const size = Number(searchParams?.size ?? "10");

  const count = await db.user.count();

  const users = await db.user.findMany({
    skip: (page - 1) * size,
    take: size,
  });

  const pages = Math.ceil(count / size);
  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });


  if (!user) {
    return <div>Пользователь не найден</div>;
  }
  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN" || role === "WORKER";

  return (
    <div>
      {role === "ADMIN" && <AddUser />}
        <UserProfile user={user} users={isAuthorized ? users : []} totalPages={pages} />
    </div>
  );
}

