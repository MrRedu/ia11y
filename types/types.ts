export type Role = 'user' | 'assistant' | 'system';

export interface ApiResponse {
  errors: Array<{ code_wcag: string; description: string }>;
  suggestions: Array<{ description: string; priority: string }>;
  fixed_code: string;
  code_extension: 'html' | 'jsx' | 'tsx';
}

export interface Message {
  role: Role;
  content: string | ApiResponse;
}
