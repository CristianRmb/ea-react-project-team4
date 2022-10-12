/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import {useState, useEffect, useCallback} from "react";

function useHideNavbar() {
  const [handleShow, setHandleShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(
    (event: any) => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setHandleShow(false);
        } else {
          setHandleShow(true);
        }

        setLastScrollY(window.scrollY);
      }
    },
    [lastScrollY]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return {
    handleShow,
  };
}

export default useHideNavbar;
