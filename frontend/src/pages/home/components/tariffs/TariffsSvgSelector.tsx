import React from "react";

type Props = { id: string };

const TariffsSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "beginner":
      return (
        <svg
          width="93"
          height="84"
          viewBox="0 0 93 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.702 71.154C32.2547 71.6516 32.8806 72.0612 33.5577 72.3686C33.7444 72.4589 33.9385 72.5447 34.1402 72.626C35.8165 73.3118 37.6232 73.6201 39.432 73.529H39.5223C40.3319 73.4854 41.1196 73.2502 41.8206 72.8427C42.3188 72.5402 42.6945 72.0718 42.8816 71.5198C42.9569 71.3042 43.0569 71.0982 43.1796 70.9057C43.5637 70.3353 44.0291 69.8241 44.5613 69.3886C45.7307 68.3636 47.3923 67.2439 49.2661 65.8983C54.3999 62.223 61.1411 56.868 63.9224 47.1287C66.5864 37.8093 64.97 25.3112 53.3343 21.4913L53.0634 21.4056C41.5226 17.7573 30.1488 23.311 26.5276 36.1341C23.0644 48.3929 29.8553 59.0217 30.9615 65.5145C31.1979 66.5864 31.1653 67.7002 30.8667 68.7565L30.8396 68.8513C30.6093 69.6685 30.975 70.4632 31.702 71.154Z"
            fill="#FFAE00"
          />
          <path
            opacity="0.75"
            d="M33.1334 74.5495C33.1334 74.5495 39.6578 47.8196 35.2555 45.6523C30.8532 43.485 30.2572 50.023 33.2101 51.8742C37.1835 54.3711 44.0918 55.2109 45.2161 50.5196C46.092 46.8669 41.5091 45.878 40.2854 49.6572C39.4592 52.2219 41.0033 54.5788 44.322 55.369C49.9389 56.701 53.8852 54.9175 52.1378 50.8538C51.1806 48.6278 48.2231 49.5669 47.5955 52.4025C46.9679 55.238 38.809 76.1886 38.809 76.1886"
            stroke="white"
            stroke-width="3.06"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.6076 82.8756L33.156 82.7401C31.4056 82.2391 29.9257 81.0635 29.0418 79.4717C28.1578 77.88 27.9422 76.0023 28.4422 74.2516C28.4422 74.2516 29.8871 65.8713 30.9346 65.5146C31.9821 65.1579 44.3447 68.7204 44.6156 69.4248C44.8865 70.1292 42.1187 78.1572 42.1187 78.1572C41.8712 79.0268 41.4545 79.8391 40.8924 80.5473C40.3303 81.2555 39.6339 81.8457 38.8431 82.2841C38.0523 82.7225 37.1828 83.0004 36.2843 83.1019C35.3859 83.2034 34.4762 83.1265 33.6076 82.8756Z"
            fill="#3B3B4C"
          />
          <path
            d="M28.848 69.7058L28.8799 69.5143C28.9679 68.9854 29.468 68.6281 29.9969 68.7161L43.8041 71.0142C44.3329 71.1023 44.6903 71.6024 44.6023 72.1312L44.5704 72.3228C44.4824 72.8516 43.9823 73.209 43.4534 73.121L29.6462 70.8228C29.1174 70.7348 28.76 70.2347 28.848 69.7058Z"
            fill="#AAAAAF"
          />
          <path
            d="M28.0508 72.7803L28.0826 72.5888C28.1705 72.0599 28.6705 71.7023 29.1993 71.7902L43.0073 74.0835C43.5362 74.1713 43.8938 74.6713 43.8059 75.2002L43.7741 75.3917C43.6863 75.9206 43.1863 76.2782 42.6574 76.1903L28.8494 73.897C28.3205 73.8091 27.963 73.3092 28.0508 72.7803Z"
            fill="#AAAAAF"
          />
          <path
            d="M27.317 75.8776L27.3489 75.686C27.4369 75.1571 27.937 74.7998 28.4659 74.8878L42.2731 77.1859C42.8019 77.274 43.1593 77.7741 43.0713 78.3029L43.0394 78.4945C42.9514 79.0233 42.4513 79.3807 41.9224 79.2926L28.1153 76.9945C27.5864 76.9065 27.229 76.4064 27.317 75.8776Z"
            fill="#AAAAAF"
          />
          <g opacity="0.65">
            <path
              opacity="0.65"
              d="M41.2834 29.5917C42.1187 29.4021 42.7283 29.1854 43.2791 29.0499C43.7189 28.9229 44.1762 28.8665 44.6337 28.8828C44.8889 28.9048 45.146 28.8762 45.3903 28.7988C45.6345 28.7214 45.8611 28.5966 46.0571 28.4316C46.2531 28.2667 46.4147 28.0647 46.5326 27.8372C46.6506 27.6098 46.7226 27.3614 46.7445 27.1061C46.7665 26.8509 46.7379 26.5938 46.6605 26.3495C46.5831 26.1053 46.4583 25.8787 46.2933 25.6827C46.1283 25.4867 45.9264 25.3251 45.6989 25.2071C45.4715 25.0892 45.2231 25.0172 44.9678 24.9953H44.9181C44.0407 24.9504 43.1619 25.0511 42.3174 25.2933C41.5814 25.4874 40.9267 25.7177 40.4661 25.8215H40.439C39.9509 25.9449 39.5302 26.2538 39.2665 26.6826C39.0027 27.1114 38.9167 27.6262 39.0267 28.1175C39.1367 28.6087 39.4341 29.0377 39.8556 29.313C40.277 29.5883 40.7893 29.6883 41.2834 29.5917Z"
              fill="white"
            />
            <path
              opacity="0.65"
              d="M33.26 40.1346C33.457 38.528 33.9033 36.962 34.5829 35.493C35.2873 34.0538 36.2378 32.7489 37.3914 31.637C37.7506 31.2855 37.9556 30.8057 37.9611 30.3032C37.9666 29.8006 37.7722 29.3164 37.4208 28.9572C37.0693 28.5979 36.5895 28.393 36.0869 28.3875C35.5844 28.382 35.1002 28.5764 34.741 28.9278C33.2639 30.3339 32.0418 31.9853 31.1288 33.8088C30.2637 35.6323 29.6864 37.5789 29.4176 39.5792C29.353 40.0821 29.4886 40.5903 29.7952 40.9941C30.1018 41.3979 30.5548 41.665 31.0566 41.7379C31.5584 41.8108 32.0687 41.6835 32.4775 41.3836C32.8863 41.0837 33.1608 40.6351 33.2419 40.1346H33.26Z"
              fill="white"
            />
          </g>
          <path
            opacity="0.12"
            d="M49.2708 65.8894C54.4045 62.214 61.1457 56.859 63.9271 47.1197C66.5911 37.8003 64.9746 25.3022 53.339 21.4824L53.068 21.3966C64.4689 44.8756 59.8138 51.1427 49.2708 65.8894Z"
            fill="#E84E19"
          />
          <path
            d="M70.0902 50.3752L91.5374 52.2806C91.7045 52.2997 91.8723 52.2518 92.0039 52.1472C92.1356 52.0426 92.2204 51.89 92.2395 51.723C92.2587 51.5559 92.2107 51.3881 92.1061 51.2564C92.0016 51.1248 91.849 51.04 91.6819 51.0209L70.3611 48.0318C70.0603 48.0071 69.7614 48.0983 69.5256 48.2868C69.2898 48.4753 69.135 48.7468 69.0928 49.0457C69.0507 49.3446 69.1245 49.6484 69.299 49.8947C69.4735 50.141 69.7356 50.3113 70.0315 50.3707L70.0902 50.3752Z"
            fill="white"
          />
          <path
            d="M71.6073 34.6487L91.8038 29.3614C91.9307 29.3274 92.0391 29.245 92.1058 29.1318C92.1725 29.0187 92.1922 28.8839 92.1605 28.7564C92.1294 28.6342 92.0526 28.5286 91.9459 28.4614C91.8392 28.3941 91.7107 28.3704 91.5871 28.3952L71.0835 32.3505C70.7764 32.4104 70.5056 32.5898 70.3307 32.8493C70.1559 33.1089 70.0913 33.4272 70.1512 33.7344C70.211 34.0416 70.3905 34.3123 70.65 34.4872C70.9096 34.6621 71.2279 34.7267 71.535 34.6668L71.6073 34.6487Z"
            fill="white"
          />
          <path
            d="M65.6563 21.4914L75.6711 10.542C75.7573 10.4564 75.806 10.34 75.8064 10.2185C75.8068 10.097 75.759 9.98032 75.6733 9.8941C75.5877 9.80788 75.4714 9.75922 75.3499 9.75879C75.2283 9.75837 75.1116 9.80624 75.0254 9.89186L63.9948 19.8253C63.7805 20.0395 63.6565 20.3278 63.6485 20.6307C63.6405 20.9336 63.749 21.228 63.9516 21.4533C64.1543 21.6785 64.4357 21.8174 64.7378 21.8413C65.0398 21.8652 65.3395 21.7723 65.5751 21.5817C65.6061 21.5554 65.6334 21.525 65.6563 21.4914Z"
            fill="white"
          />
          <path
            d="M53.3749 15.098L55.3886 0.960875C55.3981 0.893107 55.3939 0.824116 55.3761 0.75803C55.3584 0.691943 55.3275 0.630105 55.2854 0.576184C55.2433 0.522263 55.1907 0.477366 55.1309 0.444165C55.0711 0.410964 55.0052 0.39013 54.9371 0.382916C54.8111 0.365915 54.6832 0.39619 54.5781 0.467893C54.4731 0.539595 54.3983 0.647653 54.3682 0.77123L51.0405 14.6555C50.9837 14.9542 51.0441 15.2633 51.2091 15.5187C51.3742 15.7741 51.6312 15.9562 51.9269 16.027C52.2226 16.0979 52.5342 16.0522 52.7971 15.8994C53.06 15.7465 53.254 15.4984 53.3388 15.2063C53.3527 15.1709 53.3648 15.1347 53.3749 15.098Z"
            fill="white"
          />
          <path
            d="M41.4232 14.4115L38.5516 0.414338C38.5318 0.286205 38.462 0.171166 38.3574 0.0945342C38.2528 0.017902 38.1221 -0.014046 37.994 0.00571282C37.8658 0.0254717 37.7508 0.0953291 37.6741 0.199904C37.5975 0.30448 37.5656 0.435214 37.5853 0.563347L39.0889 14.7817C39.1218 15.0931 39.2771 15.3786 39.5205 15.5755C39.764 15.7723 40.0756 15.8644 40.387 15.8315C40.6983 15.7986 40.9839 15.6433 41.1807 15.3998C41.3776 15.1564 41.4697 14.8447 41.4368 14.5334C41.4349 14.4925 41.4304 14.4518 41.4232 14.4115Z"
            fill="white"
          />
          <path
            d="M28.5278 19.771L16.2555 8.82613C16.1675 8.74051 16.049 8.69336 15.9263 8.69505C15.8035 8.69674 15.6864 8.74714 15.6007 8.83516C15.5151 8.92318 15.468 9.04161 15.4697 9.16439C15.4714 9.28717 15.5218 9.40425 15.6098 9.48987L26.8978 21.4597C27.0039 21.5726 27.1313 21.6636 27.2726 21.7273C27.4139 21.791 27.5663 21.8263 27.7212 21.8312C27.8761 21.836 28.0305 21.8102 28.1754 21.7554C28.3204 21.7006 28.4532 21.6177 28.5662 21.5116C28.6791 21.4055 28.77 21.2781 28.8338 21.1368C28.8975 20.9955 28.9328 20.8431 28.9377 20.6882C28.9425 20.5332 28.9167 20.3789 28.8619 20.2339C28.807 20.0889 28.7242 19.9562 28.6181 19.8432C28.5775 19.8161 28.5503 19.7935 28.5278 19.771Z"
            fill="white"
          />
          <path
            d="M22.9562 32.3911L0.511185 24.2637C0.411623 24.2505 0.310457 24.2708 0.223749 24.3215C0.137041 24.3722 0.0697384 24.4503 0.0324383 24.5436C-0.00486374 24.6368 -0.00999641 24.7399 0.0178318 24.8364C0.04566 24.9329 0.104822 25.0174 0.186049 25.0764L22.0848 34.5584C22.3683 34.6622 22.6808 34.6538 22.9583 34.5347C23.2357 34.4157 23.4572 34.195 23.5773 33.918C23.6973 33.6409 23.7069 33.3284 23.604 33.0446C23.5011 32.7607 23.2936 32.5269 23.024 32.3911H22.9562Z"
            fill="white"
          />
        </svg>
      );
    case "pro":
      return (
        <svg
          width="120"
          height="127"
          viewBox="0 0 120 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.6165 75.6203C96.7437 55.6542 95.3395 37.5132 87.4802 35.1013C79.6208 32.6894 68.2824 46.9199 62.1551 66.886C56.0279 86.8521 57.4321 104.993 65.2915 107.405C73.1508 109.817 84.4892 95.5864 90.6165 75.6203Z"
            fill="#303646"
          />
          <path
            d="M88.2754 74.9027C94.4027 54.9366 93.4595 36.9371 86.1689 34.6998C78.8782 32.4624 68.0009 46.8344 61.8736 66.8005C55.7464 86.7666 56.6895 104.766 63.9802 107.003C71.2708 109.241 82.1482 94.8688 88.2754 74.9027Z"
            fill="white"
          />
          <path
            d="M86.0745 74.2278C91.49 56.581 90.6566 40.6725 84.213 38.695C77.7694 36.7176 68.1557 49.4201 62.7402 67.067C57.3247 84.7138 58.1581 100.622 64.6018 102.6C71.0454 104.577 80.659 91.8747 86.0745 74.2278Z"
            fill="#CD2B31"
          />
          <path
            d="M83.3356 73.3833C87.7442 59.0178 87.0655 46.0673 81.8199 44.4575C76.5743 42.8477 68.748 53.1883 64.3395 67.5538C59.931 81.9193 60.6096 94.8698 65.8552 96.4796C71.1009 98.0894 78.9271 87.7488 83.3356 73.3833Z"
            fill="white"
          />
          <path
            d="M81.5574 72.0846C85.1436 60.4188 84.5972 49.9002 80.3371 48.5906C76.077 47.2811 69.7164 55.6764 66.1303 67.3422C62.5441 79.008 63.0904 89.5266 67.3505 90.8362C71.6106 92.1458 77.9713 83.7504 81.5574 72.0846Z"
            fill="#CD2B31"
          />
          <path
            d="M77.8266 71.6957C80.2212 63.8928 79.8522 56.8583 77.0025 55.9838C74.1528 55.1093 69.9015 60.7259 67.5069 68.5288C65.1123 76.3317 65.4813 83.3661 68.331 84.2406C71.1807 85.1152 75.432 79.4986 77.8266 71.6957Z"
            fill="white"
          />
          <path
            d="M75.9793 70.3707C77.1889 66.4357 77.0042 62.8875 75.5667 62.4456C74.1292 62.0037 71.9832 64.8354 70.7735 68.7705C69.5639 72.7055 69.7486 76.2537 71.1861 76.6956C72.6237 77.1375 74.7696 74.3058 75.9793 70.3707Z"
            fill="#CD2B31"
          />
          <path
            d="M68.6614 64.8254C67.7974 65.9227 65.202 68.8881 65.2588 69.3899C65.3156 69.8917 68.6723 68.8905 68.8377 68.0297C69.003 67.1689 68.6614 64.8254 68.6614 64.8254Z"
            fill="#BAB3B4"
          />
          <path
            d="M6.88568 36.4289C7.20314 36.3044 11.0716 34.912 11.945 35.1055C12.5373 35.2707 13.0784 35.5826 13.5184 36.0123C11.0141 37.2692 9.46872 38.0427 8.32803 37.4035C7.73513 37.0688 7.28534 36.8503 7.03305 36.7035C6.78077 36.5566 6.73298 36.4913 6.88568 36.4289Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M6.88573 36.4289C7.20319 36.3044 11.0717 34.912 11.945 35.1055C11.7007 35.615 8.40576 37.344 7.03311 36.7035C6.80354 36.5657 6.73304 36.4913 6.88573 36.4289Z"
            fill="#1F1F39"
          />
          <path
            d="M5.37743 35.5262C5.69012 35.3991 9.5634 34.0093 10.432 34.2002C11.0369 34.374 11.5871 34.7002 12.0297 35.1475C9.52542 36.4044 7.96126 37.1557 6.81612 36.5019C6.22576 36.1625 5.77713 35.9476 5.52485 35.8008C5.27256 35.6539 5.22362 35.585 5.37743 35.5262Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M5.37733 35.5262C5.69003 35.3992 9.5633 34.0093 10.4319 34.2003C10.1876 34.7098 8.37349 35.9124 5.52475 35.8008C5.28787 35.6653 5.22352 35.585 5.37733 35.5262Z"
            fill="#1F1F39"
          />
          <path
            d="M3.66917 34.4526C4.3295 34.4106 4.97865 34.2617 5.59124 34.0117L5.6168 34.0039C6.91223 33.498 8.28761 33.0317 8.72373 33.1266C9.37431 33.3376 9.96181 33.7079 10.4328 34.2038C7.92962 35.4643 6.25412 36.0858 5.10676 35.4247C4.5164 35.0852 4.06777 34.8704 3.81548 34.7235L3.73698 34.6755C3.56572 34.5719 3.53364 34.5058 3.66917 34.4526Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M3.66917 34.4526C4.3295 34.4106 4.97865 34.2617 5.59124 34.0117L5.6168 34.0039C6.94337 33.5085 8.33892 33.056 8.77504 33.151C8.53077 33.6605 6.06492 34.7419 3.86424 34.7526L3.7381 34.6792C3.56573 34.5719 3.53364 34.5058 3.66917 34.4526Z"
            fill="#1F1F39"
          />
          <path
            d="M1.97273 33.4038C2.29019 33.2793 6.15866 31.8869 7.0309 32.0767C7.67245 32.2833 8.25369 32.6439 8.72382 33.1268C6.21951 34.3837 4.55657 35.0333 3.41509 34.3784C2.82219 34.0437 2.37239 33.8252 2.12011 33.6784C1.86782 33.5315 1.81893 33.4625 1.97273 33.4038Z"
            fill="white"
          />
          <path
            opacity="0.23"
            d="M1.97279 33.4037C2.29025 33.2792 6.15871 31.8868 7.03095 32.0766C6.78668 32.5861 3.99777 32.9075 2.12016 33.6783C1.89059 33.5405 1.81898 33.4625 1.97279 33.4037Z"
            fill="#1F1F39"
          />
          <path
            d="M5.87682 31.118C5.97092 31.3668 6.12995 31.5859 6.33735 31.7525C7.54153 32.8235 67.377 68.977 67.5282 69.1985C67.5393 69.2351 67.607 69.2344 67.6885 69.2136C67.8021 69.1837 67.9102 69.136 68.0088 69.0723C68.5097 68.7762 69.1232 68.1025 68.4539 67.5035C68.3937 67.4487 68.3292 67.3989 68.2609 67.3546C68.2609 67.3546 8.71744 30.166 7.54141 30.0407C6.60879 29.9411 5.64575 30.3978 5.87682 31.118Z"
            fill="#543237"
          />
          <path
            d="M11.8057 28.3085C11.8367 28.6465 12.3511 32.7262 12.9164 33.4166C13.3326 33.871 13.8568 34.2128 14.4405 34.4103C14.4297 31.6187 14.4263 29.875 13.3299 29.1584C12.761 28.7845 12.3655 28.4816 12.1194 28.3289C11.8733 28.1762 11.7872 28.1425 11.8057 28.3085Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M11.8056 28.3084C11.8365 28.6464 12.3509 32.7261 12.9163 33.4165C13.2614 32.9761 13.3082 29.2448 12.1159 28.3178C11.8855 28.1643 11.787 28.1424 11.8056 28.3084Z"
            fill="#1F1F39"
          />
          <path
            d="M10.3141 27.3688C10.3451 27.7067 10.8594 31.7864 11.4248 32.4768C11.8537 32.9364 12.3935 33.2781 12.9923 33.4692C12.9816 30.6777 12.9383 28.9341 11.8361 28.2114C11.2672 27.8374 10.8716 27.5346 10.6255 27.3818C10.3794 27.2291 10.2967 27.2064 10.3141 27.3688Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M10.3142 27.3687C10.3451 27.7066 10.8595 31.7863 11.4248 32.4768C11.77 32.0364 12.0159 29.8655 10.6233 27.3745C10.3952 27.2283 10.2967 27.2063 10.3142 27.3687Z"
            fill="#1F1F39"
          />
          <path
            d="M8.58213 26.3345C8.84588 26.9405 9.00842 27.5857 9.06328 28.2443C9.06328 28.2443 9.06884 28.2626 9.07218 28.2735C9.20847 29.6535 9.41451 31.092 9.70013 31.4403C10.1826 31.9236 10.7778 32.279 11.4321 32.4746C11.4214 29.683 11.2136 27.8976 10.1114 27.1749C9.54138 26.7973 9.14584 26.4944 8.90452 26.3442L8.82603 26.2962C8.64158 26.1886 8.56912 26.1867 8.58213 26.3345Z"
            fill="white"
          />
          <path
            opacity="0.09"
            d="M8.58212 26.3344C8.84586 26.9404 9.0084 27.5856 9.06327 28.2442C9.06327 28.2442 9.06882 28.2625 9.07216 28.2735C9.23196 29.6782 9.46072 31.1258 9.74523 31.4704C10.0904 31.0301 9.93218 28.3313 8.94484 26.3718L8.82379 26.2888C8.64156 26.1886 8.56911 26.1866 8.58212 26.3344Z"
            fill="#1F1F39"
          />
          <path
            d="M6.87687 25.2962C6.90892 25.6378 7.4233 29.7175 7.99121 30.4031C8.4647 30.8838 9.04903 31.2408 9.69285 31.4426C9.6821 28.6511 9.49739 26.8627 8.40247 26.1377C7.83357 25.7638 7.43803 25.4609 7.19194 25.3082C6.94585 25.1554 6.86307 25.1327 6.87687 25.2962Z"
            fill="white"
          />
          <path
            opacity="0.23"
            d="M6.87686 25.2961C6.90891 25.6377 7.4233 29.7173 7.99121 30.403C8.33636 29.9626 7.35483 27.3266 7.19082 25.3044C6.96158 25.1545 6.86306 25.1326 6.87686 25.2961Z"
            fill="#1F1F39"
          />
          <path
            opacity="0.47"
            d="M5.87695 31.118C5.97105 31.3668 6.13008 31.5859 6.33748 31.7525C7.54166 32.8235 67.3771 68.977 67.5283 69.1985C67.5725 69.265 67.7794 69.21 68.009 69.0723C60.9999 64.5767 11.4409 34.2885 5.87695 31.118Z"
            fill="#1F1F39"
          />
          <path
            d="M65.1091 69.6191C65.0475 70.3486 72.6475 71.6939 73.2419 71.2855L73.2675 71.2777C73.6737 70.8148 69.0491 64.7474 68.6649 64.8363C68.2807 64.9253 68.1035 67.0593 67.5563 68.0562L67.538 68.0618C66.9889 69.0393 65.1481 69.1042 65.1091 69.6191Z"
            fill="white"
          />
          <path
            opacity="0.22"
            d="M65.109 69.6191C65.0474 70.3485 72.6474 71.6938 73.2418 71.2854C71.0032 69.5309 68.8186 68.3868 67.539 68.0654C66.9888 69.0393 65.148 69.1041 65.109 69.6191Z"
            fill="#1F1F39"
          />
        </svg>
      );
    case "business":
      return (
        <svg
          width="96"
          height="81"
          viewBox="0 0 96 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.7033 14.9271C94.2325 18.3403 97.4144 23.9166 95.3648 27.5895C93.8307 30.3046 76.0912 65.6497 67.0449 71.7658C56.4118 78.9655 13.0675 80.045 12.1827 80.0897C9.86533 80.2033 1.07474 67.2812 0.307693 58.9857C-0.366013 51.7535 3.09989 44.6066 3.33528 43.5636C3.57067 42.5205 25.4904 46.4045 25.4904 46.4045L42.3898 67.3542L89.7033 14.9271Z"
            fill="#3B3B4D"
          />
          <path
            d="M2.08156 43.1739C-5.58892 64.7892 10.2269 77.8534 12.7188 77.6707C41.0508 75.7592 55.2514 74.3185 61.6272 71.372C68.0031 68.4256 97.7475 31.7696 93.5632 20.5115C90.2799 11.6316 69.0907 0 69.0907 0C69.0907 0 55.6288 39.9839 46.9397 40.406C38.2505 40.8281 3.6806 38.673 2.08156 43.1739Z"
            fill="#545466"
          />
          <path
            d="M69.7559 4.69968C75.3078 10.1055 91.0059 18.3564 90.8598 22.2322C90.3688 33.88 67.0286 64.7729 65.7623 62.5327C64.4961 60.2924 50.673 41.7087 52.4344 40.1625C57.7104 35.4831 69.7559 4.69968 69.7559 4.69968Z"
            fill="white"
          />
          <path
            d="M47.0975 43.186C51.509 55.3857 60.4904 63.5675 58.9725 65.5075C57.4547 67.4474 29.013 73.1333 27.1543 71.1325C25.2955 69.1317 14.707 43.9774 15.5998 43.1291C16.4927 42.2809 47.0975 43.186 47.0975 43.186Z"
            fill="#3B3B4D"
          />
          <path
            d="M15.9085 52.5773C17.3005 59.1763 21.2453 63.9044 19.6301 65.1138C18.0148 66.3233 9.04562 68.1577 8.18523 67.3095C7.32484 66.4613 3.60327 56.7575 5.17795 53.1049C5.83542 51.5546 14.7599 47.1227 15.9085 52.5773Z"
            fill="#3B3B4D"
          />
        </svg>
      );
    case "yes":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="20" height="20" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_3_32817" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_3_32817"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      );
    default:
      return null;
  }
};

export default TariffsSvgSelector;