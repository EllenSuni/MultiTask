import { Formik, Form, Field } from "formik";

function LogIn() {
  return (
    <>
      <h2>Log in</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {() => (
          <Form>
            <Field
              type="email"
              name="email"
            />
            <Field
              type="password"
              name="password"
            />
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LogIn;
