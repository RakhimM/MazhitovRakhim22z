// import React from 'react';
// import { db } from '~/server/db';
// import { deleteUser, updateUser } from '~/app/api/action/user';
// import { auth } from '~/server/auth';

// export default async function Page({ params }: { params: { id: string } }) {
//   const user = await db.user.findUnique({
//     where: { id: params.id },
//   });

//   if (!user) {
//     return <div>User not found</div>;
//   }
//   // const session = await auth();
//  let NameHTML = ""
//   const role = (await auth())?.user.role;
//   const isAuthorized = role === "ADMIN"
//   // if (session) {
//   //   const { user } = session;
//   //   if (!user.name ) {
//   //     NameHTML = "Заверешение регистрации"
//   // if(!user.name) NameHTML = "Заверешение регистрации"
//   // else NameHTML = "Редактирование профиля"
//   //   }
//   //   else NameHTML = "Редактирование профиля"
//   // }

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h1 className="text-xl font-bold mb-4">{NameHTML}</h1>
//         <form action={updateUser} className="form-control">
//           <div className="flex flex-col space-y-4">
//             <input type="hidden" name="id" defaultValue={user.id} />
//             <label>Электронная почта</label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="input input-bordered"
//             defaultValue={user.email ?? ""}
//           />
//           <label>Имя</label>
//           <input
//             type="text"
//             name="name"
//             required
//             className="input input-bordered"
//             defaultValue={user.name ?? ""}
//           />
//           <label>Фамилия</label>
//           <input
//             type="text"
//             name="surname"
//             required
//             className="input input-bordered"
//             defaultValue={user.surname ?? ""}
//           />
//           <label>Ссылка на фото</label>
// <input
//   type="url"
//   name="image"
//   className="input input-bordered"
//   defaultValue={user.image ?? ""}
// />
//           {isAuthorized && (
//         <><label>Роль</label><select
//                 name="role"
//                 required
//                 className="select select-bordered"
//                 defaultValue={user.role ?? "USER"}
//               >
//                 <option value="USER">USER</option>
//                 <option value="ADMIN">ADMIN</option>
//                 <option value="WORKER">WORKER</option>
//               </select></>
          
//         )}
         
//           <button type="submit" className="btn btn-primary">
//             Обновить
//           </button>
//         </div>
//       </form>
//       {isAuthorized && (
//         <form action={deleteUser} className="form-control">
//         <div className="flex max-w-xs flex-col space-y-2">
//           <input type="hidden" name="id" defaultValue={user.id ?? ""} />
//           <button type="submit" className="btn btn-primary">
//             Удалить
//           </button>
//         </div>
//       </form>
          
//         )}
//       {/* <form action={deleteUser} className="form-control">
//         <div className="flex max-w-xs flex-col space-y-2">
//           <input type="hidden" name="id" defaultValue={user.id ?? ""} />
//           <button type="submit" className="btn btn-primary">
//             Удалить
//           </button>
//         </div>
//       </form> */}
//       </div>
//     </main>
//   );
// }
import React from "react";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import AdminUserForm from "~/app/_components/profile/updateAdminProfile";
import UserForm from "~/app/_components/profile/updateUserprofile";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN";

  const hasName = user.name && user.surname;
  const title = hasName ? "Редактирование профиля" : "Завершите регистрацию";
  return isAuthorized ? (
    <AdminUserForm user={user} title={title} />
  ) : (
    <UserForm user={user} title={title}  />
  );
}
