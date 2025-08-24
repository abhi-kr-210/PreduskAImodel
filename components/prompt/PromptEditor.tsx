"use client";
import { useEffect, useId, useState } from 'react';

type Template = { id: string; name: string; prompt: string };

type Props = {
  templates: Template[];
  loading?: boolean;
  error?: string | null;
};

export function PromptEditor() {
  return null;
}


