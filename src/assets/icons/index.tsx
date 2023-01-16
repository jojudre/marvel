export const SearchIcon = ({ className = "" }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='19'
    height='17'
    viewBox='0 0 19 17'
    fillRule='evenodd'
  >
    <circle cx='6.5' cy='6.5' r='5.5'></circle>
    <path d='M14 14l3.536 3.536'></path>
  </svg>
);

export const Close = ({ className }: { className?: string }) => (
  <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
  >
      <path
          d="M11.9986 0C9.62551 0 7.3057 0.703706 5.33254 2.02213C3.35938 3.34055 1.82149 5.21448 0.913345 7.40694C0.00519879 9.5994 -0.232414 12.0119 0.230555 14.3394C0.693524 16.6669 1.83628 18.8049 3.51432 20.4829C5.19235 22.1609 7.3303 23.3037 9.6578 23.7667C11.9853 24.2296 14.3978 23.992 16.5903 23.0839C18.7827 22.1757 20.6567 20.6378 21.9751 18.6647C23.2935 16.6915 23.9972 14.3717 23.9972 11.9986C23.9972 10.4229 23.6869 8.86268 23.0839 7.40694C22.4809 5.9512 21.5971 4.62848 20.4829 3.51431C19.3687 2.40014 18.046 1.51633 16.5903 0.91334C15.1345 0.310353 13.5743 0 11.9986 0ZM15.8502 14.1464C15.9626 14.2579 16.0519 14.3906 16.1128 14.5368C16.1737 14.683 16.2051 14.8399 16.2051 14.9983C16.2051 15.1567 16.1737 15.3135 16.1128 15.4597C16.0519 15.6059 15.9626 15.7386 15.8502 15.8502C15.7386 15.9626 15.6059 16.0519 15.4597 16.1128C15.3135 16.1737 15.1567 16.2051 14.9983 16.2051C14.8399 16.2051 14.683 16.1737 14.5368 16.1128C14.3906 16.0519 14.2579 15.9626 14.1464 15.8502L11.9986 13.6904L9.85086 15.8502C9.73932 15.9626 9.60661 16.0519 9.4604 16.1128C9.31418 16.1737 9.15735 16.2051 8.99896 16.2051C8.84056 16.2051 8.68373 16.1737 8.53752 16.1128C8.39131 16.0519 8.2586 15.9626 8.14706 15.8502C8.0346 15.7386 7.94533 15.6059 7.88442 15.4597C7.8235 15.3135 7.79214 15.1567 7.79214 14.9983C7.79214 14.8399 7.8235 14.683 7.88442 14.5368C7.94533 14.3906 8.0346 14.2579 8.14706 14.1464L10.3068 11.9986L8.14706 9.85085C7.92112 9.62492 7.79419 9.31848 7.79419 8.99895C7.79419 8.67943 7.92112 8.37299 8.14706 8.14705C8.373 7.92111 8.67943 7.79418 8.99896 7.79418C9.31848 7.79418 9.62492 7.92111 9.85086 8.14705L11.9986 10.3068L14.1464 8.14705C14.3723 7.92111 14.6787 7.79418 14.9983 7.79418C15.3178 7.79418 15.6242 7.92111 15.8502 8.14705C16.0761 8.37299 16.203 8.67943 16.203 8.99895C16.203 9.31848 16.0761 9.62492 15.8502 9.85085L13.6904 11.9986L15.8502 14.1464Z"
          fill="white"
      />
  </svg>
);

export const Plus = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    >
         <path
            d="M5.9938 7.30532H6.4938V6.80532L6.4938 1.7027C6.4938 1.50916 6.6507 1.35226 6.84424 1.35226C7.03778 1.35226 7.19467 1.50916 7.19467 1.7027L7.19468 6.80532V7.30532H7.69468L12.7973 7.30532C12.9908 7.30532 13.1477 7.46221 13.1477 7.65575C13.1477 7.84929 12.9908 8.00619 12.7973 8.00619L12.7973 8.50619L12.7973 8.00619L7.69468 8.00619H7.19468V8.50619L7.19467 13.6088C7.19467 13.8023 7.03778 13.9592 6.84424 13.9592C6.6507 13.9592 6.4938 13.8023 6.4938 13.6088L6.4938 8.50619V8.00619H5.9938L0.891185 8.00619C0.697644 8.00619 0.540748 7.84929 0.540748 7.65575C0.540748 7.46221 0.697643 7.30532 0.891184 7.30532L5.9938 7.30532Z"
            fill="#C2F051"
            stroke="currentColor"
        />
    </svg>
);

export const Urn = ({ className }: { className?: string }) => (
  <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
  >
      <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.00884 1.33891H12.3561C13.0925 1.33891 13.695 1.94142 13.695 2.67782V3.34728C13.695 3.74895 13.4273 4.01674 13.0256 4.01674H0.975364C0.573691 4.01674 0.305908 3.74895 0.305908 3.34728V2.67782C0.305908 1.94142 0.908419 1.33891 1.64482 1.33891H4.9921C4.9921 0.60251 5.59461 0 6.33101 0H7.66993C8.40633 0 9.00884 0.60251 9.00884 1.33891ZM2.38111 5.35564H11.6196C12.0213 5.35564 12.2891 5.69037 12.2221 6.09204L11.151 14.8619C11.084 15.5314 10.4815 16 9.81208 16H4.1217C3.45224 16 2.84973 15.5314 2.78278 14.8619L1.71166 6.09204C1.64471 5.69037 1.97944 5.35564 2.38111 5.35564Z"
          fill="currentColor"
      />
  </svg>
);