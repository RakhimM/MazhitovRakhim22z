
import Link from "next/link";
import UserTable from "./userTable";
import { auth } from "~/server/auth";
import Pagination from "~/app/ui/pagination";

export default async function UserProfile({ user, users, totalPages}: any) {
  const role = (await auth())?.user.role;
  return (
    <div className="card w-full h-full rounded-none bg-base-100 shadow-xl p-8">
      <div className="card-body">
        <div className="flex items-center space-x-4 mb-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.image ?? "/default-avatar.png"} alt="Аватар" />
            </div>
          </div>
          <div>
            <h2 className="card-title text-2xl">
              {user.name ?? "Фамилия и имя"} {user.surname ?? ""}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="stat">
            <div className="stat-title">Куплено товаров</div>
            <div className="stat-value">{user.purchasedItems}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Сумма трат</div>
            <div className="stat-value">{user.totalSpent.toString()} ₽</div>
          </div>
          <div className="stat">
            <div className="stat-title">Дата регистрации</div>
            <div className="stat-value text-sm">
              {new Date(user.createdAt).toLocaleDateString("ru-RU")}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href={`/profile/${user.id}`}>
            <button className="btn btn-outline btn-wide">Редактировать профиль</button>
          </Link>
        </div>

        {role === "ADMIN" && (
          <div className="mt-8">
            <UserTable users={users} />
            {totalPages >1 &&<Pagination totalPages={totalPages} /> }
      
          </div>
          
        )}
      </div>
    </div>
  );
}
