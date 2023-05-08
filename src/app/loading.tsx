export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="inline-flex items-center justify-center space-x-2">
        <svg
          className="animate-spin h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
