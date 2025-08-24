import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    templates: [
      { id: 'summarize', name: 'Summarize', prompt: 'Summarize the following text:' },
      { id: 'translate', name: 'Translate', prompt: 'Translate to Spanish:' },
      { id: 'brainstorm', name: 'Brainstorm', prompt: 'List 5 creative ideas about:' }
    ]
  });
}


