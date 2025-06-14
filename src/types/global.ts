export interface Route {
  path: string;
  label: string;
  metadata?: {
    title?: string;
    description?: string;
  };
}
