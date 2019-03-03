import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default function Header() {
  return (
    <Menu style={{ marginTop: "40px", marginBottom: "100px" }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Menu.Item>Campaign</Menu.Item>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
