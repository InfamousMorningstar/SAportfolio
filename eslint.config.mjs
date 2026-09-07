import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/*
 * Flat config, replacing .eslintrc.js.
 *
 * `next lint` was removed in Next 16, which meant `npm run lint` had been
 * silently resolving "lint" as a directory name and failing ever since the
 * framework upgrade. ESLint now runs directly, and eslint-config-next 16
 * exports flat config arrays natively.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'next-env.d.ts',
      // Scratch files written by tooling, not part of the project source.
      '.remember/**',
      'eslint-report.json',
      'analyze.py',
      'detail.py',
    ],
  },
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      // Long-form prose lives in JSX throughout the blog posts and case
      // studies; escaping every apostrophe hurts readability more than it
      // helps correctness.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
