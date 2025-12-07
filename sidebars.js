/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the sidebar
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/environment-setup',
        'getting-started/troubleshooting',
      ],
    },
    {
      label: 'Chapter 1: Physical AI Fundamentals',
      items: [
        'chapter-1-physical-ai-fundamentals/index',
        'chapter-1-physical-ai-fundamentals/lesson-1-fundamentals',
        'chapter-1-physical-ai-fundamentals/lesson-2-core-concepts',
        'chapter-1-physical-ai-fundamentals/lesson-3-building-intuition',
      ],
    },
    {
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/resources',
      ],
    },
  ],
};

module.exports = sidebars;
