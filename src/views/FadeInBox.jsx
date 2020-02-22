import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

var x = getOffset(document.getElementById("yourElId")).left;
const FadeInBox = ({ className, children }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

  useLayoutEffect(() => {
    if (!ref.current) return null;
    console.log(ref.current.getBoundingClientRect());

    setOffsetTop(getOffset(ref.current).top);
  }, [ref]);

  const y = useSpring(
    useTransform(scrollY, [offsetTop - 200, offsetTop], ["0%", `100%`]),
    springConfig
  );

  console.log(y.get());

  console.log(offsetTop);
  console.log([
    offsetTop - window.height,
    offsetTop + (1 / 2) * window.height,
    offsetTop + window.height
  ]);

  const opacity = useSpring(
    useTransform(
      scrollY,
      [offsetTop - window.innerHeight, offsetTop - window.innerHeight + 400],
      [0, 1]
    ),
    springConfig
  );

  console.log(opacity.get());

  return (
    <motion.div ref={ref} initial={{ y: 0 }} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

export default FadeInBox;
