CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
  updated_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS newsletters (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  issue TEXT NOT NULL,
  description TEXT NOT NULL,
  file_url TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
  updated_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
