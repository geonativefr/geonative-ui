/// <reference types="vite/client" />
interface ImportMeta {
  glob: (glob: string) => Record<string, () => Promise<any>>;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}
