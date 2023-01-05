import { motion } from "framer-motion";
import React from "react";

interface ITextAnimationProps {
  children: string;
  size?: string;
}

interface ICharacterAnimationProps {
  children: string;
  size?: string;
}

export const BounceAnimation = ({ children }: any) => {
  return (
    <motion.div
      initial={{ y: 70 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const CharacterAnimation: React.FC<ICharacterAnimationProps> = ({
  children,
  size,
}) => {
  // splitting text into letters
  const letters = Array.from(children);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: size ?? "2rem",
        justifyContent: "center",
        padding: "2rem",
      }}
      variants={container}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TextAnimation: React.FC<ITextAnimationProps> = ({
  children,
  size,
}) => {
  // This will split the text into an array of word
  const words = children.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: size ?? "2rem",
        justifyContent: "center",
        padding: "2rem",
      }}
      variants={container}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const ScaleAnimation = ({ children }: any) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
