import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required and must be a string' },
        { status: 400 }
      )
    }

    // Mock response - replace with actual Flask API call
    const mockSummary = {
      summary: "This is a mock summary of the news article. The AI has analyzed the content and provided a concise overview highlighting the key points, main events, and important details while maintaining the essential information in a much shorter format.",
      original_length: text.length,
      summary_length: 200
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    return NextResponse.json(mockSummary)
  } catch (error) {
    console.error('Error in summarize API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}