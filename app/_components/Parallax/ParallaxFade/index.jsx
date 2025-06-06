"use client";

import { motion } from "framer-motion";
import { fade } from "./variants";


export function ParallaxFade({ children }) {
  return (
    <motion.div variants={fade} initial="initial" whileInView="open">
      {children}
    </motion.div>
  );
}

