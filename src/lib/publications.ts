import bibliography from '../data/publications.bib?raw';

export type Publication = {
  id: string;
  type: string;
  title: string;
  author: string;
  year: number;
  journal?: string;
  booktitle?: string;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
  pdf?: string;
  code?: string;
  preprint?: string;
  selected: boolean;
  complete: boolean;
};

function cleanValue(value: string) {
  return value.trim().replace(/^\{|\}$/g, '').replace(/^"|"$/g, '').replace(/\s+/g, ' ');
}

function splitFields(body: string) {
  const fields: string[] = [];
  let current = '';
  let braces = 0;
  let quoted = false;

  for (const character of body) {
    if (character === '"' && braces === 0) quoted = !quoted;
    if (!quoted && character === '{') braces += 1;
    if (!quoted && character === '}') braces -= 1;

    if (character === ',' && braces === 0 && !quoted) {
      fields.push(current);
      current = '';
    } else {
      current += character;
    }
  }

  if (current.trim()) fields.push(current);
  return fields;
}

export function parsePublications(source = bibliography): Publication[] {
  const entries: Publication[] = [];
  const entryPattern = /@(\w+)\s*\{\s*([^,]+),/g;
  let match: RegExpExecArray | null;

  while ((match = entryPattern.exec(source))) {
    const [, entryType, id] = match;
    let cursor = entryPattern.lastIndex;
    let depth = 1;
    let quoted = false;

    while (cursor < source.length && depth > 0) {
      const character = source[cursor];
      if (character === '"' && source[cursor - 1] !== '\\') quoted = !quoted;
      if (!quoted && character === '{') depth += 1;
      if (!quoted && character === '}') depth -= 1;
      cursor += 1;
    }

    const body = source.slice(entryPattern.lastIndex, cursor - 1);
    const fields = Object.fromEntries(
      splitFields(body)
        .map((field) => field.match(/^\s*([\w-]+)\s*=\s*([\s\S]+?)\s*$/))
        .filter((field): field is RegExpMatchArray => Boolean(field))
        .map((field) => [field[1].toLowerCase(), cleanValue(field[2])]),
    );

    const year = Number.parseInt(fields.year ?? '', 10);
    entries.push({
      id: id.trim(),
      type: fields.type || entryType.toLowerCase(),
      title: fields.title || 'Untitled publication',
      author: fields.author || '',
      year: Number.isFinite(year) ? year : 0,
      journal: fields.journal,
      booktitle: fields.booktitle,
      volume: fields.volume,
      number: fields.number,
      pages: fields.pages,
      doi: fields.doi,
      url: fields.url,
      pdf: fields.pdf,
      code: fields.code,
      preprint: fields.preprint,
      selected: fields.selected?.toLowerCase() === 'true',
      complete: fields.complete?.toLowerCase() === 'true',
    });

    entryPattern.lastIndex = cursor;
  }

  return entries
    .filter((publication) => publication.complete)
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export function publicationTypes(publications: Publication[]) {
  return [...new Set(publications.map((publication) => publication.type))].sort();
}

export function publicationYears(publications: Publication[]) {
  return [...new Set(publications.map((publication) => publication.year))].sort((a, b) => b - a);
}
