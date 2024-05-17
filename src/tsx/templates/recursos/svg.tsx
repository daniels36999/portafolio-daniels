function iconosSvg(iconName: string) {

    //ICONOS PLATAFORMAS
    //-------------------------------------------------------------------------

    //ICONO -GITHUB
    const svg_github = (
        <svg fill="white" viewBox="0 0 496 512" height="1.6em">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
         </svg>
    );

    //ICONO -LINKEDIN
    const svg_linkedin = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    );

    //ICONO -GRABCAD
    const svg_grabcad = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cube-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M21 12.5v-4.509a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.007c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0" />
            <path d="M12 22v-10" />
            <path d="M12 12l8.73 -5.04" />
            <path d="M3.27 6.96l8.73 5.04" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
        </svg>
    );

    //ICONO -ERROR
    const svg_error= (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-alert" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M12 17l.01 0" />
            <path d="M12 11l0 3" />
        </svg>
    );

    //ICONO DIRECION
    const svg_direccion = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-share" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
        </svg>
    );

    //ICONO CASA
    const svg_casa= (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-link" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
            <path d="M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M21 16l-5 3l5 2" />
        </svg>
    );

    //ICONO CORREO
    const svg_email= (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
            <path d="M3 6l9 6l9 -6" />
            <path d="M15 18h6" />
            <path d="M18 15l3 3l-3 3" />
        </svg>
    );   

    //ICONOS GENERALES
    //-------------------------------------------------------------------------
    
    //ICONO -AMBURGESA
    const svg_amburguesa= (
        <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"/>
        </svg>
    );
    //ICONO WEB
    const svg_web= (
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" id="mdi-web-sync" viewBox="0 0 24 24">
            <path d="M16.5 11.74C16.5 11.15 16.43 10.58 16.36 10H19.74C19.82 10.33 19.89 10.67 19.93 11C20.65 11.07 21.34 11.23 22 11.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.87 22 13.71 21.88 14.5 21.67C13.71 20.71 13.18 19.5 13.04 18.2C12.73 18.81 12.39 19.4 12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.18C13.35 15.28 13.64 14.61 14.03 14H9.66C9.56 13.34 9.5 12.68 9.5 12S9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.5 14.46 13 14.4 13.5C14.97 12.76 15.68 12.17 16.5 11.74M4.26 14C4.1 13.36 4 12.69 4 12S4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12S7.56 13.34 7.64 14H4.26M5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57 18.93 6.03 17.65 5.08 16M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44C8.8 5.55 8.35 6.75 8 8M10.09 8C10.5 6.57 11.17 5.23 12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09M18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8M23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5M19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z" />
        </svg>
    );

    //ICONO ELECTRONICA
    const svg_electronica= (
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path  d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M7 10.5V13.5C7 16 8 17 10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.00977 4V2"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M12 4V2"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M16 4V2"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M20 8H22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M20 12H22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M20 16H22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M16 20V22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M12.0098 20V22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M8.00977 20V22"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M2 8H4"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M2 12H4"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M2 16H4"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  d="M12.0007 9.69995L11.0607 11.34C10.8507 11.7 11.0207 12 11.4407 12H12.5607C12.9807 12 13.1507 12.3 12.9407 12.66L12.0007 14.3"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    );

    //ICONO TELECOMUNICACIONES
    const svg_telecomunicaciones= (
        <svg width="50" height="50" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg" fill="none">
            <path  d="M149.245 104.248C81.9148 221.504 205.983 311.565 310.669 252.026"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M160.38 254.701C104.271 307.734 153.458 304.819 183.363 259.998"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M113.923 320.669C123.278 281.161 159.195 281.161 163.688 317.118"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M160.216 107.72C220.701 143.14 268.514 196.678 314.141 248.914"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M231.971 153.127C288.747 138.119 269.299 136.041 255.052 182.946"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M274.791 137.811C295.57 116.397 314.57 93.981 336.13 73"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M287.522 133.181C282.79 129.868 279.937 125.658 277.106 121.608"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M315.298 119.293C309.776 109.319 300.669 102.185 292.151 94.9893"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M328.029 92.6744C320.667 90.8189 316.782 85.6555 311.826 81.1011"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
            <path  d="M226.184 325.629C175.203 324.332 111.184 327.346 63 326.182"  strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF"/>
        </svg>
    );

    //ICONOS LENGUAJES DE PROGRAMACION
    //-------------------------------------------------------------------------

    const svg_html = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-html5" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
        </svg>
    );

    const svg_css = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-css3" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
        </svg>
    );

    //ICONOS DE PERFIL
    //-------------------------------------------------------------------------
    const svg_yo = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-hexagon" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
            <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
            <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
        </svg>
    );

    const svg_date = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-month" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M7 14h.013" />
            <path d="M10.01 14h.005" />
            <path d="M13.01 14h.005" />
            <path d="M16.015 14h.005" />
            <path d="M13.015 17h.005" />
            <path d="M7.01 17h.005" />
            <path d="M10.01 17h.005" />
        </svg>
    );

    const svg_rowd = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-right" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 12l-10 0" />
            <path d="M14 12l-4 4" />
            <path d="M14 12l-4 -4" />
            <path d="M20 4l0 16" />
        </svg>
    );

    const svg_row2d = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-chevron-right-filled" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-1.707 6.293a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 .083 1.32l-.083 .094l-3 3a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 -.083 -1.32l.083 -.094z" fill="currentColor" strokeWidth="0" />
        </svg>
    );

    const svg_row2i = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-chevron-left-filled" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm1.707 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" strokeWidth="0" />
        </svg>
    );

    const svg_check = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="60" height="60" viewBox="0 0 24 24" strokeWidth="3" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
        </svg>
   );

   const svg_email2 = (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-filled" width="60" height="60" viewBox="0 0 24 24" strokeWidth="0.3" stroke="#2990ff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" strokeWidth="#2990ff" fill="#2990ff" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" strokeWidth="#2990ff" fill="#2990ff" />
        </svg>
    );
    const svg_pc= (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop-code" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
        <path d="M7 20h4" />
        <path d="M9 16v4" />
        <path d="M20 21l2 -2l-2 -2" />
        <path d="M17 17l-2 2l2 2" />
    </svg>
    );

 //ICONOS DE SOFTWARE INFORMATICO
 //-------------------------------------------------------------------------
 const svg_arduino= (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><linearGradient id="3fGFTDt8GTtIeBARnD~Oya" x1="21.175" x2="25.872" y1="10.027" y2="33.258" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00b3ba"/>
        <stop offset=".998" stopColor="#00979c"/></linearGradient>
        <path fill="url(#3fGFTDt8GTtIeBARnD~Oya)" d="M36,36c-5.018,0-9.425-3.859-12-7.714C21.425,32.141,17.018,36,12,36C5.383,36,0,30.617,0,24	s5.383-12,12-12c5.935,0,9.884,4.448,12,7.755C26.116,16.448,30.065,12,36,12c6.617,0,12,5.383,12,12S42.617,36,36,36z M26.181,24.037C27.828,27.614,32,32,36,32c4.411,0,8-3.589,8-8s-3.589-8-8-8C30.584,16,27.199,21.954,26.181,24.037z M12,16	c-4.411,0-8,3.589-8,8s3.589,8,8,8c4.017,0,8.206-4.422,9.823-7.963C20.837,22.018,17.445,16,12,16z M16,24.5v-1	c0-0.276-0.224-0.5-0.5-0.5h-7C8.224,23,8,23.224,8,23.5v1C8,24.776,8.224,25,8.5,25h7C15.776,25,16,24.776,16,24.5z M39.5,23H37	v-2.5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276,0-0.5,0.224-0.5,0.5V23h-2.5c-0.276,0-0.5,0.224-0.5,0.5v1c0,0.276,0.224,0.5,0.5,0.5H35	v2.5c0,0.276,0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5V25h2.5c0.276,0,0.5-0.224,0.5-0.5v-1C40,23.224,39.776,23,39.5,23z"/>
    </svg>
    );

const svg_powerbi= (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 27.5 1 C 26.122 1 25 2.122 25 3.5 L 25 10 L 31.5 10 C 33.981 10 36 12.019 36 14.5 L 36 49 L 40.5 49 C 41.878 49 43 47.879 43 46.5 L 43 3.5 C 43 2.122 41.878 1 40.5 1 L 27.5 1 z M 18.5 12 C 17.122 12 16 13.122 16 14.5 L 16 20 L 22.5 20 C 24.981 20 27 22.019 27 24.5 L 27 49 L 31.5 49 C 32.878 49 34 47.879 34 46.5 L 34 14.5 C 34 13.122 32.878 12 31.5 12 L 18.5 12 z M 9.5 22 C 8.122 22 7 23.122 7 24.5 L 7 46.5 C 7 47.879 8.122 49 9.5 49 L 22.5 49 C 23.878 49 25 47.879 25 46.5 L 25 24.5 C 25 23.122 23.878 22 22.5 22 L 9.5 22 z"/>
    </svg>
);

// const svg_autodesk= (

// );

const svg_unity= (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 44.082031 25.207031 L 46.902344 20.429688 C 47.015625 20.191406 47.03125 19.917969 46.945313 19.671875 L 41.359375 3.671875 C 41.1875 3.183594 40.675781 2.90625 40.179688 3.027344 L 23.761719 7.027344 C 23.449219 7.105469 23.191406 7.328125 23.070313 7.628906 L 21.324219 12 L 16 12 C 15.722656 12 15.453125 12.117188 15.265625 12.320313 L 3.265625 25.320313 C 2.894531 25.722656 2.914063 26.347656 3.308594 26.722656 L 15.894531 38.722656 C 16.078125 38.902344 16.328125 39 16.582031 39 L 22.320313 39 L 24.070313 43.371094 C 24.199219 43.695313 24.488281 43.925781 24.828125 43.984375 L 42.289063 46.984375 C 42.34375 46.996094 42.402344 47 42.457031 47 C 42.921875 47 43.332031 46.679688 43.433594 46.214844 L 46.976563 29.984375 C 47.03125 29.734375 46.988281 29.472656 46.851563 29.25 Z M 21.324219 12 L 35.417969 9.417969 L 28 24 L 11.167969 24 Z M 22.324219 39 L 11.167969 28 L 28 28 L 36.75 41.167969 Z M 40.386719 38.898438 L 32 26 L 39.332031 11.417969 L 44.082031 25.210938 Z"/>
    </svg>
);

const svg_spss= (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 0 14.007813 L 9.734375 14.007813 L 9.734375 15.378906 L 0 15.378906 Z M 21.589844 14.007813 L 11.128906 14.007813 L 11.128906 15.378906 L 25.074219 15.378906 L 24.855469 15.167969 L 24.574219 14.964844 L 24.28125 14.761719 L 23.960938 14.59375 L 23.644531 14.441406 L 23.324219 14.3125 L 22.980469 14.199219 L 22.632813 14.125 L 22.292969 14.0625 L 21.953125 14.007813 Z M 27.816406 14.007813 L 27.816406 15.378906 L 36.214844 15.378906 L 35.730469 14.007813 Z M 42.160156 14.007813 L 41.675781 15.378906 L 50 15.378906 L 50 14.007813 Z M 0 16.675781 L 0 18.023438 L 9.734375 18.023438 L 9.734375 16.675781 Z M 2.78125 19.316406 L 2.78125 20.695313 L 6.941406 20.695313 L 6.941406 19.316406 Z M 2.78125 21.96875 L 2.78125 23.351563 L 6.941406 23.351563 L 6.941406 21.96875 Z M 26.058594 16.675781 L 11.128906 16.675781 L 11.128906 18.023438 L 26.578125 18.023438 L 26.414063 17.480469 L 26.285156 17.125 L 26.132813 16.804688 Z M 13.910156 19.316406 L 13.910156 20.695313 L 18.066406 20.695313 L 18.066406 19.316406 Z M 26.707031 19.316406 L 22.253906 19.316406 L 22.253906 20.695313 L 26.480469 20.695313 L 26.519531 20.578125 L 26.601563 20.238281 L 26.65625 19.890625 L 26.695313 19.535156 Z M 25.890625 21.96875 L 13.910156 21.96875 L 13.910156 23.351563 L 24.574219 23.351563 L 24.808594 23.195313 L 25.074219 22.964844 L 25.316406 22.710938 L 25.542969 22.445313 L 25.761719 22.164063 Z M 27.816406 16.675781 L 27.816406 18.023438 L 37.144531 18.023438 L 36.660156 16.675781 Z M 50 16.675781 L 41.226563 16.675781 L 40.757813 18.023438 L 50 18.023438 Z M 30.601563 19.316406 L 30.601563 20.695313 L 38.0625 20.695313 L 37.578125 19.316406 Z M 47.289063 19.316406 L 40.296875 19.316406 L 39.820313 20.695313 L 47.289063 20.695313 Z M 35.210938 23.347656 L 42.695313 23.347656 L 43.117188 22.121094 L 43.117188 23.347656 L 47.289063 23.347656 L 47.289063 21.96875 L 39.378906 21.96875 L 38.945313 23.195313 L 38.511719 21.96875 L 30.601563 21.96875 L 30.601563 23.347656 L 34.773438 23.347656 L 34.773438 22.113281 Z M 0 32.601563 L 0 33.992188 L 9.734375 33.992188 L 9.734375 32.601563 Z M 0 29.929688 L 0 31.320313 L 9.734375 31.320313 L 9.734375 29.929688 Z M 2.78125 24.636719 L 2.78125 26.003906 L 6.941406 26.003906 L 6.941406 24.636719 Z M 2.78125 27.289063 L 2.78125 28.667969 L 6.941406 28.667969 L 6.941406 27.289063 Z M 24.574219 24.636719 L 13.910156 24.636719 L 13.910156 26.003906 L 25.890625 26.003906 L 25.761719 25.839844 L 25.542969 25.558594 L 25.316406 25.289063 L 25.074219 25.03125 L 24.804688 24.804688 Z M 13.910156 27.289063 L 13.910156 28.667969 L 18.066406 28.667969 L 18.066406 27.289063 Z M 26.480469 27.289063 L 22.253906 27.289063 L 22.253906 28.667969 L 26.707031 28.667969 L 26.699219 28.460938 L 26.65625 28.105469 L 26.605469 27.765625 L 26.519531 27.421875 Z M 26.578125 29.929688 L 11.128906 29.929688 L 11.128906 31.320313 L 26.058594 31.320313 L 26.132813 31.199219 L 26.285156 30.875 L 26.414063 30.542969 L 26.519531 30.210938 Z M 25.074219 32.601563 L 11.128906 32.601563 L 11.128906 33.992188 L 21.539063 33.992188 L 21.898438 33.976563 L 22.253906 33.9375 L 22.585938 33.875 L 22.929688 33.800781 L 23.277344 33.679688 L 23.59375 33.558594 L 23.914063 33.402344 L 24.234375 33.234375 L 24.523438 33.042969 L 24.808594 32.824219 Z M 30.601563 24.636719 L 30.601563 26.003906 L 34.773438 26.003906 L 34.773438 24.636719 Z M 41.765625 26.003906 L 42.246094 24.636719 L 35.640625 24.636719 L 36.109375 26.003906 Z M 43.117188 24.636719 L 43.117188 26.003906 L 47.289063 26.003906 L 47.289063 24.636719 Z M 30.601563 27.289063 L 30.601563 28.667969 L 34.773438 28.667969 L 34.773438 27.289063 Z M 41.34375 27.289063 L 36.546875 27.289063 L 37.019531 28.667969 L 40.871094 28.667969 Z M 43.117188 27.289063 L 43.117188 28.667969 L 47.289063 28.667969 L 47.289063 27.289063 Z M 27.816406 29.929688 L 27.816406 31.320313 L 34.773438 31.320313 L 34.773438 29.929688 Z M 40.433594 29.929688 L 37.449219 29.929688 L 37.925781 31.320313 L 39.964844 31.320313 Z M 43.117188 29.929688 L 43.117188 31.320313 L 50 31.320313 L 50 29.929688 Z M 27.816406 32.601563 L 27.816406 33.992188 L 34.773438 33.992188 L 34.773438 32.601563 Z M 43.117188 32.601563 L 43.117188 33.992188 L 50 33.992188 L 50 32.601563 Z M 39.042969 33.992188 L 39.519531 32.605469 L 38.371094 32.605469 L 38.839844 33.992188 Z"/>
    </svg>
);



    switch (iconName) {
        case 'github':
            return svg_github ;
        case 'linkedin':
            return svg_linkedin;
        case 'grabcad':
            return svg_grabcad;
        case 'direccion':
            return svg_direccion;
        case 'casa':
            return svg_casa;
        case 'email':
            return svg_email;
        case 'web':
            return svg_web;
        case 'electronica':
            return svg_electronica;
        case 'telecomunicaciones':
            return svg_telecomunicaciones;
        case 'html':
            return svg_html;
        case 'css':
            return svg_css;
        case 'amburguesa':
            return svg_amburguesa;
        case 'user':
            return svg_yo;
        case 'date':
            return svg_date;
        case 'rowD':
            return svg_rowd;
        case 'row2D':
            return svg_row2d;
        case 'row2I':
            return svg_row2i;
        case 'check':
            return svg_check;
        case 'email2':
            return svg_email2;
        case 'pc':
            return svg_pc;
        case 'arduino':
                return svg_arduino;
        case 'spss':
            return svg_spss;
        case 'unity':
            return svg_unity;
        case 'powerbi':
            return svg_powerbi;
        case '':
            return null;
        default:
            return svg_error; 
    }
        
}

export default iconosSvg;
