# ia11y

**ia11y** is an accessible, AI-powered chat application built with Next.js, standard web a11y practices, and modern web technologies.

## Features

- **🤖 AI-Powered**: Seamless integration with Google Generative AI via the [Vercel AI SDK](https://sdk.vercel.ai/docs).
- **♿ Accessible by Design**: Built with accessibility as a priority, ensuring usability for all users using semantic HTML.
- **🌍 Internationalization**: Full multilingual support powered by [Intlayer](https://github.com/aymericzip/intlayer).
- **🎨 Modern UI**: Styled with [Tailwind CSS 4](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com) components for a beautiful, responsive interface.
- **⚡ High Performance**: Leveraging Next.js 16 and React 19 for optimal performance and developer experience.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 20+ installed on your machine.
- A package manager like `npm`, `pnpm`, or `yarn`.
- A Google Generative AI API Key.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/MrRedu/ia11y.git
    cd ia11y
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory based on `.env.example`. You will likely need to add your Google AI API key:

    ```bash
    GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    pnpm dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [ui/Shadcn](https://ui.shadcn.com)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/docs) & [Google Generative AI](https://ai.google.dev/)
- **Internationalization**: [Intlayer](https://intlayer.org/)
- **Validation**: [Zod](https://zod.dev/)

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Intlayer Documentation](https://github.com/aymericzip/intlayer)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License.
