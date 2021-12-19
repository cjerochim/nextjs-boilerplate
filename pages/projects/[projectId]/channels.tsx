import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import View from "src/components/View";
import withProtected from "src/hoc/withProtected";

const ProjectChannels: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sample | Project Channels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <View title="Channels">
        <View.Body>
          <Typography>...</Typography>
        </View.Body>
      </View>
    </div>
  );
};

export default withProtected({ redirect: "/login" })(ProjectChannels);
