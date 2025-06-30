import { NextRequest, NextResponse } from 'next/server'
import { pipeline } from '@xenova/transformers';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required and must be a string' },
        { status: 400 }
      )
    }

    const summarizer = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6');
    const summary = await summarizer(text, {
      max_length: 150,
      min_length: 30,
      no_repeat_ngram_size: 3,
      early_stopping: true,
    });

    const summaryText = Array.isArray(summary) ? summary[0].summary_text : summary.summary_text;

    return NextResponse.json({
      summary: summaryText,
      original_length: text.length,
      summary_length: summaryText.length,
    });

  } catch (error) {
    console.error('Error in summarize API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}