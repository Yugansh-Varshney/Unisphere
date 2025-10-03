// src/components/features/NotesHub/Forum.tsx

import React from 'react';

export const Forum = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Community Forum</h2>
      {/* You can add a list of forum threads here */}
      <div className="border rounded-lg p-4">
        <h3 className="font-bold">How to prepare for mid-term exams?</h3>
        <p className="text-sm text-gray-600">Posted by Alex Green</p>
      </div>
    </div>
  );
};