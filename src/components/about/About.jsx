
import './about.css'
import { Description } from './Description'
import { Interests } from './Interests'

export const About = () => {
    return (
        <>
            <section className="about section" id='about'>
                <h2 className="section__title">Sobre mi</h2>
                <span className="section__subtitle">Informacion</span>
                <div className="about__container container grid">
                    <div className="about__content grid">

                        <div className="about__image">
                            <svg  viewBox="0 0 419 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="graduacion" clipPath="url(#clip0_19_3)">
                                    <path id="Vector" d="M267.008 227.899V301.181H83.5834C62.6847 301.181 45.6812 284.744 45.6812 264.54C45.6812 244.337 62.6846 227.899 83.5834 227.899H267.008Z" fill="#F2F2F2" />
                                    <path id="Vector_2" d="M271.513 300.618C271.513 301.365 271.216 302.082 270.688 302.61C270.16 303.139 269.444 303.436 268.697 303.436H80.3163C70.085 303.436 60.2727 299.368 53.0381 292.127C45.8034 284.885 41.739 275.063 41.739 264.822C41.739 254.581 45.8034 244.76 53.0381 237.518C60.2727 230.277 70.085 226.208 80.3163 226.208H268.697C269.444 226.208 270.16 226.505 270.688 227.034C271.217 227.562 271.513 228.279 271.513 229.027C271.513 229.774 271.217 230.491 270.688 231.02C270.16 231.548 269.444 231.845 268.697 231.845H80.3163C71.5786 231.845 63.1988 235.32 57.0203 241.504C50.8418 247.688 47.3707 256.076 47.3707 264.822C47.3707 273.568 50.8418 281.956 57.0203 288.14C63.1988 294.325 71.5786 297.799 80.3163 297.799H268.697C269.444 297.8 270.16 298.097 270.688 298.625C271.216 299.154 271.513 299.87 271.513 300.618Z" fill="#6C63FF" />
                                    <path id="Vector_3" d="M267.008 244.811H69.8976C69.7483 244.811 69.605 244.751 69.4994 244.646C69.3938 244.54 69.3345 244.396 69.3345 244.247C69.3345 244.097 69.3938 243.954 69.4994 243.848C69.605 243.743 69.7483 243.683 69.8976 243.683H267.008C267.157 243.683 267.3 243.743 267.406 243.848C267.512 243.954 267.571 244.097 267.571 244.247C267.571 244.396 267.512 244.54 267.406 244.646C267.3 244.751 267.157 244.811 267.008 244.811Z" fill="#CCCCCC" />
                                    <path id="Vector_4" d="M267.008 258.34H69.8976C69.7483 258.34 69.605 258.28 69.4994 258.175C69.3938 258.069 69.3345 257.925 69.3345 257.776C69.3345 257.626 69.3938 257.483 69.4994 257.377C69.605 257.272 69.7483 257.212 69.8976 257.212H267.008C267.157 257.212 267.3 257.272 267.406 257.377C267.512 257.483 267.571 257.626 267.571 257.776C267.571 257.925 267.512 258.069 267.406 258.175C267.3 258.28 267.157 258.34 267.008 258.34Z" fill="#CCCCCC" />
                                    <path id="Vector_5" d="M267.008 271.869H69.8976C69.7483 271.869 69.605 271.809 69.4994 271.704C69.3938 271.598 69.3345 271.454 69.3345 271.305C69.3345 271.155 69.3938 271.012 69.4994 270.906C69.605 270.801 69.7483 270.741 69.8976 270.741H267.008C267.157 270.741 267.3 270.801 267.406 270.906C267.512 271.012 267.571 271.155 267.571 271.305C267.571 271.454 267.512 271.598 267.406 271.704C267.3 271.809 267.157 271.869 267.008 271.869Z" fill="#CCCCCC" />
                                    <path id="Vector_6" d="M267.008 285.398H69.8976C69.7483 285.398 69.605 285.338 69.4994 285.233C69.3938 285.127 69.3345 284.983 69.3345 284.834C69.3345 284.684 69.3938 284.541 69.4994 284.435C69.605 284.33 69.7483 284.27 69.8976 284.27H267.008C267.157 284.27 267.3 284.33 267.406 284.435C267.512 284.541 267.571 284.684 267.571 284.834C267.571 284.983 267.512 285.127 267.406 285.233C267.3 285.338 267.157 285.398 267.008 285.398Z" fill="#CCCCCC" />
                                    <path id="Vector_7" d="M408.768 241.694L362.833 298.757L220.004 183.563C203.731 170.438 200.794 146.96 213.458 131.228C226.122 115.496 249.666 113.375 265.939 126.5L408.768 241.694Z" fill="#F2F2F2" />
                                    <path id="Vector_8" d="M366.695 301.148C366.226 301.729 365.546 302.101 364.803 302.181C364.061 302.261 363.317 302.043 362.735 301.574L216.047 183.267C208.08 176.842 202.989 167.512 201.895 157.329C200.801 147.147 203.792 136.947 210.212 128.972C216.631 120.997 225.952 115.902 236.125 114.807C246.297 113.711 256.488 116.706 264.455 123.131L411.144 241.438C411.432 241.67 411.672 241.957 411.849 242.282C412.026 242.607 412.138 242.963 412.178 243.332C412.218 243.7 412.184 244.072 412.08 244.427C411.976 244.783 411.803 245.114 411.571 245.402C411.339 245.691 411.052 245.93 410.728 246.108C410.403 246.285 410.046 246.397 409.679 246.436C409.311 246.476 408.939 246.442 408.584 246.338C408.229 246.233 407.898 246.06 407.61 245.828L260.922 127.521C257.553 124.802 253.682 122.773 249.53 121.552C245.378 120.331 241.026 119.94 236.723 120.403C232.421 120.865 228.251 122.172 224.453 124.247C220.654 126.323 217.302 129.128 214.587 132.501C211.872 135.874 209.847 139.749 208.628 143.905C207.41 148.062 207.021 152.418 207.485 156.725C207.949 161.031 209.255 165.204 211.331 169.006C213.406 172.807 216.209 176.161 219.58 178.878L366.269 297.185C366.85 297.654 367.221 298.335 367.301 299.078C367.381 299.821 367.163 300.565 366.695 301.148Z" fill="#CCCCCC" />
                                    <path id="Vector_9" d="M398.168 254.862L244.682 131.073C244.624 131.027 244.576 130.97 244.541 130.905C244.505 130.84 244.483 130.768 244.475 130.695C244.467 130.621 244.474 130.547 244.495 130.476C244.516 130.405 244.55 130.338 244.597 130.281C244.643 130.223 244.7 130.175 244.765 130.14C244.83 130.104 244.901 130.082 244.975 130.074C245.048 130.066 245.123 130.073 245.194 130.094C245.265 130.114 245.331 130.149 245.389 130.196L398.874 253.984C398.932 254.031 398.98 254.088 399.016 254.153C399.051 254.218 399.073 254.29 399.081 254.363C399.089 254.437 399.083 254.511 399.062 254.582C399.041 254.654 399.007 254.72 398.96 254.778C398.914 254.835 398.856 254.883 398.791 254.919C398.726 254.954 398.655 254.976 398.581 254.984C398.508 254.992 398.433 254.985 398.362 254.965C398.291 254.944 398.225 254.909 398.168 254.862Z" fill="#CCCCCC" />
                                    <path id="Vector_10" d="M389.687 265.397L236.202 141.608C236.085 141.514 236.011 141.378 235.995 141.23C235.98 141.081 236.023 140.932 236.117 140.816C236.211 140.7 236.346 140.625 236.495 140.609C236.643 140.593 236.792 140.637 236.908 140.73L390.394 264.519C390.452 264.566 390.5 264.623 390.535 264.688C390.571 264.753 390.593 264.824 390.601 264.898C390.609 264.972 390.603 265.046 390.582 265.117C390.561 265.188 390.526 265.255 390.48 265.312C390.433 265.37 390.376 265.418 390.311 265.453C390.246 265.489 390.175 265.511 390.101 265.519C390.028 265.527 389.953 265.52 389.882 265.499C389.811 265.478 389.745 265.444 389.687 265.397Z" fill="#CCCCCC" />
                                    <path id="Vector_11" d="M381.207 275.932L227.721 152.143C227.605 152.049 227.531 151.913 227.515 151.764C227.499 151.616 227.542 151.467 227.636 151.35C227.73 151.234 227.866 151.16 228.014 151.144C228.163 151.128 228.312 151.171 228.428 151.265L381.914 275.054C381.971 275.1 382.019 275.158 382.055 275.223C382.09 275.288 382.112 275.359 382.12 275.433C382.128 275.506 382.122 275.581 382.101 275.652C382.08 275.723 382.045 275.789 381.999 275.847C381.953 275.904 381.895 275.952 381.83 275.988C381.765 276.023 381.694 276.045 381.621 276.053C381.547 276.061 381.473 276.055 381.402 276.034C381.331 276.013 381.265 275.978 381.207 275.932Z" fill="#CCCCCC" />
                                    <path id="Vector_12" d="M372.727 286.467L219.241 162.678C219.183 162.631 219.135 162.574 219.1 162.509C219.065 162.444 219.042 162.373 219.034 162.299C219.026 162.225 219.033 162.151 219.054 162.08C219.075 162.009 219.109 161.943 219.156 161.885C219.202 161.827 219.259 161.78 219.324 161.744C219.389 161.709 219.461 161.686 219.534 161.678C219.608 161.67 219.682 161.677 219.753 161.698C219.824 161.719 219.89 161.753 219.948 161.8L373.433 285.589C373.491 285.635 373.539 285.692 373.575 285.757C373.61 285.822 373.633 285.894 373.641 285.967C373.649 286.041 373.642 286.116 373.621 286.187C373.6 286.258 373.566 286.324 373.519 286.382C373.473 286.439 373.415 286.487 373.35 286.523C373.285 286.558 373.214 286.581 373.141 286.589C373.067 286.596 372.993 286.59 372.922 286.569C372.851 286.548 372.784 286.513 372.727 286.467Z" fill="#CCCCCC" />
                                    <path id="Vector_13" d="M418.437 304H0.563172C0.41381 304 0.270564 303.941 0.164949 303.835C0.0593336 303.729 0 303.586 0 303.436C0 303.287 0.0593336 303.143 0.164949 303.038C0.270564 302.932 0.41381 302.873 0.563172 302.873H418.437C418.586 302.873 418.729 302.932 418.835 303.038C418.941 303.143 419 303.287 419 303.436C419 303.586 418.941 303.729 418.835 303.835C418.729 303.941 418.586 304 418.437 304Z" fill="#CCCCCC" />
                                    <path id="Vector_14" d="M190.398 220.197L183.96 220.196L180.898 195.339L190.4 195.34L190.398 220.197Z" fill="#FFB8B8" />
                                    <path id="Vector_15" d="M179.36 218.355H191.777V226.18H171.542C171.542 225.153 171.745 224.135 172.138 223.186C172.53 222.236 173.106 221.374 173.832 220.647C174.558 219.92 175.42 219.344 176.369 218.951C177.317 218.557 178.334 218.355 179.36 218.355Z" fill="#2F2E41" />
                                    <path id="Vector_16" d="M124.622 220.197L118.184 220.196L115.122 195.339L124.624 195.34L124.622 220.197Z" fill="#FFB8B8" />
                                    <path id="Vector_17" d="M113.585 218.355H126.002V226.18H105.767C105.767 225.153 105.969 224.135 106.362 223.186C106.755 222.236 107.331 221.374 108.057 220.647C108.783 219.92 109.645 219.344 110.593 218.951C111.542 218.557 112.558 218.355 113.585 218.355Z" fill="#2F2E41" />
                                    <path id="Vector_18" d="M146.127 35.8141V32.9955C146.127 28.174 148.04 23.55 151.446 20.1406C154.852 16.7313 159.472 14.8159 164.289 14.8159C169.106 14.8159 173.726 16.7313 177.132 20.1406C180.538 23.55 182.451 28.174 182.451 32.9955V35.8141C182.451 39.2901 181.072 42.6237 178.616 45.0816C176.161 47.5395 172.83 48.9203 169.358 48.9203H159.221C157.501 48.9203 155.798 48.5813 154.21 47.9227C152.621 47.2641 151.178 46.2986 149.962 45.0816C148.746 43.8646 147.781 42.4198 147.123 40.8297C146.465 39.2395 146.127 37.5353 146.127 35.8141Z" fill="#2F2E41" />
                                    <path id="Vector_19" d="M164.289 49.8902C171.928 49.8902 178.121 43.6914 178.121 36.0449C178.121 28.3984 171.928 22.1997 164.289 22.1997C156.65 22.1997 150.457 28.3984 150.457 36.0449C150.457 43.6914 156.65 49.8902 164.289 49.8902Z" fill="#FFB8B8" />
                                    <path id="Vector_20" d="M89.0513 83.6293C89.6127 83.0987 90.2834 82.6978 91.0162 82.4548C91.7491 82.2118 92.5263 82.1326 93.293 82.2227C94.0598 82.3129 94.7974 82.5702 95.4541 82.9766C96.1107 83.383 96.6704 83.9285 97.0936 84.5748L108.951 82.3298L112.071 89.2096L95.282 92.1446C94.1502 92.7843 92.8233 92.9862 91.5527 92.712C90.2821 92.4379 89.1561 91.7067 88.388 90.6571C87.62 89.6074 87.2634 88.3123 87.3856 87.017C87.5079 85.7217 88.1005 84.5164 89.0513 83.6293Z" fill="#FFB8B8" />
                                    <path id="Vector_21" d="M153.66 58.8446L134.216 71.6658L101.407 82.1526C100.972 82.2925 100.599 82.579 100.351 82.9632C100.104 83.3474 99.9966 83.8057 100.049 84.2599L100.764 90.4307C100.796 90.7038 100.884 90.9672 101.024 91.2041C101.163 91.441 101.351 91.6461 101.574 91.8063C101.797 91.9665 102.051 92.0783 102.32 92.1344C102.589 92.1905 102.867 92.1898 103.135 92.1322L134.014 85.5071C135.508 85.1883 136.921 84.5656 138.165 83.6776L160.01 68.121C160.801 67.5539 161.433 66.7914 161.844 65.9076C162.254 65.0238 162.429 64.0487 162.351 63.0772C162.271 62.1043 161.94 61.1691 161.389 60.3636C160.838 59.558 160.087 58.9098 159.21 58.4827C158.334 58.0557 157.361 57.8644 156.387 57.9279C155.414 57.9914 154.474 58.3073 153.66 58.8446Z" fill="#CCCCCC" />
                                    <path id="Vector_22" d="M184.075 213.143C183.58 213.143 183.097 212.999 182.683 212.729C182.269 212.458 181.943 212.073 181.744 211.62L152.229 138.62C152.16 138.461 152.044 138.328 151.897 138.237C151.75 138.147 151.579 138.103 151.407 138.113C151.234 138.123 151.069 138.185 150.933 138.292C150.798 138.398 150.698 138.544 150.647 138.709L126.567 209.778C126.465 210.108 126.297 210.415 126.072 210.678C125.848 210.941 125.572 211.156 125.262 211.308C124.952 211.461 124.614 211.549 124.268 211.566C123.923 211.583 123.578 211.529 123.254 211.407L115.179 208.376C114.741 208.213 114.356 207.932 114.068 207.563C113.78 207.194 113.6 206.753 113.548 206.288C109.915 174.612 141.594 94.6569 141.914 93.8532L142.003 93.6305L170.881 100.025L170.941 100.09C182.462 112.671 191.932 192.021 193.714 207.8C193.78 208.37 193.65 208.945 193.346 209.432C193.042 209.918 192.582 210.286 192.04 210.476L184.913 212.999C184.644 213.094 184.36 213.143 184.075 213.143Z" fill="#2F2E41" />
                                    <path id="Vector_23" d="M159.193 102.598C152.197 102.598 144.396 101.202 141.995 95.4386L141.94 95.3062L142.015 95.1835C143.91 92.071 146.415 86.7614 145.068 85.7648C142.416 83.802 141.129 80.573 141.244 76.1674C141.492 66.6036 148.002 58.1125 157.444 55.0382C160.079 54.194 162.761 53.5028 165.476 52.9681C167.456 52.5683 169.499 52.6123 171.459 53.0969C173.42 53.5814 175.248 54.4946 176.814 55.7707C178.4 57.0552 179.682 58.6752 180.567 60.5145C181.453 62.3537 181.921 64.3665 181.937 66.4082C182.036 76.6287 180.464 90.8637 172.413 100.637C172.035 101.09 171.51 101.396 170.93 101.5C167.056 102.201 163.13 102.569 159.193 102.598Z" fill="#CCCCCC" />
                                    <path id="Vector_24" d="M156.591 102.215C156.971 100.848 157.876 99.6868 159.107 98.9833C160.339 98.2799 161.798 98.0914 163.168 98.4588C163.447 98.537 163.72 98.6381 163.983 98.761L172.986 90.5598L179.248 94.7821L166.372 106.186C165.791 107.236 164.876 108.06 163.772 108.529C162.669 108.997 161.44 109.083 160.283 108.772C159.608 108.587 158.977 108.27 158.426 107.84C157.875 107.41 157.414 106.874 157.071 106.264C156.727 105.655 156.508 104.983 156.426 104.288C156.343 103.593 156.399 102.889 156.591 102.215Z" fill="#FFB8B8" />
                                    <path id="Vector_25" d="M171.56 102.32C170.976 102.32 170.41 102.118 169.958 101.747L166.407 98.8432C166.111 98.6011 165.874 98.2951 165.713 97.9482C165.552 97.6012 165.471 97.2223 165.477 96.8398C165.483 96.4572 165.575 96.081 165.747 95.7392C165.919 95.3974 166.165 95.0989 166.469 94.8661L181.36 83.4342C181.536 83.2981 181.652 83.0977 181.682 82.8766C181.712 82.6556 181.653 82.4317 181.519 82.2534L172.328 70.0908C171.26 68.6824 170.725 66.9412 170.816 65.1756C170.908 63.4099 171.62 61.7336 172.828 60.4433C174.1 59.0683 175.842 58.2222 177.708 58.0728C179.574 57.9234 181.428 58.4817 182.902 59.6368L182.96 59.6982L192.558 73.454C193.595 74.2685 194.431 75.3121 194.999 76.5034C195.568 77.6946 195.853 79.0012 195.834 80.3211C195.814 81.6411 195.49 82.9386 194.886 84.1123C194.283 85.2861 193.416 86.3044 192.355 87.0876L173.069 101.822C172.632 102.145 172.103 102.32 171.56 102.32Z" fill="#CCCCCC" />
                                    <path id="Vector_26" d="M152.037 32.15V25.2806L164.289 19.9253L175.972 25.2806V32.15C175.972 32.449 175.853 32.7358 175.642 32.9472C175.431 33.1586 175.144 33.2774 174.845 33.2774H153.163C152.864 33.2774 152.578 33.1586 152.367 32.9472C152.156 32.7358 152.037 32.449 152.037 32.15Z" fill="#2F2E41" />
                                    <path id="Vector_27" d="M163.727 15.7273C161.925 9.95573 165.709 3.34127 171.302 1.05675C176.895 -1.22778 183.586 0.369177 188.306 4.14355C193.025 7.91793 195.954 13.5712 197.505 19.4151C199.057 25.2589 199.351 31.3526 199.638 37.3925C206.51 38.656 211.184 46.8145 208.804 53.3896C206.423 59.9647 197.612 63.2313 191.527 59.7946C185.442 56.358 183.679 47.1199 188.071 41.6806C190.149 39.1069 191.31 35.9127 191.37 32.6041C191.429 29.2954 190.384 26.0614 188.401 23.4142C186.417 20.767 183.607 18.858 180.417 17.9895C177.227 17.121 173.838 17.3427 170.788 18.6194C167.402 20.0371 163.152 16.3537 163.727 15.7273Z" fill="#2F2E41" />
                                    <g id="Gorrito">
                                        <path id="Vector_28" d="M86.5112 56.9812C78.2836 56.9272 70.1589 55.146 62.6619 51.7529C62.2156 51.5538 61.8368 51.2291 61.5717 50.8183C61.3065 50.4076 61.1664 49.9285 61.1685 49.4394V28.9103C61.1692 28.2378 61.4365 27.593 61.9116 27.1174C62.3867 26.6419 63.0308 26.3744 63.7027 26.3736H109.32C109.992 26.3744 110.636 26.6419 111.111 27.1175C111.586 27.593 111.853 28.2378 111.854 28.9103V49.4395C111.856 49.9285 111.716 50.4076 111.451 50.8184C111.186 51.2291 110.807 51.5538 110.36 51.7529C102.864 55.146 94.7388 56.9272 86.5112 56.9812Z" fill="#6C63FF" />
                                        <path id="Vector_29" d="M86.5049 40.3502C86.1668 40.3505 85.8319 40.2831 85.5202 40.152L49.3465 24.8757C48.88 24.6787 48.4832 24.3464 48.2072 23.9216C47.9311 23.4967 47.7885 22.9989 47.7978 22.4922C47.8071 21.9855 47.9678 21.4932 48.2592 21.0788C48.5506 20.6644 48.9593 20.3468 49.4327 20.1671L85.6068 6.43077C86.1895 6.20851 86.8337 6.20988 87.4154 6.43462L123.105 20.1709C123.575 20.3521 123.981 20.6697 124.271 21.0831C124.56 21.4966 124.72 21.987 124.729 22.4917C124.738 22.9964 124.597 23.4924 124.323 23.9163C124.049 24.3401 123.655 24.6726 123.192 24.871L87.5017 40.147C87.1866 40.2814 86.8475 40.3505 86.5049 40.3502Z" fill="#6C63FF" />
                                        <path id="Vector_30" d="M65.3923 53.1498C67.2584 53.1498 68.7713 51.6355 68.7713 49.7675C68.7713 47.8995 67.2584 46.3853 65.3923 46.3853C63.5261 46.3853 62.0132 47.8995 62.0132 49.7675C62.0132 51.6355 63.5261 53.1498 65.3923 53.1498Z" fill="#3F3D56" />
                                        <path id="Vector_31" opacity="0.2" d="M123.315 22.7027L87.6249 37.9787C87.3467 38.0978 87.0473 38.1595 86.7447 38.1603C86.4421 38.161 86.1424 38.1007 85.8636 37.983L49.69 22.7071C49.2357 22.5199 48.8567 22.1864 48.6129 21.7595C48.4533 22.0363 48.3545 22.344 48.3229 22.662C48.2913 22.98 48.3276 23.3011 48.4295 23.604C48.5314 23.9069 48.6964 24.1846 48.9138 24.4188C49.1311 24.6529 49.3957 24.8381 49.69 24.962L85.8636 40.2378C86.1424 40.3555 86.4421 40.4158 86.7447 40.4151C87.0473 40.4144 87.3467 40.3526 87.6249 40.2335L123.315 24.9575C123.608 24.8325 123.871 24.6467 124.086 24.4125C124.302 24.1783 124.466 23.9009 124.567 23.5987C124.668 23.2964 124.703 22.9762 124.671 22.6592C124.639 22.3422 124.541 22.0355 124.382 21.7595C124.14 22.183 123.765 22.5146 123.315 22.7027Z" fill="black" />
                                        <path id="Vector_32" d="M65.6762 49.7543C65.8255 49.7543 65.9688 49.6949 66.0744 49.5892C66.18 49.4835 66.2394 49.3401 66.2394 49.1906V30.3281L84.8134 23.5551C84.9628 23.5573 85.1069 23.5 85.2141 23.3959C85.3213 23.2918 85.3828 23.1493 85.385 22.9998C85.3872 22.8503 85.33 22.706 85.226 22.5987C85.122 22.4914 84.9796 22.4299 84.8302 22.4277L66.2561 29.2007C66.1067 29.1973 65.958 29.2242 65.8193 29.2799C65.6805 29.3357 65.5545 29.419 65.4489 29.5249C65.3422 29.6296 65.2574 29.7545 65.1997 29.8925C65.142 30.0304 65.1126 30.1786 65.113 30.3281V49.1906C65.113 49.3401 65.1724 49.4835 65.278 49.5892C65.3836 49.6949 65.5268 49.7543 65.6762 49.7543Z" fill="#3F3D56" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_19_3">
                                        <rect width="419" height="304" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        
                        <Description />

                        <Interests />
                        
                    </div>
                </div>
            </section>
        </>
    )
}
