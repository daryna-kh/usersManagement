import { Response } from 'express';

export function parseAndValidateId(
  rawId: string,
  res: Response,
): number | null {
  const parsed = Number(rawId);
  if (Number.isNaN(parsed)) {
    res.status(400).json({ error: 'ID must contain only numbers' });
    return null;
  }
  return parsed;
}
