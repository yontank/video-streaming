import React, { useState, useCallback } from 'react';

function ShareScreen() {
  const [screenSharePopupVisible, setScreenSharePopupVisible] = useState(false);
  const [screenSources, setScreenSources] = useState<DesktopCapturerSource[]>(
    [],
  );

  const turnScreenSharingOn = useCallback(async () => {
    const sources = await window.electron.ipcRenderer.getDesktopSources();
    setScreenSources(sources);
    setScreenSharePopupVisible(true);
  }, []);

  return <div className="w-11/12 bg-black h-5/6 rounded-2xl" />;
}

export default ShareScreen;