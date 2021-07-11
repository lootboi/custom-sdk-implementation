import * as React from "react";

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M5.072 13.348l-.813-.892a.97.97 0 01-.192-.313 1.04 1.04 0 010-.739.97.97 0 01.192-.313l7.114-7.806a.875.875 0 01.286-.211.81.81 0 01.674 0c.107.049.204.12.285.21l7.124 7.81c.083.09.148.196.192.313a1.043 1.043 0 010 .74.972.972 0 01-.192.312l-.812.892a.88.88 0 01-.29.21.813.813 0 01-.682-.006.884.884 0 01-.286-.218l-4.206-4.84v11.548a1.01 1.01 0 01-.259.677.84.84 0 01-.62.28h-1.172a.812.812 0 01-.337-.074.877.877 0 01-.285-.209.973.973 0 01-.191-.313 1.041 1.041 0 01-.066-.369V8.49l-4.207 4.848a.877.877 0 01-.285.219.81.81 0 01-.683.005.874.874 0 01-.289-.213z" />
    </svg>
  );
}

export default ArrowUp;
