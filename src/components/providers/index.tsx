'use client';

import { Toaster } from 'react-hot-toast';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
