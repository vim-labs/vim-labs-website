import React, { useCallback, useState } from "react";
import Toggle from "react-toggle";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useHasScroll } from "has-scroll-hook";
import SearchBar from "@theme/SearchBar";
import classnames from "classnames";
import useTheme from "@theme/hooks/useTheme";
import styles from "./styles.module.css";

function NavLink(props) {
  const toUrl = useBaseUrl(props.to);
  return (
    <Link
      className="navbar__item navbar__link"
      {...props}
      {...(props.href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href
          }
        : {
            activeClassName: "navbar__link--active",
            to: toUrl
          })}
    >
      {props.label}
    </Link>
  );
}

const Moon = () => <span className={classnames(styles.toggle, styles.moon)} />;
const Sun = () => <span className={classnames(styles.toggle, styles.sun)} />;

function Navbar() {
  const context = useDocusaurusContext();
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [theme, setTheme] = useTheme();
  const { siteConfig = {} } = context;
  const { baseUrl, themeConfig = {} } = siteConfig;
  const { navbar = {}, disableDarkMode = false } = themeConfig;
  const { title, logo = {}, links = [] } = navbar;

  /* Get the vertical scrollbar offset as a boolean value. */
  const hasScroll = useHasScroll();

  /* Set an isHome flag if we are visiting the landing page from a web browser. */
  let isHome = false;
  if (typeof window !== "undefined") {
    isHome = window.location.pathname === "/";
  }

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const onToggleChange = useCallback(
    e => setTheme(e.target.checked ? "dark" : ""),
    [setTheme]
  );

  /* Use a theme-specific logo. */
  const logoDark = siteConfig.customFields.logoDark.src;
  const logoUrl = useBaseUrl(theme === "dark" ? logoDark : logo.src);

  return (
    <>
      <Head>
        <html
          lang="en"
          data-theme={theme || "light"}
          data-page={isHome ? "home" : "page"}
          data-scroll={hasScroll ? "scroll" : "noScroll"}
        />
      </Head>
      <nav
        className={classnames("navbar", "navbar--light", "navbar--fixed-top", {
          "navbar-sidebar--show": sidebarShown
        })}
      >
        <div className="navbar__inner">
          <div className="navbar__items">
            <div
              aria-label="Navigation bar toggle"
              className="navbar__toggle"
              role="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                role="img"
                focusable="false"
              >
                <title>Menu</title>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </div>
            <Link className="navbar__brand" to={baseUrl}>
              {logo != null && (
                <img className="navbar__logo" src={logoUrl} alt={logo.alt} />
              )}
              {title != null && (
                <strong
                  className={isSearchBarExpanded ? styles.hideLogoText : ""}
                >
                  {title}
                </strong>
              )}
            </Link>
            {links
              .filter(linkItem => linkItem.position !== "right")
              .map((linkItem, i) => (
                <NavLink {...linkItem} key={i} />
              ))}
          </div>
          <div className="navbar__items navbar__items--right">
            {links
              .filter(linkItem => linkItem.position === "right")
              .map((linkItem, i) => (
                <NavLink {...linkItem} key={i} />
              ))}
            {!disableDarkMode && (
              <Toggle
                className={styles.displayOnlyInLargeViewport}
                aria-label="Dark mode toggle"
                checked={theme === "dark"}
                onChange={onToggleChange}
                icons={{
                  checked: <Moon />,
                  unchecked: <Sun />
                }}
              />
            )}
            <SearchBar
              handleSearchBarToggle={setIsSearchBarExpanded}
              isSearchBarExpanded={isSearchBarExpanded}
            />
          </div>
        </div>
        <div
          role="presentation"
          className="navbar-sidebar__backdrop"
          onClick={() => {
            setSidebarShown(false);
          }}
        />
        <div className="navbar-sidebar">
          <div className="navbar-sidebar__brand">
            <Link className="navbar__brand" onClick={hideSidebar} to={baseUrl}>
              {logo != null && (
                <img className="navbar__logo" src={logoUrl} alt={logo.alt} />
              )}
              {title != null && <strong>{title}</strong>}
            </Link>
            {!disableDarkMode && sidebarShown && (
              <Toggle
                aria-label="Dark mode toggle in sidebar"
                checked={theme === "dark"}
                onChange={onToggleChange}
                icons={{
                  checked: <Moon />,
                  unchecked: <Sun />
                }}
              />
            )}
          </div>
          <div className="navbar-sidebar__items">
            <div className="menu">
              <ul className="menu__list">
                {links.map((linkItem, i) => (
                  <li className="menu__list-item" key={i}>
                    <NavLink
                      className="menu__link"
                      {...linkItem}
                      onClick={hideSidebar}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
