// import { expect, describe, it, vi, beforeEach } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { UserInfo } from '~/app/_components/user/iserRole';

// describe('UserInfo Component', () => {
//   beforeEach(() => {
//   });

//   it('renders the user information correctly', () => {
//     const user = {
//       email: 'Ivan@ex.ru',
//       firstname: 'Иванов',
//       surname: 'Иван',
//       role: 'Admin'
//     };

//     const groupJSX = <p>Group: A</p>;

//     render(<UserInfo user={user} groupJSX={groupJSX} />);

//     expect(screen.getByText('Электронная почта: Ivan@ex.ru')).toBeDefined();
//     expect(screen.getByText('Имя: Иванов')).toBeDefined();
//     expect(screen.getByText('Фамилия: Иван')).toBeDefined();
//     expect(screen.getByText('Роль: Admin')).toBeDefined();

//     expect(screen.getByText('Group: A')).toBeDefined();
//   });

//   it('does not render groupJSX if not provided', () => {
//     const user = {
//       email: 'Ivan@ex.ru',
//       firstname: 'Иванов',
//       surname: 'Иван',
//       role: 'Admin'
//     };

//     render(<UserInfo user={user} groupJSX={null} />);

//     expect(screen.queryByText('Group:')).toBeNull();
//   });
// });
