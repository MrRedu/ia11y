'use server';

export async function getRepoStars() {
  try {
    const response = await fetch('https://api.github.com/repos/MrRedu/ia11y', {
      // next: { revalidate: 3600 },
    });

    if (!response.ok) return 0;

    const data = await response.json();
    return data.stargazers_count || 0;
  } catch (error) {
    console.error('Error fetching stars:', error);
    return 0;
  }
}
