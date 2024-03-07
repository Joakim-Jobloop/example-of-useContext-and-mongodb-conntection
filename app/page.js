import Image from "next/image";
import { setup } from "./lib/mongoDB";
import { Header } from "./components/Header";
import { SiteContextProvider } from "./data/siteContext";

export default async function Home() {
  const fetch = await setup()
  return (
    <SiteContextProvider>
      <main className="">
        <Header />
        {/* {JSON.stringify(fetch)} */}

    </main>
    </SiteContextProvider>
  );
}
