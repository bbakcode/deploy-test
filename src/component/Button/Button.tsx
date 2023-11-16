import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, ""> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(styles["storybook-button"], {
        [styles["storybook-button--primary"]]: primary,
        [styles["storybook-button--secondary"]]: !primary,
        [styles[`storybook-button--${size}`]]: size,
      })}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
