import React, { useState } from 'react';

export default function DropDown({ children }) {
  // Mobile Toggle
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  return (
    <>
      <span
        className={
          mobileToggle
            ? 'cs_menu_dropdown_toggle active'
            : 'cs_menu_dropdown_toggle'
        }
        onClick={handelMobileToggle}
      >
        <span></span>
      </span>
      {children}
    </>
  );
}
