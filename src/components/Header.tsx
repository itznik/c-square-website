"use client";

import { useState } from 'react';
import Link from 'next/link';
import GlassPane from '@/components/ui/GlassPane'; // Import the new component

export default function Header() {
  // ... (state and navLinks remain the same) ...

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-4">
        <GlassPane className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* ... content remains the same ... */}
        </GlassPane>
      </header>
      {/* ... Mobile Menu remains the same ... */}
    </>
  );
}
