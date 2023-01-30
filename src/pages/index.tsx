import { type NextPage } from "next";
import Head from "next/head";

import { Canvas } from "@react-three/fiber";
import { Blob } from "../components/Blob";
import { ContactForm } from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <main className="text-whit flex h-screen items-center justify-around bg-slate-900 px-6">
        <Canvas className="max-w-xl" camera={{ position: [0, -6, 8] }}>
          <Blob />
        </Canvas>
        <div className="w-full rounded-lg p-8">
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Home;
