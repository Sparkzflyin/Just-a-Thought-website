"use client";

import { usePathname } from "next/navigation";

// Placeholder icons - in a real project, you'd use an icon library like react-icons
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.921 1.236 3.336 2.811 4.228-.906-.028-1.752-.279-2.4-.623v.06c0 2.683 1.906 4.916 4.438 5.424-.464.126-.95.194-1.455.194-.356 0-.702-.034-1.043-.098.711 2.197 2.769 3.799 5.216 3.844-1.892 1.481-4.271 2.366-6.867 2.366-.447 0-.888-.026-1.325-.077 2.449 1.571 5.356 2.493 8.491 2.493 10.188 0 15.777-8.438 15.777-15.777 0-.24-.005-.478-.015-.715.981-.703 1.83-1.579 2.5-2.589z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.06 20.45h-3.5V8.97h3.5v11.48zM5.31 7.5c-1.22 0-2.21-1-2.21-2.21s.99-2.21 2.21-2.21 2.21 1 2.21 2.21-1 2.21-2.21 2.21zm13.37 12.95h-3.5v-5.5c0-1.31-.02-3-1.82-3-1.82 0-2.1 1.42-2.1 2.9v5.6h-3.5V8.97h3.36v1.54h.05c.47-.89 1.62-1.82 3.31-1.82 3.53 0 4.18 2.32 4.18 5.33v6.19z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82V14.706h-3.377v-3.91h3.377V7.932c0-3.35 1.99-5.187 5.035-5.187 1.442 0 2.86.106 2.86.106v3.496h-1.803c-1.63 0-2.14.77-2.14 2.1v2.47h3.89l-.504 3.91h-3.386V24h5.698c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" />
  </svg>
);

const SocialShare = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const url = `https://www.thoughtschangelives.com${pathname}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url,
  )}&text=${encodeURIComponent(title)}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url,
  )}&title=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;

  return (
    <div className="flex items-center space-x-4">
      <p className="font-bold">Share this post:</p>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transform hover:scale-110 transition-transform duration-200"
      >
        <TwitterIcon />
      </a>
      <a
        href={linkedInShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700 transform hover:scale-110 transition-transform duration-200"
      >
        <LinkedInIcon />
      </a>
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200"
      >
        <FacebookIcon />
      </a>
    </div>
  );
};

export default SocialShare;
