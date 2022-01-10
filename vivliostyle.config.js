module.exports = {
  language: "ja",
  theme: "theme_print.css",
  size: "JIS-B5",
  toc: true,
  tocTitle: "目次",
  entry: [{ rel: "contents", theme: "theme_toc.css" }, "example/default.md"],
  output: [
    "book.pdf",
    {
      path: "./book",
      format: "webpub",
    },
  ],
};
