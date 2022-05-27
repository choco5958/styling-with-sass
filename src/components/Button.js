import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <>
      {/* 방법1 */}
      {/* <button className={["Button", size, color].join(" ")}>{children}</button> */}
      {/* 방법2 */}
      {/* <button className={`Button ${size} ${color}`}>{children}</button> */}
      {/* classnames 방법1 */}
      <button
        className={classNames("Button", size, color, { outline, fullWidth })}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
