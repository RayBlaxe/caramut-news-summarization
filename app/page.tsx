'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader2, Copy, Trash2, FileText, TrendingUp } from 'lucide-react'

interface SummaryResponse {
  summary: string
  original_length: number
  summary_length: number
}

export default function Home() {
  const [newsText, setNewsText] = useState('')
  const [summary, setSummary] = useState<SummaryResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSummarize = async () => {
    if (!newsText.trim()) {
      setError('Please enter some news content to summarize.')
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newsText }),
      })

      if (!response.ok) {
        throw new Error('Failed to summarize')
      }

      const data: SummaryResponse = await response.json()
      setSummary(data)
    } catch {
      setError('Failed to summarize the news. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setNewsText('')
    setSummary(null)
    setError(null)
  }

  const handleCopyToClipboard = async () => {
    if (summary) {
      try {
        await navigator.clipboard.writeText(summary.summary)
      } catch (err) {
        console.error('Failed to copy to clipboard:', err)
      }
    }
  }

  const compressionRatio = summary 
    ? Math.round(((summary.original_length - summary.summary_length) / summary.original_length) * 100)
    : 0

  return (
    <div className="bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">News Summarizer</h1>
          <p className="text-lg text-muted-foreground">Transform lengthy news articles into concise summaries</p>
        </div>

        {/* Main Input Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              News Input
            </CardTitle>
            <CardDescription>
              Paste your news article or draft below to get an AI-powered summary
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Textarea
                placeholder="Paste your news draft here..."
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                className="min-h-[200px] resize-y"
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{newsText.length} characters</span>
                <Badge variant="outline">
                  {newsText.length > 1000 ? 'Long article' : newsText.length > 500 ? 'Medium article' : 'Short article'}
                </Badge>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2">
              <Button 
                onClick={handleSummarize} 
                disabled={isLoading || !newsText.trim()}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4" />
                    Summarize
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClear}
                disabled={isLoading}
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <Card>
            <CardHeader>
              <CardTitle>Generating Summary...</CardTitle>
              <CardDescription>Please wait while we process your news article</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        )}

        {/* Results Card */}
        {summary && !isLoading && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Summary Results
                </span>
                <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </CardTitle>
              <CardDescription>
                Machine Learning generated summary with key insights and main points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{summary.original_length}</div>
                  <div className="text-sm text-muted-foreground">Original Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{summary.summary_length}</div>
                  <div className="text-sm text-muted-foreground">Summary Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{compressionRatio}%</div>
                  <div className="text-sm text-muted-foreground">Compression</div>
                </div>
              </div>

              {/* Summary Text */}
              <div className="prose max-w-none">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-foreground leading-relaxed">{summary.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}