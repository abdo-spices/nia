import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';

function App() {

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === 'PAGE_VISIT') {
        toast(`Visited: ${message.url}`);
      }
    });
  }, []);

  return (
    <div>
      <Toaster position="top-center" />
      <h1 className="text-lg font-bold">Navigation Notifier</h1>
    </div>
  );
  
}

export default App;