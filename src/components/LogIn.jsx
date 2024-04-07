import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import Context from "../Context";
import data from "../../data.json";

function LogIn() {
  const { setUser } = useContext(Context);

  function handleLogin(values) {
    if (
      data.users[0].email.includes(values.email) &&
      data.users[0].password.includes(values.password)
    ) {
      setUser({ username: data.users[0].username, isLoggedIn: true });
      localStorage.setItem(
        "user",
        JSON.stringify({ username: data.users[0].username, isLoggedIn: true })
      );
    }
  }

  return (
    <div className="log-in">
      <h2>Log in</h2>
      <Formik
        initialValues={{
          email: "ellen@gmail.com",
          password: "hej",
          keepLoggedIn: false,
        }}
        onSubmit={(values) => {
          handleLogin(values);
        }}>
        {() => (
          <Form>
            <label>
              Email:{" "}
              <Field
                className="field"
                type="email"
                name="email"
              />
            </label>
            <label>
              Password:{" "}
              <Field
                className="field"
                type="password"
                name="password"
              />
            </label>
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LogIn;
