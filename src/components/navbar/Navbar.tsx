import { useNavigate, Link } from "react-router-dom";
import Toolbar, { Item } from "devextreme-react/toolbar";
import { ItemClickEvent } from "devextreme/ui/toolbar";
import "./Navbar.css";

/* DevExtreme의 dxMenu 컴포넌트를 사용한다면 onItemClick 이벤트 객체에는 itemData가 포함됩니다. */

const Navbar = () => {
  const navigate = useNavigate();
  const onItemClick = (e: ItemClickEvent) => {
    if (e.itemData?.options.text) {
      navigate(`/${e.itemData.options.text.toLowerCase()}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="p-2 mx-4 md:p-4 shadow-md">
      <Toolbar onItemClick={onItemClick}>
        {
          <Item location="before" options={homeOptions}>
            <Link to="/">
              <h2 className="pr-2 ">MamaPai</h2>
            </Link>
          </Item>
        }
        <Item
          widget="dxButton"
          location="before"
          locateInMenu="auto"
          options={homeOptions}
        />
        <Item
          widget="dxButton"
          location="before"
          locateInMenu="auto"
          options={productsOptions}
        />
        <Item
          widget="dxButton"
          location="before"
          locateInMenu="auto"
          options={pricingOptions}
        />
        <Item
          widget="dxButton"
          location="before"
          locateInMenu="auto"
          options={aboutOptions}
        />
        <Item
          widget="dxButton"
          location="after"
          locateInMenu="auto"
          options={logInOptions}
        />
        <Item
          widget="dxButton"
          location="before"
          locateInMenu="auto"
          options={contactOptions}
        />
      </Toolbar>
    </div>
  );
};

const homeOptions = {
  text: "Home",
  stylingMode: "text",
};
const aboutOptions = {
  text: "About",
  stylingMode: "text",
};
const productsOptions = {
  text: "Products",
  stylingMode: "text",
};
const pricingOptions = {
  text: "Pricing",
  stylingMode: "text",
};
const contactOptions = {
  text: "Contact",
  stylingMode: "text",
};
const logInOptions = {
  text: "Login",
  stylingMode: "text",
};

export default Navbar;
