import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import Context from "../Context";
import data from "../../data.json";

function LogIn() {
  const { user, setUser } = useContext(Context);

  function handleLogin(values) {
    if (
      data.users[0].email.includes(values.email) &&
      data.users[0].password.includes(values.password)
    ) {
      setUser({ username: data.users[0].username, isLoggedIn: true });
      console.log(user);
      localStorage.setItem(
        "user",
        JSON.stringify({ username: data.users[0].username, isLoggedIn: true })
      );
    }
  }

  return (
    <>
      <h2>Log in</h2>
      {user.email}
      <Formik
        initialValues={{ email: "ellen@gmail.com", password: "hej" }}
        onSubmit={(values) => {
          handleLogin(values);
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
