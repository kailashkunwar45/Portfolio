"use client";

import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  show: boolean;
  message: string;
};

export function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          className="fixed bottom-6 right-6 z-50 rounded-xl border border-emerald-300/30 bg-emerald-400/20 px-4 py-3 text-sm text-emerald-100 backdrop-blur-xl"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
