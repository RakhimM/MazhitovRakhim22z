import Link from "next/link";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function UserMenu({ session }: { session: any }) {
  if (!session?.user) {
    return (
      <Link href="/api/auth/signin" className="btn">
        Войти
      </Link>
    );
  }
  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });
  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN" ;
  const isAuthorized3 = role === "USER"
  const isAuthorized2 = role === "WORKER" 
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

           <img
            src={user?.image ?? "/placeholder-avatar.png"}
            alt="user avatar"
            width={40}
            height={40}
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
        </li>
        <li><Link href="/profile">Профиль</Link></li>
    
     <li><Link href="/cart">Корзина</Link></li>
           <li><Link href="/history">История заказов</Link></li>

       
          
    
        <li><Link href="/returns">Возвраты</Link></li>

        <li><Link href="/productDelivery">Выдача товара</Link></li>
    
          <>       
          <li><Link href="/static">Статистика</Link></li>
          <li><Link href="/issuePage">Информация о выдачах </Link></li>
          </>

        <li><Link href="/ticket">Тех. поддержка </Link></li>
        <li><Link href="/api/auth/signout">Выйти</Link></li>
      </ul>
    </div>
  );
}
