import { useState } from 'react';

export function useClipboard() {
  const [isCopied, setIsCopies] = useState<boolean>(false);

  const handleCopy = async (data: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(data);
      setIsCopies(true);

      setTimeout(() => setIsCopies(false), 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles', err);
    }
  };

  return {
    isCopied,
    handleCopy,
  };
}
