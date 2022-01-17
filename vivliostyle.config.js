module.exports = {
  language: 'ja',
  theme: 'lib/print.css',
  size: 'JIS-B5',
  toc: true,
  tocTitle: '目次',
  entry: [
    { rel: 'contents', theme: 'lib/toc.css' },
    'example/default.md',
    {
      title: 'おわりに',
      path: 'example/epigraph.md',
      theme: 'lib/epigraph.css',
    },
  ],
  output: [
    './out/pdf/book.pdf',
    {
      path: './out/webpub',
      format: 'webpub',
    },
  ],
};
