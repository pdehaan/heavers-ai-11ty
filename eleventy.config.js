const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  const mdEngine = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    slugify: eleventyConfig.getFilter("slugify"),
  });

  eleventyConfig.setLibrary("md", mdEngine);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "www",
    }
  };
};
