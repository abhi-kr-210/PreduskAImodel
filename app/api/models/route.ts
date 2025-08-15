import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    models: [
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
      { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI' },
      { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic' },
      { id: 'llama-3-70b', name: 'Llama 3 70B', provider: 'Meta' },
      { id: 'custom', name: 'Custom Model', provider: 'Local' }
    ]
  });
}


