import { css } from "@emotion/react";
import { Link } from "gatsby";

const headerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 48px;
  background-color: white;
`;

const headerMenu = css`
  list-style-type: none;
  display: flex;
  gap: 16px;
`;

export function Header() {
  return (
    <header css={headerStyle}>
      <div>HyunnoH.github.io</div>
      <div>
        <menu css={headerMenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </menu>
      </div>
    </header>
  );
}
