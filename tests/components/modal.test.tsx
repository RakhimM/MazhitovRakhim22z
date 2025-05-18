import { expect, describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Modal from '~/app/_components/cart/modal';

describe('Modal Component', () => {
  it('calls onClose when "Закрыть" button is clicked', () => {
    const onClose = vi.fn();
    const message = 'Привет, это тест!';

    render(<Modal message={message} onClose={() => {
      console.log('onClose called');
      onClose();
    }} />);

    const closeButtons = screen.getAllByRole('button', { name: /закрыть/i });
    console.log('Number of close buttons:', closeButtons.length);

    // Кликаем по всем кнопкам, чтобы проверить что происходит
    closeButtons.forEach((button, i) => {
      console.log(`Clicking button #${i}`);
      fireEvent.click(button);
    });

    expect(onClose).toHaveBeenCalled();
  });
});
