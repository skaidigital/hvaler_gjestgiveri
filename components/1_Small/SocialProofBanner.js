import { Layout } from "./Base";

export const SocialProofBanner = () => {
  return (
    <section id="social-proof" className="bg-secondary_700 py-8 md:py-16 mb-56 lg:mb-96">
      <Layout>
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <TripadvisorRating />
          <GoogleRating />
          <FacebookRating />
        </div>
      </Layout>
    </section>
  );
};

const IconRatingGroup = ({ icon, rating_number, rating_icon }) => {
  return (
    <div className="flex">
      {icon} <span className="mx-8">{rating_number}</span>
      {rating_icon}
    </div>
  );
};

const FacebookRating = () => {
  return (
    <div className="flex items-center text-white">
      {facebook_logo} <span className="mx-8">{star}</span>{" "}
      <span className="font-semibold text-body_large text-white">5 av 5</span>
    </div>
  );
};

const GoogleRating = () => {
  return (
    <div className="flex items-center text-white">
      {google_logo}
      <span className="mx-8 font-semibold text-body_large text-white">4.6</span>
      {google_rating_svg}
    </div>
  );
};

const TripadvisorRating = () => {
  return (
    <div className="flex items-center text-white">
      {tripadvisor_logo}
      <span className="mx-8 font-semibold text-body_large text-white">4.5</span>
      {tripadvisor_rating_svg}
    </div>
  );
};

const google_logo = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="60.000000pt"
    height="30.000000pt"
    viewBox="0 0 1280.000000 640.000000"
    className="pt-4"
    preserveAspectRatio="xMidYMid meet"
  >
    <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
      <path
        d="M1457 5289 c-371 -43 -707 -209 -980 -485 -239 -242 -391 -533 -454
-869 -26 -138 -23 -418 6 -554 47 -222 125 -415 238 -586 267 -406 661 -659
1148 -736 131 -21 418 -16 557 9 549 102 955 442 1122 942 58 176 71 266 70
515 0 127 -5 244 -11 260 l-9 30 -745 0 -744 0 0 -220 0 -220 529 -3 528 -2
-7 -57 c-9 -75 -47 -205 -81 -279 -152 -332 -525 -544 -960 -544 -449 0 -832
227 -1043 620 -142 266 -171 624 -75 932 129 410 479 719 898 793 124 21 328
20 441 -4 182 -38 366 -124 496 -233 38 -32 72 -57 76 -57 13 2 303 306 303
317 0 12 -126 116 -205 169 -310 207 -722 306 -1098 262z"
      />
      <path
        d="M10212 3648 l3 -1543 228 -2 227 -2 0 1544 0 1545 -230 0 -230 0 2
-1542z"
      />
      <path
        d="M4285 4134 c-105 -13 -189 -29 -254 -51 -448 -149 -728 -558 -708
-1033 23 -539 417 -954 949 -999 442 -37 827 165 1026 539 178 335 158 780
-49 1091 -64 94 -189 220 -275 275 -203 130 -481 202 -689 178z m260 -435
c137 -42 278 -162 343 -291 98 -193 96 -448 -3 -637 -225 -428 -832 -414
-1042 24 -87 183 -84 417 6 600 130 262 421 389 696 304z"
      />
      <path
        d="M6525 4129 c-458 -48 -831 -407 -905 -872 -17 -106 -8 -319 19 -419
76 -290 243 -514 488 -654 140 -80 266 -118 437 -133 400 -35 762 135 976 458
159 239 210 585 129 881 -27 100 -105 260 -162 336 -168 221 -439 371 -730
403 -107 12 -136 12 -252 0z m295 -425 c149 -42 288 -160 358 -304 145 -296
65 -658 -183 -836 -286 -203 -685 -107 -848 204 -93 176 -103 402 -28 591 110
275 414 424 701 345z"
      />
      <path
        d="M8797 4129 c-107 -11 -186 -34 -296 -85 -353 -165 -581 -512 -598
-914 -13 -305 91 -576 301 -785 221 -220 512 -328 795 -295 166 19 286 73 407
183 l64 59 0 -115 c0 -204 -27 -325 -95 -432 -196 -307 -679 -310 -908 -6 -25
34 -54 79 -63 101 -10 22 -22 40 -26 40 -5 0 -96 -37 -203 -81 l-195 -82 41
-76 c139 -258 372 -444 644 -512 116 -29 378 -32 491 -6 454 104 704 425 743
952 7 83 11 519 11 1068 l0 927 -220 0 -220 0 0 -85 0 -85 -72 60 c-160 135
-372 194 -601 169z m278 -421 c76 -19 178 -81 247 -149 125 -125 185 -301 176
-513 -8 -176 -58 -300 -166 -417 -145 -157 -364 -213 -565 -145 -241 81 -389
287 -404 561 -24 436 326 761 712 663z"
      />
      <path
        d="M11712 4128 c-293 -41 -572 -243 -709 -513 -126 -246 -155 -571 -77
-843 117 -406 452 -679 885 -723 294 -29 567 59 795 258 52 46 164 171 172
192 2 6 -284 201 -344 234 -6 4 -33 -20 -59 -54 -115 -147 -272 -220 -470
-220 -173 0 -295 50 -398 161 -52 56 -114 147 -106 154 2 1 65 28 139 58 223
92 1255 520 1257 522 7 6 -110 260 -148 326 -62 104 -220 263 -329 329 -176
107 -395 150 -608 119z m293 -410 c51 -13 110 -43 158 -80 39 -31 103 -116 94
-124 -3 -3 -164 -72 -359 -153 -194 -82 -402 -169 -461 -194 -124 -52 -124
-52 -113 46 18 174 120 335 277 437 124 80 263 104 404 68z"
      />
    </g>
  </svg>
);

const tripadvisor_logo = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    fill="white"
    width="32"
    height="32"
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    xmlSpace="preserve"
  >
    <metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
    <g>
      <g>
        <g>
          <path d="M610.5,218.8c27.4,3.9,54.1,10.7,80.6,18.9c46.2,14.2,89.8,34,130.8,59.6c2.9,1.8,6.7,2.9,10,2.9c48.2,0.2,96.3,0.1,144.4,0.2c3.9,0,7.7,0.4,11.6,0.6c0,0.9,0.1,1.3,0,1.6c-2.2,3.5-4.5,6.9-6.8,10.3c-16.3,25.1-30.3,51.3-38.5,80.2c-0.9,3.1-1.1,5.7,1,8.8c42.9,61.6,56.5,129.2,38.6,202c-15.7,63.9-52.3,113.7-108,149c-39.8,25.2-83.7,37.2-130.7,37.5c-19.7,0.1-39.4-2.5-58.6-7.5c-46.9-12.2-87.2-35.6-120.4-71c-4.4-4.7-8.5-9.5-13.2-14.8c-17.5,26.1-34.8,51.9-52.5,78.2c-17.6-26.3-34.6-51.8-51.6-77.1c-1.2,0.6-1.5,0.7-1.7,0.9c-0.4,0.3-0.7,0.7-1,1.1c-40.1,47.4-90.6,76.4-152.1,86.1c-34.2,5.4-68.1,3.5-101.3-5.7c-47.1-12.9-87.1-37.8-119.4-74.4c-31.6-35.8-51.2-77.4-58.6-124.7c-8.4-44.1,1.8-86.7,4.4-97c7.4-30,20.4-57.6,38.2-82.9c1.3-1.8,1.7-5,1.1-7.1c-7.3-26.6-19.8-50.8-34.4-74c-3.7-5.9-8.2-11.4-12.3-17c0-0.6,0-1.3,0-2c0.8,0.1,1.6,0.3,2.4,0.3c49.3,0,98.5,0,147.8-0.1c2.1,0,4.5-0.9,6.4-2.1c34.6-22.2,71.5-39.8,110.3-53.5c27.9-9.9,56.5-17.6,85.6-23.2c28.2-5.4,56.5-9.3,85.1-11.2C517.7,206.2,573.4,213.6,610.5,218.8z M548.8,544.2c0,108.2,87.8,196.6,195.6,196.2C852.6,740,940,654.1,939.9,544.7c-0.1-112.7-91.5-197.5-199.7-195.3C633.4,351.6,549.7,437.7,548.8,544.2z M255.4,348.6c-105.3-0.9-197,86.9-195.2,198.8c1.7,104.3,87.7,192.8,197.4,191.9c107.2-0.9,193.4-88.5,193.6-194.5C451.3,435.9,364.1,348.6,255.4,348.6z M265.1,297.6c59.5,3.6,111.7,24.4,155.8,64.5c44,40,69.8,90,79.2,148.8c9.6-58.1,34.8-107.5,78-147.2c43.3-39.7,94.8-60.5,153.3-64.9c-69.4-30.9-142.6-44-217.9-45.4C427.8,251.6,344.6,264.2,265.1,297.6z" />
          <path d="M744,420.7c67-0.1,121.2,53.8,121.2,120.7c0,67.2-53.3,119.1-116.2,121.5c-70.2,2.7-126.5-53.3-126.4-121.2C622.6,473.1,679.2,419.6,744,420.7z M823,541.8c0-43.7-35.3-79.1-78.7-79.1c-43.8,0-79.5,35.3-79.7,78.8c-0.2,43.3,35.7,79.4,79.2,79.5C787.2,621.1,823,585.3,823,541.8z" />
          <path d="M252.8,420.7c66.9-0.1,121.2,54,121.1,120.9c-0.2,67.7-53.5,118.5-115.3,121.3c-70.5,3.2-127.4-53-127.3-121.3C131.3,472.5,188.3,419.6,252.8,420.7z M331.7,541.5c-0.1-43.9-35.6-78.9-80-78.8c-42.8,0.1-78.6,36.2-78.5,79.1c0.1,43.4,35.9,79.1,79.5,79.2C295.9,621.1,331.8,585,331.7,541.5z" />
          <path d="M744,501.6c22.2,0,40.4,18.2,40.2,40.3c-0.2,22.1-18.1,40-39.9,40c-22.5,0-40.5-17.7-40.5-39.8C703.8,519.3,721.4,501.6,744,501.6z" />
          <path d="M252.6,501.2c22.5,0,40.6,18,40.7,40.4c0.1,22.3-18.2,40.5-40.6,40.6c-23,0-40.7-17.7-40.7-40.8C212,518.9,229.7,501.3,252.6,501.2z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </g>
  </svg>
);

const tripadvisor_rating_svg = (
  <svg width="129" height="24" viewBox="0 0 129 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.9172" cy="12" r="12" fill="white" fillOpacity="1" />
    <circle cx="38.9172" cy="12" r="12" fill="white" fillOpacity="1" />
    <circle cx="64.9172" cy="12" r="12" fill="white" fillOpacity="1" />
    <circle cx="90.9172" cy="12" r="12" fill="white" fillOpacity="1" />
    <circle cx="116.917" cy="12" r="12" fill="white" fillOpacity="1" />
    <circle cx="116.917" cy="12" r="10" fill="#717171" />
    <path
      d="M116.917 12C116.917 17.5228 116.917 17 116.917 22C111.394 22 106.917 17.5228 106.917 12C106.917 6.47715 111.394 2 116.917 2C116.917 7.5 116.917 6.47715 116.917 12Z"
      fill="white"
      fillOpacity="1"
    />
  </svg>
);

const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const google_rating_svg = (
  <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.1589 0.834866L8.10748 7.04035L1.28039 8.03866C0.0560969 8.21677 -0.434556 9.73064 0.453292 10.5977L5.39254 15.4253L4.22431 22.2447C4.01403 23.4774 5.30842 24.4007 6.39253 23.8242L12.5 20.6043L18.6075 23.8242C19.6916 24.396 20.986 23.4774 20.7757 22.2447L19.6075 15.4253L24.5467 10.5977C25.4346 9.73064 24.9439 8.21677 23.7196 8.03866L16.8925 7.04035L13.8411 0.834866C13.2944 -0.271247 11.7103 -0.285308 11.1589 0.834866Z"
      fill="white"
      fillOpacity="1"
    />
    <path
      d="M35.7125 0.834866L32.7832 7.04035L26.2292 8.03866C25.0539 8.21677 24.5828 9.73064 25.4352 10.5977L30.1768 15.4253L29.0553 22.2447C28.8535 23.4774 30.0961 24.4007 31.1368 23.8242L37 20.6043L42.8632 23.8242C43.9039 24.396 45.1465 23.4774 44.9447 22.2447L43.8232 15.4253L48.5648 10.5977C49.4172 9.73064 48.9461 8.21677 47.7708 8.03866L41.2168 7.04035L38.2875 0.834866C37.7626 -0.271247 36.2419 -0.285308 35.7125 0.834866Z"
      fill="white"
      fillOpacity="1"
    />
    <path
      d="M60.6052 0.834866L57.4318 7.04035L50.3316 8.03866C49.0583 8.21677 48.5481 9.73064 49.4714 10.5977L54.6082 15.4253L53.3933 22.2447C53.1746 23.4774 54.5208 24.4007 55.6482 23.8242L62 20.6043L68.3518 23.8242C69.4792 24.396 70.8254 23.4774 70.6067 22.2447L69.3918 15.4253L74.5286 10.5977C75.4519 9.73064 74.9417 8.21677 73.6684 8.03866L66.5682 7.04035L63.3948 0.834866C62.8262 -0.271247 61.1787 -0.285308 60.6052 0.834866Z"
      fill="white"
      fillOpacity="1"
    />
    <path
      d="M85.7125 0.834866L82.7832 7.04035L76.2292 8.03866C75.0539 8.21677 74.5828 9.73064 75.4352 10.5977L80.1768 15.4253L79.0553 22.2447C78.8535 23.4774 80.0961 24.4007 81.1368 23.8242L87 20.6043L92.8632 23.8242C93.9039 24.396 95.1465 23.4774 94.9447 22.2447L93.8232 15.4253L98.5648 10.5977C99.4172 9.73064 98.9461 8.21677 97.7708 8.03866L91.2168 7.04035L88.2875 0.834866C87.7626 -0.271247 86.2419 -0.285308 85.7125 0.834866Z"
      fill="white"
      fillOpacity="1"
    />
    <path
      d="M123.668 8.03953L116.568 7.04062L113.396 0.834844C113.11 0.280312 112.554 0 111.998 0C111.445 0 110.892 0.276562 110.606 0.834844L107.432 7.04016L100.332 8.03813C99.0584 8.21625 98.5481 9.72984 99.4712 10.597L104.608 15.4252L103.392 22.2445C103.219 23.2186 104.024 24 104.925 24C105.164 24 105.41 23.9452 105.647 23.8242L111.999 20.6048L118.35 23.8252C118.586 23.9447 118.831 23.9991 119.069 23.9991C119.972 23.9991 120.778 23.2205 120.605 22.2459L119.391 15.4261L124.528 10.5989C125.452 9.73172 124.942 8.21766 123.668 8.03953ZM117.763 13.8145L116.884 14.6405L117.092 15.8067L118.039 21.1247L113.085 18.6127L111.999 18.0623L112.001 3.19406L114.476 8.03578L115.018 9.09656L116.231 9.26719L121.772 10.0467L117.763 13.8145Z"
      fill="white"
      fillOpacity="1"
    />
  </svg>
);

const facebook_logo = (
  <svg width="96" height="18" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_8_1477)">
      <path
        d="M10.4163 3.78687C8.96264 3.78687 8.52655 4.42647 8.52655 5.85104V8.20595H12.4223L12.0444 12.0436H8.52655V23.6437H3.84581V12.0436H0.705933V8.23502H3.84581V5.93826C3.84581 2.04249 5.41575 0.00738525 9.74761 0.00738525C10.6489 0.00738525 11.5792 0.0655311 12.4805 0.181823V3.78687"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M12.7421 15.4451C12.7421 11.1423 14.7772 7.88614 19.08 7.88614C21.4058 7.88614 22.8304 9.07813 23.5282 10.5899V8.23501H28.0054V23.6727H23.4991V21.3469C22.8595 22.8296 21.3768 23.9925 19.0509 23.9925C14.7772 23.9925 12.713 20.7654 12.713 16.4336L12.7421 15.4451ZM17.4228 16.4917C17.4228 18.7885 18.266 20.3294 20.4464 20.3294C22.3652 20.3294 23.3247 18.9338 23.3247 16.7243V15.1544C23.3247 12.9448 22.3362 11.5493 20.4464 11.5493C18.266 11.5493 17.4228 13.0611 17.4228 15.387V16.4917Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M37.7156 7.88614C39.5181 7.88614 41.2625 8.26409 42.1928 8.93276L41.1462 12.2471C40.1868 11.7819 39.1111 11.5493 38.0354 11.5493C35.506 11.5493 34.4013 13.003 34.4013 15.5032V16.4045C34.4013 18.9048 35.506 20.3584 38.0354 20.3584C39.1111 20.3584 40.1868 20.0968 41.1462 19.6316L42.1928 22.9459C41.2625 23.5855 39.5472 23.9925 37.7156 23.9925C32.2208 23.9925 29.7496 21.0562 29.7496 16.3173V15.5905C29.7496 10.8516 32.2208 7.88614 37.7156 7.88614Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M42.8035 16.5208V15.1544C42.8035 10.7644 45.3037 7.88614 50.3915 7.88614C55.1885 7.88614 57.3108 10.7934 57.3108 15.0962V17.5674H47.4842C47.5714 19.6897 48.5308 20.6201 51.1183 20.6201C52.8045 20.6201 54.4908 20.3003 56.0898 19.6897L56.9329 22.8878C55.7118 23.5274 53.1825 24.0216 50.9439 24.0216C45.013 23.9925 42.8035 21.0562 42.8035 16.5208ZM47.4842 14.4857H53.1243V14.1077C53.1243 12.4215 52.4557 11.0842 50.3915 11.0842C48.2982 11.0842 47.4842 12.4215 47.4842 14.4857Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M74.6384 16.4336C74.6384 20.7364 72.5742 23.9925 68.2714 23.9925C65.9456 23.9925 64.3175 22.8296 63.6779 21.3469V23.6727H59.2588V0.472542L63.9395 0.0655212V10.3864C64.6082 9.01998 66.12 7.91521 68.3005 7.91521C72.5742 7.91521 74.6674 11.1423 74.6674 15.4742L74.6384 16.4336ZM69.9576 15.3579C69.9576 13.1774 69.1145 11.5493 66.8759 11.5493C64.9571 11.5493 63.9395 12.9158 63.9395 15.1253V16.7534C63.9395 18.9629 64.9862 20.3293 66.8759 20.3293C69.1145 20.3293 69.9576 18.7013 69.9576 16.5208V15.3579Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M76.1792 16.3173V15.5323C76.1792 11.0842 78.7086 7.88614 83.8545 7.88614C89.0005 7.88614 91.5299 11.0842 91.5299 15.5323V16.3173C91.5299 20.7654 89.0005 23.9635 83.8545 23.9635C78.7086 23.9635 76.1792 20.7945 76.1792 16.3173ZM86.8782 15.2125C86.8782 13.1774 86.035 11.5493 83.8545 11.5493C81.674 11.5493 80.8309 13.1774 80.8309 15.2125V16.6662C80.8309 18.7013 81.674 20.3294 83.8545 20.3294C86.035 20.3294 86.8782 18.7013 86.8782 16.6662V15.2125Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M93.1287 16.3173V15.5323C93.1287 11.0842 95.658 7.88614 100.804 7.88614C105.95 7.88614 108.479 11.0842 108.479 15.5323V16.3173C108.479 20.7654 105.95 23.9635 100.804 23.9635C95.658 23.9635 93.1287 20.7945 93.1287 16.3173ZM103.828 15.2125C103.828 13.1774 102.984 11.5493 100.804 11.5493C98.6234 11.5493 97.7803 13.1774 97.7803 15.2125V16.6662C97.7803 18.7013 98.6234 20.3294 100.804 20.3294C102.984 20.3294 103.828 18.7013 103.828 16.6662V15.2125Z"
        fill="white"
        fillOpacity="1"
      />
      <path
        d="M114.904 15.5905L119.527 8.20596H124.469L119.643 15.8521L124.673 23.6728H119.701L114.904 16.1138V23.6728H110.253V0.472562L114.904 0.0364685"
        fill="white"
        fillOpacity="1"
      />
    </g>
    <defs>
      <clipPath id="clip0_8_1477">
        <rect width="123.967" height="24" fill="white" transform="translate(0.705933)" />
      </clipPath>
    </defs>
  </svg>
);