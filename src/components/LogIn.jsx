import { Formik, Form, Field } from "formik";
import { useContext, useEffect } from "react";
import Context from "../Context";

function LogIn() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(Context);

  useEffect(() => {
    console.log(user);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <h2>Log in</h2>
      {user.email}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setUser(values);
          setIsLoggedIn(true);
        }}>
        {() => (
          <Form>
            <label>
              Email:
              <Field
                type="email"
                name="email"
              />
            </label>
            <label>
              Password:
              <Field
                type="password"
                name="password"
              />
            </label>
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LogIn;
