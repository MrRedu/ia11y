export const getAnswer = async (codeSnippet: string) => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ codeSnippet }),
  });
  const data = await response.json();
  return data._output;
};
