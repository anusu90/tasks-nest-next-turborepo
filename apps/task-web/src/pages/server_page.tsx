import { getLayout } from "@/components/layout/layout";
import { authOptions } from "@/constants/auth";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { Button } from "ui";
import { NextPageWithLayout } from "./_app";

const ServerPage: NextPageWithLayout = () => {
  return (
    <div className="p-8">
      <div>
        You are seeing the protected page. There will not be any loading state
        as we redirect if user is not there.
      </div>
      <div className="my-10">
        <Button>Fetch Data</Button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userSession = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  if (!userSession) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {
      session: userSession,
    },
  };
};

ServerPage.getLayout = getLayout;
export default ServerPage;
