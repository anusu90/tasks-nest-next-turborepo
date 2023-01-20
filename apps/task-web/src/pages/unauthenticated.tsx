import { useSession } from "next-auth/react";
import { getLayout } from "@/components/layout/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status === "loading") return <div>Loading....</div>;
  if (status === "unauthenticated") {
    return (
      <div className="p-96">
        You are here because you tried to access protected page without signing
        in. You can login to continue.
      </div>
    );
  }
  return <></>;
};

Home.getLayout = getLayout;
export default Home;
