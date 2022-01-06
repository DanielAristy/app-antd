import React, { useState } from "react";

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const UseSidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return {
    openKeys,
    onOpenChange,
  };
};

export default UseSidebar;
