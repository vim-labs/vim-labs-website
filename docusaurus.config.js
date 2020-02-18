module.exports = {
  title: "Vim Labs",
  tagline: "Share. Learn. Grow.",
  customFields: {
    authors: {
      iRyanBell: {
        avatarUrl:
          "https://avatars0.githubusercontent.com/u/25379378?s=460&v=4",
        title: "Director of Creative Energy",
        url: "https://twitter.com/iRyanBell"
      }
    },
    description:
      "We are a design studio / technology laboratory in Las Vegas, NV, developing bold new prototypes and exploring wild & crazy ideas that might just work.",
    logoDark: {
      src: "img/logo_dark.svg"
    },
    blog: {
      title: "Latest News",
      description: "The latest news from Vim Labs."
    }
  },
  url: "https://vimlabs.com",
  baseUrl: "/",
  favicon: "/favicon.ico",
  organizationName: "vim-labs",
  projectName: "vim-labs-website",
  stylesheets: ["https://fonts.googleapis.com/css?family=Merriweather"],
  themeConfig: {
    image: "img/run.png",
    navbar: {
      logo: {
        alt: "Vim Labs Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "projects/convvo",
          label: "View Projects",
          position: "left"
        },
        { to: "latest/", label: "Latest News", position: "right" }
      ]
    },
    footer: {
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Projects",
              to: "projects/convvo"
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
    ["docusaurus-image-loader"]
  ]
};
