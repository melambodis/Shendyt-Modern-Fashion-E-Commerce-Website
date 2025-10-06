
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children, targetId }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const target = document.getElementById(targetId);
  if (!mounted || !target) return null;

  return createPortal(children, target);
}


