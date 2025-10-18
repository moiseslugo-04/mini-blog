📰 Mini Blog — Next.js + Prisma + Shadcn UI

A modern mini blog built with Next.js 15 (App Router), Server Actions, and Prisma ORM. It features credential-based authentication via Next-Auth v5, Markdown post rendering with syntax highlighting, and a clean UI using Shadcn UI and TailwindCSS.

🚀 Tech Stack

⚡ Next.js 15 — React framework with Server Actions.

🧠 Prisma ORM — Database ORM for PostgreSQL.

🪶 Zod + React Hook Form — Validation and form handling.

🎨 Shadcn UI + TailwindCSS — Modern and accessible UI components.

🌗 next-themes — Light/Dark theme support.

🔐 Next-Auth v5 (Credentials Provider) — Secure authentication system.

📝 react-markdown + rehype-highlight — Markdown rendering with code highlighting.

🔒 bcryptjs — Password encryption.

📁 Project Structure
src/
 ├─ app/
 │   ├─ (auth)/        # Authentication-related routes
 │   ├─ (private)/     # Protected routes (Dashboard, etc.)
 │   ├─ (public)/      # Public pages (Home, Posts, About)
 │   ├─ api/           # Server actions / API handlers
 │   ├─ hooks/         # Custom React hooks
 │   ├─ layout.tsx     # Root layout
 │   └─ page.tsx       # Main homepage
 │
 ├─ lib/
 │   ├─ auth/          # NextAuth configuration
 │   ├─ posts/         # Post logic
 │   ├─ schemas/       # Zod validation schemas
 │   ├─ cloudinary.ts  # Image upload configuration
 │   ├─ prisma.ts      # Prisma client
 │   └─ utils.ts       # Helper functions
 │
 ├─ types/
 │   └─ next-auth.d.ts # Extended session types
 │
 ├─ ui/
 │   ├─ components/    # Reusable Shadcn UI components
 │   ├─ fonts.ts       # Font configuration
 │   ├─ globals.css    # Global styles
 │   └─ middleware.ts  # Route protection
 │
 └─ i18n/              # (Coming soon) Internationalization

⚙️ Setup & Installation

Clone the repository

git clone https://github.com/yourusername/mini-blog.git
cd mini-blog


Install dependencies

pnpm install


Environment variables
Create a .env file and add:

DATABASE_URL="your_postgres_url"
NEXTAUTH_SECRET="secure_secret_key"
NEXTAUTH_URL="http://localhost:3000"
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_CLOUD_NAME=""


Run Prisma migrations

npx prisma migrate dev


Start development server

pnpm dev

🧩 Features

✅ Credential-based authentication (register, login, logout)
✅ Private dashboard with post CRUD
✅ Markdown post editor with syntax highlighting
✅ Zod-based schema validation
✅ Responsive and themeable UI (light/dark)
✅ Server Actions + Prisma for secure operations
✅ Modular and scalable architecture

🌍 Coming Soon

🌐 i18n (Internationalization)

🧱 Multi-user support

🗂 Post categories/tags

💬 Comments with authentication

🧑‍💻 Author

Moises Lugo
📍 João Pessoa, Brazil
💼 Frontend Developer | Next.js | TypeScript

📄 License

This project is open source and available under the MIT License.

Would you like me to add a “🖼️ Preview & Demo” section (with placeholders for screenshots and the future Vercel link) to make it look even more professional on GitHub?