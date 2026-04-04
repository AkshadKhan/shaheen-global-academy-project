import { useNavigate } from "react-router-dom";

export function useScrollToSection() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return scrollToSection;
}