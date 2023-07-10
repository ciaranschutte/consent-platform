'use client';
import { ReactNode, useState } from 'react';

function LanguageToggle({
  children,
  selected,
}: {
  children: ReactNode;
  selected: string;
}) {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setShowList(!showList)}>{selected}</button>
      {showList && children}
    </div>
  );
}

export default LanguageToggle;
