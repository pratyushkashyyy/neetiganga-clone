const articleColumns = 'id, title, category, date, excerpt, body, status, updated_at, created_at';
const newsletterColumns = 'id, title, issue, description, file_url, status, updated_at, created_at';

const mapArticle = (row) => ({
  id: row.id,
  title: row.title,
  category: row.category,
  date: row.date,
  excerpt: row.excerpt,
  body: row.body,
  status: row.status,
  updatedAt: row.updated_at,
  createdAt: row.created_at,
});

const mapNewsletter = (row) => ({
  id: row.id,
  title: row.title,
  issue: row.issue,
  description: row.description,
  fileUrl: row.file_url,
  status: row.status,
  updatedAt: row.updated_at,
  createdAt: row.created_at,
});

export const requireDatabase = (env) => {
  if (!env.CMS_DB) {
    throw new Error('CMS_DB binding is not configured.');
  }

  return env.CMS_DB;
};

export const getContent = async (db, { publishedOnly = false } = {}) => {
  const articleWhere = publishedOnly ? "WHERE status = 'published'" : '';
  const newsletterWhere = publishedOnly ? "WHERE status = 'published'" : '';

  const [articlesResult, newslettersResult] = await Promise.all([
    db.prepare(`SELECT ${articleColumns} FROM articles ${articleWhere} ORDER BY datetime(updated_at) DESC`).all(),
    db.prepare(`SELECT ${newsletterColumns} FROM newsletters ${newsletterWhere} ORDER BY datetime(updated_at) DESC`).all(),
  ]);

  return {
    articles: (articlesResult.results || []).map(mapArticle),
    newsletters: (newslettersResult.results || []).map(mapNewsletter),
  };
};

export const replaceContent = async (db, content) => {
  const now = new Date().toISOString();
  const statements = [
    db.prepare('DELETE FROM articles'),
    db.prepare('DELETE FROM newsletters'),
  ];

  for (const article of content.articles || []) {
    statements.push(
      db
        .prepare(
          'INSERT INTO articles (id, title, category, date, excerpt, body, status, updated_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        )
        .bind(
          article.id,
          article.title,
          article.category,
          article.date,
          article.excerpt,
          article.body || '',
          article.status,
          article.updatedAt || now,
          article.createdAt || article.updatedAt || now
        )
    );
  }

  for (const newsletter of content.newsletters || []) {
    statements.push(
      db
        .prepare(
          'INSERT INTO newsletters (id, title, issue, description, file_url, status, updated_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        )
        .bind(
          newsletter.id,
          newsletter.title,
          newsletter.issue,
          newsletter.description,
          newsletter.fileUrl || '#',
          newsletter.status,
          newsletter.updatedAt || now,
          newsletter.createdAt || newsletter.updatedAt || now
        )
    );
  }

  await db.batch(statements);
};
