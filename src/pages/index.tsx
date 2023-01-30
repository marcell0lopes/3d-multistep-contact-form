import { type NextPage } from "next";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Blob } from "../components/Blob";
import { ContactForm } from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <motion.main
        initial={{ filter: "brightness(0.25)" }}
        animate={{ filter: "brightness(1)" }}
        transition={{ duration: 1.8 }}
        className="flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-900 text-white"
      >
        <AnimatePresence>
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}
          >
            <Canvas className="fixed -z-10" camera={{ position: [0, 0, 8] }}>
              <Blob />
            </Canvas>
          </motion.div>
        </AnimatePresence>
        <div className="fixed w-full max-w-4xl rounded-lg p-8">
          <ContactForm />
        </div>
      </motion.main>
    </>
  );
};

export default Home;
