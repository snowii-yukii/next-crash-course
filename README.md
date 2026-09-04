# DevEvent 🚀

> **The Hub for Every Dev — Hackathons, Meetups, and Conferences, All in One Place.**

DevEvent is a modern, high-performance web platform designed for developers to discover, explore, and book tech events worldwide. Built with the latest Next.js 16, React 19, MongoDB, and Tailwind CSS.

---

## ✨ Features

- **🎯 Event Discovery**: Browse featured and upcoming tech conferences, hackathons, and local meetups.
- **📄 Detailed Event Pages**: Dynamic routing (`/events/[slug]`) showcasing agendas, venue details, speaker info, tags, and organizer notes.
- **🎟️ Seamless Booking**: Instant event RSVP/booking powered by Next.js Server Actions and MongoDB.
- **⚡ Next-Gen Performance & Caching**: Leverages cutting-edge Next.js caching (`'use cache'`, `cacheLife`, and on-demand revalidation).
- **☁️ Cloud-Powered Media**: Cloudinary integration for scalable event poster and thumbnail storage.
- **✨ Sleek Modern Aesthetics**: Dark-mode-first UI featuring smooth gradients, WebGL canvas light rays, and responsive layouts.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & Server Actions)
- **Library**: [React 19](https://react.dev/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Base UI
- **Media Storage**: [Cloudinary](https://cloudinary.com/)
- **Graphics / Visuals**: [OGL](https://github.com/oframe/ogl) (WebGL Light Rays effect)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Project Structure

```text
crash-course/
├── app/
│   ├── api/
│   │   └── events/         # API routes for event creation & retrieval
│   ├── events/
│   │   ├── [slug]/         # Dynamic event detail and booking pages
│   │   └── page.tsx        # Events listing page
│   ├── globals.css         # Global styles & design system tokens
│   ├── layout.tsx          # Root layout with navigation & providers
│   └── page.tsx            # Home page with hero section & featured events
├── components/             # Reusable UI components (EventCard, Navbar, BookEvent, etc.)
├── database/               # Mongoose models (Event, Booking)
├── lib/
│   ├── actions/            # Server actions for events and bookings
│   ├── mongodb.ts          # MongoDB connection handler & cache
│   └── constants.tsx       # App constants and mock data
├── public/                 # Static assets, logos, and icons
└── ...config files
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/snowii-yukii/next-crash-course.git
cd next-crash-course
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and configure the following variables:

```env
# Server Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Cloudinary Configuration (Optional / For Event Image Uploads)
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the production bundle |
| `npm run start` | Runs the built production application |
| `npm run lint` | Runs ESLint to check for code quality issues |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/snowii-yukii/next-crash-course/issues).

---

## 📄 License

This project is licensed under the MIT License.
