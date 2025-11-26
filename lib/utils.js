export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

