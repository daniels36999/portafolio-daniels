import React from 'react';

function getSvg(iconName) {

    const svg_github = (
        <svg fill="white" viewBox="0 0 496 512" height="1.6em">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
         </svg>
    );

    const svg_web= (
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" id="mdi-web-sync" viewBox="0 0 24 24">
            <path d="M16.5 11.74C16.5 11.15 16.43 10.58 16.36 10H19.74C19.82 10.33 19.89 10.67 19.93 11C20.65 11.07 21.34 11.23 22 11.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.87 22 13.71 21.88 14.5 21.67C13.71 20.71 13.18 19.5 13.04 18.2C12.73 18.81 12.39 19.4 12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.18C13.35 15.28 13.64 14.61 14.03 14H9.66C9.56 13.34 9.5 12.68 9.5 12S9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.5 14.46 13 14.4 13.5C14.97 12.76 15.68 12.17 16.5 11.74M4.26 14C4.1 13.36 4 12.69 4 12S4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12S7.56 13.34 7.64 14H4.26M5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57 18.93 6.03 17.65 5.08 16M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44C8.8 5.55 8.35 6.75 8 8M10.09 8C10.5 6.57 11.17 5.23 12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09M18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8M23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5M19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z" />
        </svg>
    );

    const svg_electronica= (
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path  d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M7 10.5V13.5C7 16 8 17 10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.00977 4V2"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M12 4V2"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M16 4V2"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M20 8H22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M20 12H22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M20 16H22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M16 20V22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M12.0098 20V22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M8.00977 20V22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M2 8H4"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M2 12H4"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M2 16H4"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path  d="M12.0007 9.69995L11.0607 11.34C10.8507 11.7 11.0207 12 11.4407 12H12.5607C12.9807 12 13.1507 12.3 12.9407 12.66L12.0007 14.3"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    );

    const svg_telecomunicaciones= (
        <svg width="50" height="50" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg">
            <path  d="M149.245 104.248C81.9148 221.504 205.983 311.565 310.669 252.026"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M160.38 254.701C104.271 307.734 153.458 304.819 183.363 259.998"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M113.923 320.669C123.278 281.161 159.195 281.161 163.688 317.118"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M160.216 107.72C220.701 143.14 268.514 196.678 314.141 248.914"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M231.971 153.127C288.747 138.119 269.299 136.041 255.052 182.946"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M274.791 137.811C295.57 116.397 314.57 93.981 336.13 73"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M287.522 133.181C282.79 129.868 279.937 125.658 277.106 121.608"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M315.298 119.293C309.776 109.319 300.669 102.185 292.151 94.9893"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M328.029 92.6744C320.667 90.8189 316.782 85.6555 311.826 81.1011"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M226.184 325.629C175.203 324.332 111.184 327.346 63 326.182"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"/>
        </svg>
    );

    const svg_error= (
        <svg width="400" height="400" viewBox="0 0 400 400" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
            <path  d="M149.245 104.248C81.9148 221.504 205.983 311.565 310.669 252.026"  stroke-opacity="0.9" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M160.38 254.701C104.271 307.734 153.458 304.819 183.363 259.998"  stroke-opacity="0.9" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M113.923 320.669C123.278 281.161 159.195 281.161 163.688 317.118"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M160.216 107.72C220.701 143.14 268.514 196.678 314.141 248.914"  stroke-opacity="0.9" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M231.971 153.127C288.747 138.119 269.299 136.041 255.052 182.946"  stroke-opacity="0.9" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M274.791 137.811C295.57 116.397 314.57 93.981 336.13 73"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M287.522 133.181C282.79 129.868 279.937 125.658 277.106 121.608"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M315.298 119.293C309.776 109.319 300.669 102.185 292.151 94.9893"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M328.029 92.6744C320.667 90.8189 316.782 85.6555 311.826 81.1011"  stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path  d="M226.184 325.629C175.203 324.332 111.184 327.346 63 326.182"  stroke-opacity="0.9" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
    
    switch (iconName) {
        case 'github':
            return svg_github ;
        case 'web':
            return svg_web;
        case 'electronica':
            return svg_electronica;
        case 'telecomunicaciones':
            return svg_telecomunicaciones;
        default:
            return svg_error; 
    }
        

}

export default getSvg;
