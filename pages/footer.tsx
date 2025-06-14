import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 py-12 text-center z-50">
      <h2 className="text-2xl font-bold mb-2">Let's work together</h2>
      <p className="text-sm text-gray-400 mb-4">
        I'm open to freelance projects, collaborations, and full-time roles. Let's create something great.
      </p>
      <a
        href="mailto:hardikjain@email.com"
        className="inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-200 transition"
      >
        Say Hello → hardikjain@email.com
      </a>
    </footer>
  );
}
