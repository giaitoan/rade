import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-800 font-sans selection:bg-primary-200">
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};