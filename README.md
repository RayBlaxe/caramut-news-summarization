# News Summarizer

A modern, AI-powered news summarization tool built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI components.

## Features

- **Clean, Modern Interface**: Professional UI with responsive design
- **Real-time Character Counter**: Track input length as you type
- **Smart Compression Analytics**: View original vs summary length and compression ratio
- **Copy to Clipboard**: Easily copy generated summaries
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Comprehensive error handling for API failures
- **Mobile Responsive**: Works perfectly on all devices

## Tech Stack

- **Next.js 15** with Turbopack for fast development
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ShadCN UI** components for consistent design
- **Bun** as package manager
- **Lucide React** for icons

## Installation

1. Install dependencies:
```bash
bun install
```

2. Start the development server:
```bash
bun run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Integration

The app is prepared for Flask API integration:

- **Endpoint**: `POST /api/summarize`
- **Request**: `{ "text": "news content" }`
- **Response**: `{ "summary": "...", "original_length": 1000, "summary_length": 150 }`

Currently uses mock data for demonstration. Replace the API route in `app/api/summarize/route.ts` with your actual Flask backend.

## Usage

1. Paste your news article in the textarea
2. Click "Summarize" to generate a summary
3. View compression statistics and copy the result
4. Use "Clear" to reset the form

## Components

- **Button**: Interactive buttons with loading states
- **Card**: Container components for organized layout
- **Textarea**: Input field for news content
- **Badge**: Status indicators and labels
- **Alert**: Error and success messages
- **Skeleton**: Loading state placeholders

## Development

Built with modern web technologies and following best practices:
- Server-side rendering with Next.js App Router
- Component-based architecture
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Accessible UI components from ShadCN
