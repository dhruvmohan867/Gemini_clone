import React, { useState } from "react";

const NamePromptModal = ({ setName, closeModal }) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = () => {
    if (inputName.trim() !== "") {
      setName(inputName);
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
        <p className="text-gray-600 mb-6">Please enter your name to continue:</p>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your name"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NamePromptModal;
