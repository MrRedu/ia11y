import type { ApiError, ApiErrorResponse, ApiResponse } from '@/types/types';

type GetAnswerProps = {
  codeSnippet: string;
};

export const getAnswer = async ({ codeSnippet }: GetAnswerProps): Promise<ApiResponse | null> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ codeSnippet }),
  });

  if (!response.ok) {
    const errorData: ApiErrorResponse = await response.json();

    const error = new Error(errorData.message || 'Server error') as ApiError;
    error.status = response.status;

    throw error;
  }

  return (await response.json()) as ApiResponse;
};
