import React from "react";

export default function Modal({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center text-purple-600">{message}</h2>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
