import { useState } from 'react';
import { toast } from 'react-toastify';

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      toast.warn('Copying error');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success('Copied to clipboard!');
      return true;
    } catch (error) {
      setCopiedText(null);
      toast.error('Copying error');
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;
