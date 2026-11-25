import { PawPrint, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import { useNotifications } from "~/contexts/notificationProvider";

export function Header({ className }: { className?: string }) {
  const [y, setY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { unreadCount } = useNotifications();

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        "bg-primary/80  text-contrast"
        ${!isHome && y > 50 ? "shadow-lightHeader" : ""}
        h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none px-20 py-4
        ${className}
      `}
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-2">
          <PawPrint className="h-6 w-6" />
          <span className="text-xl font-bold">My Container shop</span>
        </Link>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button variant="ghost" asChild>
                <Link to="/pets">Find your buddy</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link to="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" asChild className="relative">
                <Link to="/notifications">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </div>
                  )}
                  <span className="sr-only">通知</span>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
