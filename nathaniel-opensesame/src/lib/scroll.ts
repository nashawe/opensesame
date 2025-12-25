import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top if no hash (e.g. going from /demo to /)
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // If hash exists, attempt to find element and scroll
    const scrollToElement = () => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // Offset for sticky navbar (64px) + breathing room
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Try immediately, then retry after a short delay to ensure DOM is ready
    scrollToElement();
    const timer = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timer);
  }, [hash, pathname]);
}
