import LaunchApp from "./navbar/LaunchApp";
import Logo from "./navbar/Logo";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between z-10">
      <Logo />
      <LaunchApp />
    </div>
  );
}