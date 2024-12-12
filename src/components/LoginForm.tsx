import { useState, useRef, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formData = useRef({ email: "", password: "" });

  return (
    <form>
      <Form
        formData={formData.current}
        disabled={loading}
        showColonAfterLabel={false}
        showRequiredMark={false}
      >
        <Item
          dataField="email"
          editorType="dxTextBox"
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
          <Label visible={false} />
        </Item>
        <Item
          dataField="password"
          editorType="dxTextBox"
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions width="100%" type="default" useSubmitBehavior={true}>
            {loading ? (
              <LoadIndicator width="24px" height="24px" visible={true} />
            ) : (
              "Log In"
            )}
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className="flex justify-center">
            <Link
              to="/forget-password"
              className="text-blue-500 hover:text-blue-700 "
            >
              Forgot password?
            </Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            width="100%"
            type="normal"
            onClick={() => navigate("/register")}
          >
            Register
          </ButtonOptions>
        </ButtonItem>
      </Form>
    </form>
  );
};

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Email",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};
export default LoginForm;
