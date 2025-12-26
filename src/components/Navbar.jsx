import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../data/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useScrollSpy(
  sectionIds,
  options = { rootMargin: "-35% 0px -55% 0px" }
) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] || "");

  useEffect(() => {
    if (!sectionIds?.length) return;

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
        );

      if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
    }, options);

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds, options.rootMargin]);

  return activeId;
}

export default function Navbar({ darkTheme, closeMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  // only section ids
  const sectionIds = useMemo(
    () => navigation.filter((n) => n.section).map((n) => n.section),
    []
  );

  // scroll spy active section (only meaningful on home)
  const spyActiveId = useScrollSpy(sectionIds, {
    rootMargin: "-35% 0px -55% 0px",
  });

  // helper: scroll on home
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // For active state when NOT on home:
  // - If route is /resume => "path:/resume"
  // - If route is /#aboutme (when you navigated home with hash) => section id
  const hashId = (location.hash || "").replace("#", "");

  const activeKey = useMemo(() => {
    if (onHome) {
      // highlight current section (scroll spy), or hash if user landed with hash
      return hashId || spyActiveId || sectionIds[0] || "";
    }
    // highlight route items by pathname
    return `path:${location.pathname}`;
  }, [onHome, hashId, spyActiveId, sectionIds, location.pathname]);

  // Handle click per nav item
  const handleNav = (item) => {
    closeMenu?.();

    // route item
    if (item.path) {
      navigate(item.path);
      return;
    }

    // section item
    if (item.section) {
      if (onHome) {
        scrollToSection(item.section);
        window.history.replaceState(null, "", `#${item.section}`);
      } else {
        navigate(`/#${item.section}`);
      }
    }
  };

  // When landing on home with hash, scroll to it
  useEffect(() => {
    if (!onHome) return;
    if (!hashId) return;

    const t = setTimeout(() => scrollToSection(hashId), 0);
    return () => clearTimeout(t);
  }, [onHome, hashId]);

  // ----- Sliding pill measurement -----
  const wrapRef = useRef(null);
  const btnRefs = useRef([]);
  const [pill, setPill] = useState({ x: 0, w: 0 });

  const activeIndex = useMemo(() => {
    const idx = navigation.findIndex((n) => {
      if (n.path) return `path:${n.path}` === activeKey;
      if (n.section) return n.section === activeKey;
      return false;
    });
    return idx >= 0 ? idx : 0;
  }, [activeKey]);

  const measurePill = () => {
    const wrap = wrapRef.current;
    const btn = btnRefs.current[activeIndex];
    if (!wrap || !btn) return;

    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    setPill({
      x: btnRect.left - wrapRect.left,
      w: btnRect.width,
    });
  };

  useLayoutEffect(() => {
    measurePill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, darkTheme, location.pathname, location.hash]);

  useEffect(() => {
    const onResize = () => measurePill();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // ----- Theme styles (Hero consistent) -----
  const navBg = darkTheme ? "bg-stone-900/60" : "bg-white/70";
  const ring = darkTheme ? "ring-white/10" : "ring-black/10";

  const pillBg = darkTheme ? "bg-white/5" : "bg-black/5";
  const pillRing = darkTheme ? "ring-white/10" : "ring-black/10";

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-135">
      <div
        ref={wrapRef}
        className={`
          relative flex items-center justify-between gap-2
          py-2 rounded-full backdrop-blur-xl ring-1 overflow-auto
          ${navBg} ${ring}
        `}
      >
        {/* Sliding pill */}
        <span
          aria-hidden="true"
          className={`
            absolute top-0 bottom-0 ring-1
            transition-all duration-300 ease-out
            ${pillBg} ${pillRing}
          `}
          style={{
            transform: `translateX(${pill.x}px)`,
            width: `${pill.w}px`,
          }}
        />

        {/* Buttons */}
        {navigation.map((item, idx) => {
          const isActive =
            (item.path && `path:${item.path}` === activeKey) ||
            (item.section && item.section === activeKey);

          return (
            <button
              key={item.id}
              ref={(el) => (btnRefs.current[idx] = el)}
              type="button"
              onClick={() => handleNav(item)}
              className={`
                relative z-10 flex-1
                flex flex-col items-center justify-center gap-1
                px-2 py-2 rounded-2xl
                transition-colors duration-300 cursor-pointer
                ${
                  isActive
                    ? darkTheme
                      ? "text-sky-300"
                      : "text-sky-700"
                    : darkTheme
                    ? "text-stone-300 hover:text-stone-100"
                    : "text-stone-700 hover:text-stone-900"
                }
              `}
              aria-current={isActive ? "page" : undefined}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
              <span className="text-[11px] uppercase tracking-wide">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
