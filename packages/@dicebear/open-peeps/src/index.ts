/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/TArMPV7hXUhdCbfEFs3Pfm
 */

/*!
 * Open Peeps (@dicebear/open-peeps)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2024 Florian Körner
 *
 * Design "Open Peeps" by Pablo Stanley licensed under CC0 1.0. / Remix of the original.
 * Source: https://www.openpeeps.com/
 * Homepage: https://twitter.com/pablostanley
 * License: https://creativecommons.org/publicdomain/zero/1.0/
 */

import type { StyleCreate, StyleMeta } from '@dicebear/core';
import { escape } from '@dicebear/core';

import type { Options } from './types.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';

export const meta: StyleMeta = {
  title: 'Open Peeps',
  creator: 'Pablo Stanley',
  source: 'https://www.openpeeps.com/',
  homepage: 'https://twitter.com/pablostanley',
  license: {
    name: 'CC0 1.0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
};

export const create: StyleCreate<Options> = ({ prng, options }) => {
  const components = getComponents({ prng, options });
  const colors = getColors({ prng, options });

  return {
    attributes: {
      viewBox: '0 0 704 704',
      fill: 'none',
      'shape-rendering': 'auto'
    },
    body: `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M705.3 1074a2351.1 2351.1 0 0 1-15.6-101c-1-7.7-2.5-16.4 2.7-22 7.3-8 14-14.8 14.8-26.2.8-10.7-2.8-22.4-5-32.8a809.4 809.4 0 0 0-17.3-64.7c-6.6-21.7-13.9-43.2-21.3-64.6-6.9-20-13.5-40.3-22.5-59.5-17-36.5-46-63.5-81.6-81.6-9-4.5-27-20.5-36.3-24-8.5-3.4-8.5 6.3-16.9 2.6-6.7-2.9-13-6.7-16.7-13.2-4-7-14.3-16.9-15.9-25-3.3-17.4.3-32.2-12-45.3a90 90 0 0 0-41.1-23.8c-33.7-9.3-78.5-2.8-98.8 28.5-9.7 14.9-13 33-26.2 45.1-11.4 10.7-8.8 18-23.6 23.4-.9.3-23.6-4.5-24.4-4.2-16.2-3.5-31.7 6.2-46.5 11.8a325.4 325.4 0 0 0-63 32.3 399.2 399.2 0 0 0-102.3 98.5 482.5 482.5 0 0 0-76.4 161c-1.7 6.4-3.5 13-1.5 19.4 1.7 5.3 5.4 9.2 9.8 12.4 6 4.3 18 7 17.7 15.7-.1 6.6-2.4 13.5-3.5 20-1.3 7.7-2.3 15.5-3.4 23.2-4.8 35.4-8.6 71-10.3 106.6a920 920 0 0 0-.5 106c.1 2.3.8 4.5 2 6.2-1 .4-1.2 2.4.1 2.7l2.7.5a12 12 0 0 0 7 2.4l5.5.2c19.3 4 38.6 7.9 58.1 10.8 23.8 3.5 47.6 6.3 71.5 8.7 49.2 4.8 98 3.2 147.1.6a1877 1877 0 0 1 147.4-2c49.2 1.4 98.4 3.5 147.6 4.4 55 1 110-.5 164.8-5 7.5-.5 12.2-6.5 10.7-14-8.9-44.7-19-89.1-27-134Z" fill="${escape.xml(`${colors.skin}`)}"/><path d="m201 597.5 1.2-.4c14.5-5.7 29.6-14.8 45.4-11.4.5-.2 10.8 1.9 17.9 3.2l-6.7 7L247 598c40.7 67.1 88.8 100.7 144.3 100.7 55.5 0 97.7-33.6 126.4-100.7l4-1c.4 0 1 .2 1.5.4 9.3 3.6 27.4 19.6 36.3 24.1 35.6 18 64.5 45 81.6 81.6 8.7 18.6 15.2 38 21.8 57.5l.7 2c7.4 21.4 14.7 43 21.3 64.6 6.3 20.4 12 41 16.6 61.8l.7 2.9c2.2 10.4 5.8 22 5 32.8a29 29 0 0 1-3 10.7l-80.4 29 38.4 261.3c-35.1 1.5-70.3 2-105.5 1.3-49.2-.9-98.4-3-147.6-4.3-47.7-1.2-95.3-.7-143 1.7l-12 .6a946.3 946.3 0 0 1-139.5-1l-3.1-.3v-38.3l16.3-212.9-83-15.6-81.3-39.5a21.7 21.7 0 0 1-5.6-8.8c-1.9-6-.5-12 1-18l.5-1.3a492.8 492.8 0 0 1 76.4-161A399.3 399.3 0 0 1 138 629.7c19.8-13 40.9-23.9 63-32.3Z" fill="${escape.xml(`${colors.clothing}`)}"/><path d="M232.2 584.6c5.1-.3 10.3.6 15.4 1 .4.1.6.8 0 .9-9 1.9-18 4.5-26.9 7.1l-3.8 1.2c-10 3-19.8 6-29.6 10-19.4 7.9-37.8 18.5-54.8 30.8C67.2 682.8 20 754.3-9.9 828.3a526 526 0 0 0-24.3 77c-.4 1.6-2 5.4-1 7 .7 1.3 3.6 2.1 5 2.9l4.5 2.3 25.2 12.9 2.3 1.1c38 18.6 78.4 34.4 121 35.5l.4-3.7a342 342 0 0 1 9.9-60c.3-1 1.6-.6 1.7.3 3 23.1 2 46.4 1 69.7-1.8 41-4.3 82.2-6.5 123.3-1.2 20.6-2.6 41-3.9 61.7-1.3 20.5-1.7 41.6-4.7 62-.6 4.6-6 7-10 6.6-4.4-.5-7.9-4.5-8-9 0-11.9 1.5-24 2.4-35.8l2.5-33.8c3.1-41.1 6.8-82.2 10.2-123.3a4771 4771 0 0 1 3.8-43.7C76.4 979.8 34.2 963-6.1 943.5c-.6 13.2-2 26.5-3.4 39.6-3.8 36.8-7.1 73.6-9.6 110.5a2254.2 2254.2 0 0 0-4.2 92.7l-.2 7c0 4.4-.5 8.5-4.3 11.7-3.7 3.3-8.9 3.5-12.6 0-5-4.6-4.2-10.9-4-17.1a1675.6 1675.6 0 0 1 1.8-47.2 1321 1321 0 0 1 10.5-109.5l2-14c3.5-26 7.5-52.7 15.5-77.9-3.1-1.5-6.2-3-9.3-4.7-5.5-2.7-11.2-5.4-16.6-8.4-4.2-2.5-7.9-5.8-9-10.8-1.4-5.5.6-11.5 2-16.9v-.4a502 502 0 0 1 26.6-80 523.2 523.2 0 0 1 67.8-117 353.8 353.8 0 0 1 88.7-83.3 239 239 0 0 1 53.8-25.7 142.6 142.6 0 0 1 42.8-7.5Zm90.1-66c6-6.5 18.1.2 15.2 8.8a108.2 108.2 0 0 1-34.7 52A79.4 79.4 0 0 1 247 598l1.7 2.4a321.1 321.1 0 0 0 46.1 52.6c36 31.2 84.8 48 132 36 37.1-9.4 69.8-38.8 79.4-76.2-1.3.6-3 .9-4.8.5-7.7-1.7-15.3-9.8-20.3-15.6-5.3-6.3-9.5-13-12.6-20.7-5.6-14-7.4-32.1.3-45.7 1-1.7 3-.7 3.3 1l.3 2.5c1.5 12.7 3.3 25 9.3 36.6a76 76 0 0 0 18.2 23.1c2.6 2 5.8 3.6 8.1 6l.5.4c.6-5 4.1-7.3 7.6-7.2 3.3.2 7.3 1.6 8.8 2.3l.1.1a341 341 0 0 1 65.1 42 259 259 0 0 1 88.4 129c7.5 25.3 11.8 51.4 16.3 77.4l2.8 16c4.2 23.9 8.9 48.4 18.4 70.7 2.5 5.7.6 11.1-5.5 13.4A1493 1493 0 0 1 688 953c3.7 16 6 32.5 8.7 48.5 6 34.1 13.2 68 19.4 102 3.2 17.5 6.1 35 9.3 52.3l4.7 25.2 2.4 13.6.1.7c.5 2.4 1 4.9.4 7.3-.8 2.7-2.9 4.6-4.8 6.6-1.6 1.6-3.8 1.6-5.7.7l-.7-.3c-3.4-1.6-6-3.2-7.3-7-.7-2.5-1-5.2-1.5-7.7a3535.6 3535.6 0 0 1-7.8-43.6l-1.6-9.1c-5.2-31.4-10.2-62.9-12.8-94.5-1-14-2.3-28.1-3.5-42.2l-.9-10.5c-1.1-13.3-2.5-27-2.7-40.5l-4.5 1.6L657 964c-5.5 2-12.5 6-18.4 5.2-2.9-.3-5-1.2-6.8-2.9 2 28.8 4.8 57.4 8.5 86a1965.7 1965.7 0 0 0 22 135c.6 3.2 1.4 6.4 1.9 9.6.5 3.7-.5 5.9-2.5 9-1.7 2.4-5 3.7-7.8 2-3.6-2.3-5.5-4.3-6.5-8.4-1-3.7-1.6-7.6-2.3-11.4a1654.2 1654.2 0 0 1-11.4-65.2c-7.8-52-12.7-104.4-15.2-156.8a1388 1388 0 0 1-1.4-77.8c0-13.3.5-26.6 1.4-39.9 1-13.4 3-26.5 4.8-39.8 0-.5.7-.5.7 0 .8 14.9 2.1 29.8 2.8 44.7.6 14.3.9 28.5 1.4 42.8.6 18.7 1.5 37.5 2.7 56.2a9.6 9.6 0 0 1 8.5-3.1c4.7-1 9.7-3.4 14.1-5l16.8-5.5 26.4-8.7a679 679 0 0 1-18-80.8l-2-12.3c-4-24.2-8.5-48.5-15.8-72a229.8 229.8 0 0 0-34.8-68.2 370.2 370.2 0 0 0-52.7-55.3C557 627 539.7 614 523 600c.1.9.2 2 0 3-3.5 25.9-17 50-35.8 67.9-37.7 36-93.6 43.4-142 26.5-46.7-16.3-88-55-102.6-102.8-.3-.8.8-1 1.3-.5l2.4 3.3c0-.4.2-.9.7-1a129 129 0 0 0 46.6-29.2 100.2 100.2 0 0 0 21.3-33.3l.4-1c1.7-5 3.2-10.2 7-14.2Z" fill="#000"/></g><g transform="matrix(.99789 0 0 1 156 62)">${components.head?.value(components, colors) ?? ''}</g><g transform="translate(315 248)">${components.face?.value(components, colors) ?? ''}</g><g transform="translate(279 400)">${components.facialHair?.value(components, colors) ?? ''}</g><g transform="translate(179 343)">${components.mask?.value(components, colors) ?? ''}</g><g transform="translate(203 303)">${components.accessories?.value(components, colors) ?? ''}</g>`,
    extra: () => ({
      ...Object.entries(components).reduce<Record<string, string | undefined>>(
        (acc, [key, value]) => {
          acc[key] = value?.name;
          return acc;
        },
        {}
      ),
      ...Object.entries(colors).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          acc[`${key}Color`] = value;
          return acc;
        },
        {}
      ),
    }),
  };
};

export { schema } from './schema.js';
export type { Options } from './types.js';
