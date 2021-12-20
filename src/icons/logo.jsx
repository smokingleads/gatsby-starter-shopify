import * as React from "react"

function Logo(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Logo</title>
      <path
        d="M1190 1045 l0 -175 30 0 c30 0 30 1 30 55 0 30 2 55 4 55 2 0 28 -25
58 -56 48 -49 57 -55 88 -52 l35 3 -59 62 c-66 70 -66 62 8 141 l40 42 -41 0
c-37 0 -46 -5 -80 -45 -20 -25 -41 -45 -45 -45 -4 0 -8 43 -8 95 l0 95 -30 0
-30 0 0 -175z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Logo
