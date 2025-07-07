import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Brain, Target, Users, Zap, FileText } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Caramut</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An intelligent news summarization platform developed as a final semester project for our Natural Language Processing course
          </p>
        </div>

        {/* Project Overview */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-8 w-8" />
              Project Overview
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Understanding the core mission and objectives of our NLP project
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                <strong>Caramut News Summarization</strong> is an innovative artificial intelligence-powered platform designed to transform lengthy news articles into concise, meaningful summaries. This project represents our culminating work in the Natural Language Processing course, combining theoretical knowledge with practical implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In today's information-rich world, readers often struggle to keep up with the volume of news content. Our solution addresses this challenge by leveraging advanced NLP techniques to extract key information, maintaining context while significantly reducing reading time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">AI-Powered Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Advanced machine learning algorithms analyze and understand news content to generate accurate summaries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-success/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-xl text-foreground">Real-time Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Get instant summaries of news articles with our optimized processing pipeline.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl text-foreground">Quality Summaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Maintain key information and context while achieving significant content compression.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Implementation */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <Target className="h-8 w-8 text-primary" />
              Technical Implementation
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              The technologies and methodologies behind our summarization system
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">NLP Techniques</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Text Processing</Badge>
                    <span className="text-muted-foreground">Advanced tokenization and preprocessing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Feature Extraction</Badge>
                    <span className="text-muted-foreground">TF-IDF and semantic analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Summarization</Badge>
                    <span className="text-muted-foreground">Extractive and abstractive methods</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Development Stack</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Frontend</Badge>
                    <span className="text-muted-foreground">Next.js, React, TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Styling</Badge>
                    <span className="text-muted-foreground">Tailwind CSS, shadcn/ui</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">ML Backend</Badge>
                    <span className="text-muted-foreground">Python, scikit-learn, NLTK</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Context */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <Users className="h-8 w-8 text-success" />
              Academic Context
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Understanding the educational objectives and learning outcomes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                This project serves as the capstone assignment for our Natural Language Processing course, demonstrating our understanding of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Theoretical Knowledge</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Text preprocessing and normalization</li>
                    <li>• Feature extraction techniques</li>
                    <li>• Statistical NLP methods</li>
                    <li>• Evaluation metrics for summarization</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Practical Skills</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• End-to-end system development</li>
                    <li>• Web application deployment</li>
                    <li>• User interface design</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}