export type Renderer = { render: (url: string) => Promise<{ head?: string; html?: string }> };
