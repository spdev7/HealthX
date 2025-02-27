import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-10">
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    </div>
  </header>
);