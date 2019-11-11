/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Vim Labs",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  stylesheets: ["https://fonts.googleapis.com/css?family=Merriweather:300"],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Vim Labs Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "projects/coming-soon",
          label: "View Projects",
          position: "left"
        },
        { to: "latest", label: "Latest", position: "right" }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Projects",
              to: "projects/coming-soon"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Join Chat",
              href: "https://discord.gg/ApaZxnC"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              to: "https://twitter.com/vimlabs"
            },
            {
              label: "Instagram",
              to: "https://www.instagram.com/vim.labs"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vim Labs`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        path: "latest",
        routeBasePath: "latest"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "projects",
        routeBasePath: "projects",
        sidebarPath: require.resolve("./sidebars.js")
      }
    ],
    [require.resolve("./plugins/css-url-loader.js")]
  ]
};
