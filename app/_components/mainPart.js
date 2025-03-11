'use client';

export default function MainPart() {
  return (
    <div className="flex flex-row mt-14">
      <div>
        <h1 className="text-3xl font-bold mb-4">Tasbay Akzhol</h1>
        <p className="text-gray-500">
          Passionate full-stack developer focused on solving algorithmic
          challenges and building scalable solutions.
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="text-gray-500 inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href="https://www.google.com/maps/place/Almaty"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe size-3"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              ></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            Almaty, Kazakhstan, GMT+6
          </a>
        </p>
        <div className="mt-4 flex flex-row space-x-4">
          <a
            href="mailto:akzholtasbay@gmail.com"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail size-4 text-gray-500"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              ></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
          <a
            href="https://leetcode.com/akzhyato"
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-gray-500"
            >
              <path
                fill="currentColor"
                d="M9.883 24a2.09 2.09 0 0 1-1.495-.598l-3.721-3.78a2.093 2.093 0 1 1 2.991-2.928l2.815 2.86 7.521-7.7c.008-.008.015-.016.022-.023l-7.51-7.639-2.831 2.855a2.093 2.093 0 0 1-2.991-2.928L8.371.612a2.089 2.089 0 0 1 2.995.015l9.015 9.16a2.093 2.093 0 0 1-.011 2.92l-9.015 9.23a2.09 2.09 0 0 1-1.472.603Zm12.487-1.182a2.09 2.09 0 0 1-1.495-.598 2.093 2.093 0 0 1 .011-2.928A8.776 8.776 0 0 0 24 12.006a8.775 8.775 0 0 0-3.106-6.288 2.093 2.093 0 1 1 2.981-2.939A12.94 12.94 0 0 1 28 12.006c0 3.64-1.423 7.064-4.006 9.636a2.09 2.09 0 0 1-1.471.598Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/aqzsha"
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-500"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-gray-500 flex justify-center items-center mt-3 ml-36 border-60 h-24 w-24 border-solid text-center border-gray-100 bg-gray-100 rounded-lg">
        TA
      </div>
    </div>
  );
}
