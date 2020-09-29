import React from "react";
import { Link } from "gatsby";

import {
  handleLinkClick,
  stripHashedLocation,
  handleStrippedLinkClick
} from "../utils";
import { anchorLinkTypes } from "../types";

export function AnchorLink({
  to,
  title,
  children,
  className,
  stripHash = false,
  ...props
}) {
  const onClick = e => {
    if (stripHash) return handleStrippedLinkClick(to, e);
    return handleLinkClick(to, e);
  };

  const linkProps = {
    ...props,
    title,
    className,
    to: stripHash ? stripHashedLocation(to) : to,
    onClick,
  };

  const _children = children || title;

  return <Link {...linkProps}>{_children}</Link>;
}

AnchorLink.propTypes = anchorLinkTypes;
