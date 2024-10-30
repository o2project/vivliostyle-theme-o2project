module.exports = {
  language: 'ja',
  theme: 'lib/print_jis_b5.css',
  size: 'JIS-B5',
  toc: true,
  tocTitle: '目次',
  entry: [
    {
      path: './example/book_title.md',
      theme: './lib/book_title.css',
    },
    { rel: 'contents', theme: './lib/toc.css' },
    './example/default.md',
    {
      title: 'おわりに',
      path: './example/book_information.md',
      theme: './lib/book_information.css',
    },
  ],
  output: [
    './out/pdf/book.pdf',
    {
      path: './out/webpub',
      format: 'webpub',
    },
  ],
  workspaceDir: '.temp',
};
