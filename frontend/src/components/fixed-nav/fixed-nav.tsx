import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "~/components/container/container";
import { Button } from "~/components/button/button";
import { Variants, motion } from "framer-motion";
import { FIXED_NAV_NAVIGATION } from "~/data/navigation/navigation";
import { useRouter } from "next/router";

export interface IFixedNavProps {
  className?: string;
}

export const FixedNav: FC<IFixedNavProps> = props => {
  const { className } = props;

  const { pathname } = useRouter();

  const route = pathname.split("/")[1] || "about";

  const buttonVariants: Variants = {
    hidden: index => ({ opacity: 0, x: index === 0 ? -80 : 80 }),
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div
      className={twMerge(
        "bg-green fixed bottom-0 w-full rounded-tl-xl rounded-tr-xl py-[10px] ",
        className
      )}
    >
      <Container className="flex w-full justify-between" size="xs">
        {FIXED_NAV_NAVIGATION[route as keyof typeof FIXED_NAV_NAVIGATION].map((item, index) => (
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.7 }}
            custom={index}
            key={index}
            className={twMerge("w-full max-w-[150px]", index === 0 && "mr-[15px]")}
          >
            <Button className="w-full" href={item.href}>
              {item.label}
            </Button>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};
