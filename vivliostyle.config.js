module.exports = {
  language: 'ja',
  theme: 'lib/print.css',
  size: 'JIS-B5',
  toc: true,
  tocTitle: '目次',
  entry: [{ rel: 'contents', theme: 'lib/toc.css' }, 'example/default.md'],
  output: [
    './out/pdf/book.pdf',
    {
      path: './out/webpub',
      format: 'webpub',
    },
  ],
};
