import { ComponentType } from "react";
import { motion } from "framer-motion";

export interface IWithAnimationProps {
  animationSide?: "left" | "right";
}

export const withAnimation = <Props extends {}>(Component: ComponentType<Props>) => {
  return (props: Props & IWithAnimationProps) => {
    const { animationSide = "left" } = props;

    const x = animationSide === "left" ? -80 : 80;

    return (
      <motion.div
        initial={{ x, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};
