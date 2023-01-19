import { getLayout } from "@/components/layout/layout";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageWithLayout } from "./_app";

const ClientPage: NextPageWithLayout = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/unauthenticated");
    }
  }, [status]);

  if (status === "authenticated") {
    return (
      <div className="p-8">
        <div>You are seeing the protected page</div>
      </div>
    );
  }

  return <>Loading.....</>;
};

ClientPage.getLayout = getLayout;

export default ClientPage;
