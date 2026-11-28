"use client";

import { createContext, useContext, type ReactNode } from "react";

const MediaVersionContext = createContext("0");

export function MediaVersionProvider({
  version,
  children,
}: {
  version: string;
  children: ReactNode;
}) {
  return <MediaVersionContext.Provider value={version}>{children}</MediaVersionContext.Provider>;
}

export function useMediaVersion(): string {
  return useContext(MediaVersionContext);
}
