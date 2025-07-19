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

    // Kirim request ke Flask API di localhost:5000
    const response = await fetch('http://127.0.0.1:5000/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })

    if (!response.ok) {
      throw new Error('Flask API error')
    }

    const result = await response.json()

    return NextResponse.json({
      summary: result.summary,
      original_length: text.length,
      summary_length: result.summary.length
    })
  } catch (error) {
    console.error('Error in summarize API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
