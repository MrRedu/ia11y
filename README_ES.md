# ia11y

**ia11y** es una aplicación de chat accesible impulsada por IA, construida con Next.js, prácticas estándar de accesibilidad web y tecnologías web modernas.

## Características

- **🤖 Impulsada por IA**: Integración perfecta con Google Generative AI a través del [Vercel AI SDK](https://sdk.vercel.ai/docs).
- **♿ Accesible por Diseño**: Construida priorizando la accesibilidad, asegurando la usabilidad para todos los usuarios mediante HTML semántico.
- **🌍 Internacionalización**: Soporte multilingüe completo impulsado por [Intlayer](https://github.com/aymericzip/intlayer).
- **🎨 UI Moderna**: Estillizada con [Tailwind CSS 4](https://tailwindcss.com/) y componentes de [Shadcn UI](https://ui.shadcn.com) para una interfaz hermosa y responsiva.
- **⚡ Alto Rendimiento**: Aprovechando Next.js 16 y React 19 para un rendimiento y experiencia de desarrollador óptimos.

## Primeros Pasos

Sigue estos pasos para configurar el proyecto localmente.

### Requisitos Previos

- Node.js 20+ instalado en tu máquina.
- Un gestor de paquetes como `npm`, `pnpm`, o `yarn`.
- Una clave API de Google Generative AI.

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/MrRedu/ia11y.git
    cd ia11y
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o
    pnpm install
    # o
    yarn install
    ```

3.  **Configuración del Entorno:**

    Crea un archivo `.env` en el directorio raíz basándote en `.env.example`. Probablemente necesitarás agregar tu clave API de Google AI:

    ```bash
    GOOGLE_GENERATIVE_AI_API_KEY=tu_clave_api_aqui
    ```

4.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    pnpm dev
    # o
    yarn dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Tecnologías

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes**: [ui/Shadcn](https://ui.shadcn.com)
- **Integración de IA**: [Vercel AI SDK](https://sdk.vercel.ai/docs) & [Google Generative AI](https://ai.google.dev/)
- **Internacionalización**: [Intlayer](https://intlayer.org/)
- **Validación**: [Zod](https://zod.dev/)

## Aprende Más

Para aprender más sobre las tecnologías utilizadas en este proyecto, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Documentación de Intlayer](https://github.com/aymericzip/intlayer)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

## Licencia

Este proyecto está bajo la Licencia MIT.
