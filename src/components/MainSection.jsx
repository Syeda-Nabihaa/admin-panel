import React from "react";
import { Heading, SubText } from "./Typography";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { motion } from "framer-motion";

export default function MainSection({
  children,
  heading,
  subText,
  to,
  btntext,
  onClick
}) {
  return (
 <motion.div
  initial={{ opacity: 0, y: 16, scale: 0.98, }}
  animate={{ opacity: 1, y: 0, scale: 1, }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}

  className="
   bg-dark
    rounded-2xl shadow-2xl
    border border-gray-900
    overflow-hidden
  "
>

      {" "}
      {/* Header */}
      <div className="px-6 py-4 flex items-center">
        <div>
          <Heading title={heading} />
          <SubText text={subText} />
        </div>

        <Link to={to} className="ml-auto">
          <Button title={btntext} onClick={onClick} />
        </Link>
      </div>
      {children}
    </motion.div>
  );
}
