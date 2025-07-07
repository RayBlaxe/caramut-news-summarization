import { Heart, Code, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Caramut News Summarizer"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered news summarization tool built as a final semester project for NLP course.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Natural Language Processing</li>
              <li>• Machine Learning</li>
              <li>• Text Summarization</li>
              <li>• Academic Project</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Next.js & React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• shadcn/ui</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Caramut News Summarization. Final Semester Project.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive" />
              <span>for NLP Course</span>
              <Code className="h-4 w-4 text-primary ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}