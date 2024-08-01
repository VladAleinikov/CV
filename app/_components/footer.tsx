import { Button } from "@/components/ui/button";
import { contacts } from "@/data";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <h1 className="heading lg:max-w-[45vw]">
          You can always <span className="text-purple">contact me</span> in the
          following ways
        </h1>
        <div className="flex lg:gap-x-4 gap-x-2">
          {contacts.map(({ icon, href }) => (
            <a
            key={href}
              href={href}
              target="blank"
              className=""
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
