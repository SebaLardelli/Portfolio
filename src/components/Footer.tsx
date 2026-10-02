import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[740px] px-5 py-8 text-center text-sm text-gray-500">
      <p>
        {profile.name} - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
