// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { desktopCapturer } from 'electron/main';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    getDesktopSources: async () => {
      await desktopCapturer
        .getSources({ types: ['window', 'screen'] })
        .then((sources) =>
          sources.map((source) => ({
            id: source.id,
            name: source.name,
            appIconUrl: source?.appIcon?.toDataURL(),
            thumbnailUrl: source?.thumbnail
              ?.resize({ width: 150, height: 150 })
              .toDataURL(),
          })),
        );
    },
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
