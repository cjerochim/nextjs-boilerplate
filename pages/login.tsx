import { useActor } from "@xstate/react";
import Head from "next/head";
import { useFormik } from "formik";
import { TextField, Typography } from "@mui/material";

import type { NextPageWithLayout } from "./_app";
import LayoutLogin from "src/components/LayoutLogin";
import ViewLogin from "src/components/ViewLogin";
import LoginPanel from "src/structures/LoginPanel";
import schema, { initialValues } from "src/validations/login";
import Button from "src/components/Button";
import toFormik from "src/utils/toFormik";
import { useApp } from "src/contexts/AppContext";
import toInvalidLoginMessage from "src/structures/LoginPanel/utils/toInvalidLoginMessage";
import withAuthenticated from "src/hoc/withAuthenticated";
import FullScreenLoader from "src/components/FullScreenLoader";
import { AppTag } from "src/machines/appMachine";

const Login: NextPageWithLayout = () => {
  const { appService } = useApp();
  const [state, send] = useActor(appService);

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) =>
      send({
        type: "AUTH_LOGIN",
        email: values.email,
        password: values.password,
      }),
  });

  return (
    <>
      <Head>
        <title>Sample | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullScreenLoader loading={state.hasTag(AppTag.loading)} />
      <ViewLogin>
        <ViewLogin.Login>
          <LoginPanel
            helperText={toInvalidLoginMessage(state.context.auth.errorCode)}
          >
            <LoginPanel.Form noValidate onSubmit={formik.handleSubmit}>
              <Typography variant="body1">
                Note - will automatically login
              </Typography>
              <LoginPanel.FormItem>
                <TextField
                  {...toFormik(formik, "email")}
                  required
                  fullWidth
                  label="Email"
                />
              </LoginPanel.FormItem>
              <LoginPanel.FormItem>
                <TextField
                  {...toFormik(formik, "password")}
                  required
                  type="password"
                  fullWidth
                  label="Password"
                />
              </LoginPanel.FormItem>
              <LoginPanel.FormItem>
                <Button type="submit" fullWidth variant="primary">
                  Login
                </Button>
              </LoginPanel.FormItem>
            </LoginPanel.Form>
          </LoginPanel>
        </ViewLogin.Login>
        <ViewLogin.Background />
      </ViewLogin>
    </>
  );
};

Login.Layout = LayoutLogin;

// If authenticated move to dashboard
export default withAuthenticated({ redirect: "/" })(Login);
