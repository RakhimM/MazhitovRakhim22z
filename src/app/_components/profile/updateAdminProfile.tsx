import React from "react";
import { deleteUser, updateUser } from "~/app/api/action/user";
import BackButton from "../official/back";

export default function AdminUserForm({ user, title }: {
    user: {
      id: string;
      email: string | null;
      name: string | null;
      surname: string | null;
      image: string | null;
      role: string | null;
    };
    title: string;
  }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <div className="mb-8">
          <BackButton />
        </div>
        <h1 className="text-xl font-bold mb-4">{title}</h1>

        <form action={updateUser} className="form-control">
          
          <div className="flex flex-col space-y-4">
            <input type="hidden" name="id" defaultValue={user.id} />

            <label>Электронная почта</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered"
              defaultValue={user.email ?? ""}
            />

            <label>Имя</label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered"
              defaultValue={user.name ?? ""}
            />

            <label>Фамилия</label>
            <input
              type="text"
              name="surname"
              required
              className="input input-bordered"
              defaultValue={user.surname ?? ""}
            />

            <label>Ссылка на фото</label>
            <input
              type="url"
              name="image"
              required
              className="input input-bordered"
              defaultValue={user.image ?? ""}
            />

            <label>Роль</label>
            <select
              name="role"
              required
              className="select select-bordered"
              defaultValue={user.role ?? "USER"}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="WORKER">WORKER</option>
            </select>

            <button type="submit" className="btn btn-primary">
              Обновить
            </button>
          </div>
        </form>

        <form action={deleteUser} className="form-control mt-4">
          <div className="flex max-w-xs flex-col space-y-2">
            <input type="hidden" name="id" defaultValue={user.id ?? ""} />
            <button type="submit" className="btn btn-primary">
              Удалить
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
