import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "devextreme-react/drawer";
import { Toolbar } from "devextreme-react/toolbar";
import List from "devextreme-react/list";
import { ItemClickEvent } from "devextreme/ui/list";

// 네비게이션 메뉴 데이터
const navigation = [
  { id: 1, text: "Dashboard", icon: "home", path: "/dashboard" },
  { id: 2, text: "Profile", icon: "user", path: "/dashboard/profile" },
  {
    id: 3,
    text: "Cloud Storage",
    icon: "product",
    path: "/dashboard/cloud-storage",
  },
  { id: 4, text: "Virtual Machines", icon: "product", path: "/dashboard/vms" },
  {
    id: 5,
    text: "Web Hosting",
    icon: "product",
    path: "/dashboard/web-hosting",
  },
  { id: 6, text: "Support", icon: "info", path: "/dashboard/support" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(true);
  const windowSize = React.useRef([window.innerWidth, window.innerHeight]);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const toolbarItems = useMemo(
    () => [
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "menu",
          onClick: () => setOpened(!opened),
        },
      },
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "home",
          stylingMode: "text",
          text: "Home",
          onClick: () => navigate("/"),
        },
      },
      {
        widget: "dxButton",
        location: "after",
        options: {
          icon: "user",
          stylingMode: "text",
          text: "Logout",
          onClick: () => logout(),
        },
      },
    ],
    [opened, setOpened, logout, navigate]
  );

  return (
    <div>
      <Toolbar items={toolbarItems} className="shadow-md" />
      <Drawer
        opened={opened}
        openedStateMode="overlap"
        revealMode="slide"
        position="left"
        height={windowSize.current[1]}
        component={NavigationMenu}
        className="bg-[#16232e]"
      ></Drawer>
    </div>
  );
};

const NavigationMenu = () => {
  const navigate = useNavigate();

  const onItemClick = (e: ItemClickEvent) => {
    navigate(e.itemData.path);
  };

  return (
    <div className="bg-[#141e28] min-h-full style={{ width: '250px' }}">
      <List
        dataSource={navigation}
        hoverStateEnabled={true}
        activeStateEnabled={false}
        focusStateEnabled={true}
        selectionMode="single"
        onItemClick={onItemClick}
        className="text-xl"
      />
    </div>
  );
};

export default Dashboard;
