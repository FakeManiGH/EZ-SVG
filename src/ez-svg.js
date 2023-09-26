// EZ-SVG v1.00
// Original script was written by (c) Timo Anjala.
// Original icons were designed by (c) Timo Anjala.
// EZ-SVG script and icons are free to use in any personal or commercial projects, free of charge.
// EZ-SVG script can be modified to fit the needs of a person obtaining a copy of the it.
// EZ-SVG icons can be modified to fit the needs of a person obtaining a copy of the them.

/*
NOTE:   Creator informaiton and version must remain in all copies of "the script". Any user-facing notification on website is not required.
        If code is modified but parts of "the script" remains in use, mentioning of its origin is required. If original icons are distinctively
        modified and then used independetly without "the script", mentioning of the origin is not required.
*/



// GIVES ALL <icon> ELEMENTS SVG VALUES

const icon = document.getElementsByName('i');
icon.forEach(icon => {
    icon.createElementNS('http://www.w3.org/2000/svg', 'svg');
});



// EZ-SVG LOGO ICON

const iconEZSVG = 
`<svg class="ez-svg ez" width="1em" height="1em" viewBox="0 -20 350 225" fill="currentColor">
<path d="m350.01,65V20c0-11.03-8.97-20-20-20h-20c-11.03,0-20,8.97-20,20v35h-20V10c0-5.52-4.48-10-10-10s-10,4.48-10,10v15h-.01v-.43c-.22-13.6-11.32-24.57-24.99-24.57h-75.01c-13.65,0-24.75,10.95-25,24.54,0,.16,0,.31,0,.46h0c0-13.8-11.19-25-25-25h-50C22.43,0,0,22.43,0,50v125c0,27.57,22.43,50,50,50h50c13.81,0,25-11.19,25-25h.01v.43c.22,13.61,11.32,24.57,24.99,24.57h74.45c13.85,0,25.54-11.21,25.56-25h0v5c0,11.03,8.97,20,20,20h20.66c10.92,0,19.81-8.79,19.99-19.66v-7.84c0-5.52-4.48-10-10-10s-10,4.48-10,10v7.5h-20.65v-35h60v45c0,5.54,4.47,10,10,10s10-4.46,10-10v-45c0-9.88-7.21-18.09-16.64-19.7h6.64c5.73,0,10.35-4.82,9.98-10.65-.33-5.32-4.99-9.35-10.32-9.35h-50.77l-18.13-18.13,17.49-17.48h51.75c5.73,0,10.35-4.82,9.98-10.65-.29-4.68-3.93-8.36-8.43-9.18,4.78-.74,8.45-4.87,8.45-9.87Zm-40-10V20h20v45c0,4.7,3.23,8.62,7.58,9.7h-44.23c9.43-1.6,16.64-9.81,16.64-19.7ZM50,175v-37.5h50c13.81,0,25-11.19,25-25s-11.19-25-25-25h-50v-37.5h143.22c-21.72,39.8-66.87,123.06-67.38,125H50Zm205.31-50l25,25h-10.3c-11.03,0-20,8.97-20,20v5h-67.23l64.24-119.46c.95-1.76,1.67-3.62,2.17-5.54h.82v5c0,11.03,8.97,20,20,20h9.67l-24.37,24.39c-3.39,3.4-5.3,8-5.3,12.8h0c0,4.8,1.91,9.41,5.31,12.81Z"/>
</svg>`
document?.querySelectorAll('.ez-svg').forEach(icon => {
    icon.innerHTML = iconEZSVG;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});



// LIST OF USABLE ICONS (A to Z)

const iconAccept = 
`<svg class="ez-accept ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C56.07,0,0,56.08,0,125s56.07,125,125,125,125-56.08,125-125S193.93,0,125,0Zm0,230c-57.9,0-105-47.1-105-105S67.1,20,125,20s105,47.1,105,105-47.1,105-105,105Z"/>
<polygon points="180.58 58.02 101.76 170.58 58.43 118.94 39.27 135.01 103.55 211.61 201.06 72.36 180.58 58.02"/>
</svg>`
document?.querySelectorAll('.ez-accept').forEach(icon => {
    icon.innerHTML = iconAccept;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconApps = 
`<svg class="ez-apps ez" width="1em" height="1em" viewBox="0 0 240 240" fill="currentColor">
<rect width="60" height="60"/>
<rect y="90" width="60" height="60"/>
<rect y="180" width="60" height="60"/>
<rect x="180" width="60" height="60"/>
<rect x="180" y="180" width="60" height="60"/>
<rect x="90" y="90" width="60" height="60"/>
<rect x="180" y="90" width="60" height="60"/>
<rect x="90" y="180" width="60" height="60"/>
<rect x="90" width="60" height="60"/>
</svg>`
document?.querySelectorAll('.ez-apps').forEach(icon => {
    icon.innerHTML = iconApps;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconArrowBack = 
`<svg class="ez-arrow-back ez" width="1em" height="1em" viewBox="0 0 290 200" fill="currentColor">
<path d="m289.59,192.5c-12.45-32.31-40.63-86.39-98.32-117.09-38.06-20.26-73.93-22.33-95.25-21.48V10.43c0-9.57-11.31-14.07-17.39-6.92l-32.3,38.01L2.51,93.08c-3.35,3.94-3.35,9.89,0,13.83l43.81,51.56,32.3,38.01c6.08,7.15,17.39,2.66,17.39-6.92v-50.25c20.14-4.07,53.82-7.69,93.05,3.4,43.25,12.23,73.94,36.87,92.55,55.79,3.9,3.96,10.03-.67,7.97-6.01Z"/>
</svg>`
document?.querySelectorAll('.ez-arrow-back').forEach(icon => {
    icon.innerHTML = iconArrowBack;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'baseline';
});

const iconArrowDown = 
`<svg class="ez-arrow-down ez" width="1em" height="1em" viewBox="0 0 150 250" fill="currentColor">
<polygon points="0 154.08 75 250 150 154.08 86.22 154.08 86.22 0 63.78 0 63.78 154.08 0 154.08"/>
</svg>`
document?.querySelectorAll('.ez-arrow-down').forEach(icon => {
    icon.innerHTML = iconArrowDown;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconArrowForward = 
`<svg class="ez-arrow-forward ez" width="1em" height="1em" viewBox="0 0 290 200" fill="currentColor">
<path d="m.41,192.5c12.45-32.31,40.63-86.39,98.32-117.09,38.06-20.26,73.93-22.33,95.25-21.48V10.43c0-9.57,11.31-14.07,17.39-6.92l32.3,38.01,43.81,51.56c3.35,3.94,3.35,9.89,0,13.83l-43.81,51.56-32.3,38.01c-6.08,7.15-17.39,2.66-17.39-6.92v-50.25c-20.14-4.07-53.82-7.69-93.05,3.4-43.25,12.23-73.94,36.87-92.55,55.79-3.9,3.96-10.03-.67-7.97-6.01Z"/>
</svg>`
document?.querySelectorAll('.ez-arrow-forward').forEach(icon => {
    icon.innerHTML = iconArrowForward;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'baseline';
});

const iconArrowLeft = 
`<svg class="ez-arrow-left ez" width="1em" height="1em" viewBox="0 -20 250 150" fill="currentColor">
<polygon points="95.92 0 0 75 95.92 150 95.92 86.22 250 86.22 250 63.78 95.92 63.78 95.92 0"/>
</svg>`
document?.querySelectorAll('.ez-arrow-left').forEach(icon => {
    icon.innerHTML = iconArrowLeft;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'baseline';
});

const iconArrowRight = 
`<svg class="ez-arrow-right ez" width="1em" height="1em" viewBox="0 -20 250 150" fill="currentColor">
<polygon points="154.08 0 250 75 154.08 150 154.08 86.22 0 86.22 0 63.78 154.08 63.78 154.08 0"/>
</svg>`
document?.querySelectorAll('.ez-arrow-right').forEach(icon => {
    icon.innerHTML = iconArrowRight;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'baseline';
});

const iconArrowUp = 
`<svg class="ez-arrow-up ez" width="1em" height="1em" viewBox="0 0 150 250" fill="currentColor">
<polygon points="150 95.92 75 0 0 95.92 63.78 95.92 63.78 250 86.22 250 86.22 95.92 150 95.92"/>
</svg>`
document?.querySelectorAll('.ez-arrow-up').forEach(icon => {
    icon.innerHTML = iconArrowUp;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconAudio = 
`<svg class="ez-audio ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<rect x="0" y="75" width="25" height="100" rx="12.5" ry="12.5"/>
<rect x="56.25" width="25" height="250" rx="12.5" ry="12.5"/>
<rect x="112.5" y="37.5" width="25" height="175" rx="12.5" ry="12.5"/>
<rect x="168.75" width="25" height="250" rx="12.5" ry="12.5"/>
<rect x="225" y="75" width="25" height="100" rx="12.5" ry="12.5"/>
</svg>`
document?.querySelectorAll('.ez-audio').forEach(icon => {
    icon.innerHTML = iconAudio;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBell = 
`<svg class="ez-bell ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m124.04,230c-16.54,0-30-13.46-30-30h-20c0,27.57,22.43,50,50,50s50-22.43,50-50h-20c0,16.54-13.46,30-30,30Z"/>
<path d="m242.52,171.94l-43.48-43.48v-53.46h0s0-.1,0-.14v-.38h0C198.75,33.36,165.22,0,124.04,0S49.34,33.36,49.06,74.48h-.02v54.11L7.48,170.16c-4.79,4.79-7.48,11.29-7.48,18.06v1.78h250c0-6.77-2.69-13.27-7.48-18.06Zm-206.6-1.94l33.12-33.12v-61.88h0c0-30.33,24.67-55,55-55s54.92,24.6,55,54.86v61.89l33.25,33.25H35.92Z"/>
</svg>`
document?.querySelectorAll('.ez-bell').forEach(icon => {
    icon.innerHTML = iconBell;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBluetooth = 
`<svg class="ez-bluetooth ez" width="1em" height="1em" viewBox="-25 0 225 250" fill="currentColor">
<path d="m225,179.11l-91.86-53.61,91.85-53.6L101.73,0v107.16S10.26,53.78,10.26,53.78L0,72.29l91.15,53.21L0,178.68l10.26,18.51,91.45-53.37-.06,106.18,123.34-70.89Zm-102.43-71.95V36.62l60.44,35.27-60.44,35.27Zm0,107.2v-70.54l60.44,35.27-60.44,35.27Z"/>
</svg>`
document?.querySelectorAll('.ez-bluetooth').forEach(icon => {
    icon.innerHTML = iconBluetooth;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBook = 
`<svg class="ez-book ez" width="1em" height="1em" viewBox="0 0 225 260" fill="currentColor">
<path d="m225,195V0H37.12C16.59.21,0,16.92,0,37.5h0v177.64h.1c1.36,19.48,17.57,34.86,37.4,34.86h187.5v-20c-9.66,0-17.5-7.83-17.5-17.5s7.83-17.5,17.5-17.5ZM20,37.5c0-9.54,7.63-17.28,17.12-17.48v154.99c-6.18.06-12,1.62-17.12,4.32V37.5Zm171.83,192.5H37.5c-9.66,0-17.5-7.83-17.5-17.5s7.83-17.5,17.5-17.5h154.33c-2.76,5.23-4.33,11.18-4.33,17.5s1.57,12.27,4.33,17.5Zm13.17-55H49.12V20h155.88v155Z"/>
</svg>`
document?.querySelectorAll('.ez-book').forEach(icon => {
    icon.innerHTML = iconBook;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBookmark = 
`<svg class="ez-bookmark ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m154.99,0H20C8.96,0,0,8.96,0,20v230s87.5-61.27,87.5-61.27l87.5,61.27V20c0-11.05-8.96-20-20.01-20Zm-67.49,164.31l-67.5,47.26V20h135v191.58l-67.5-47.27Z"/>
</svg>`
document?.querySelectorAll('.ez-bookmark').forEach(icon => {
    icon.innerHTML = iconBookmark;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBriefcase = 
`<svg class="ez-briefcase ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m185,50c0-27.57-22.43-50-50-50h-20c-27.57,0-50,22.43-50,50H0v200h250V50h-65Zm-70-30h20c16.54,0,30,13.46,30,30h-80c0-16.54,13.46-30,30-30Zm115,210H20v-80h75c0,11.05,8.95,20,20,20h20c11.05,0,20-8.95,20-20h75v80Zm0-100H20v-60h210v60Z"/>
</svg>`
document?.querySelectorAll('.ez-briefcase').forEach(icon => {
    icon.innerHTML = iconBriefcase;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBrightnessDown = 
`<svg class="ez-brightness-down ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<rect x="0" y="115" width="39.99" height="20" rx="10" ry="10"/>
<rect x="115.02" y="0" width="20" height="40" rx="10" ry="10"/>
<rect x="115.02" y="210" width="20" height="40" rx="10" ry="10"/>
<rect x="41.15" y="30.53" width="20" height="40" rx="10" ry="10" transform="translate(-20.75 50.96) rotate(-45)"/>
<rect x="31.15" y="189.28" width="40" height="20" rx="10" ry="10" transform="translate(-125.92 94.52) rotate(-45)"/>
<path d="m125.02,180c-31.21,0-56.44-26.15-54.93-57.69,1.33-27.76,23.57-50.41,51.3-52.19,13.49-.87,26.04,3.16,36.04,10.48,3.96,2.9,9.45,2.44,12.92-1.03h0c4.36-4.36,3.75-11.56-1.23-15.19-13.27-9.68-29.83-15.12-47.65-14.29-38.22,1.77-69.26,32.56-71.33,70.77-2.34,43.23,32.15,79.15,74.88,79.15,16.51,0,31.8-5.37,44.2-14.45,4.94-3.61,5.46-10.79,1.13-15.12h0c-3.51-3.51-9.03-3.86-13.05-.94-9.07,6.6-20.23,10.5-32.29,10.5Z"/>
<rect x="150" y="115" width="100" height="20" rx="10" ry="10"/>
</svg>`
document?.querySelectorAll('.ez-brightness-down').forEach(icon => {
    icon.innerHTML = iconBrightnessDown;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBrightnessUp = 
`<svg class="ez-brightness-up ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<rect x="0" y="115" width="39.99" height="20" rx="10" ry="10"/>
<rect x="115.02" y="0" width="20" height="40" rx="10" ry="10"/>
<rect x="115.02" y="210" width="20" height="40" rx="10" ry="10"/>
<rect x="41.15" y="30.53" width="20" height="40" rx="10" ry="10" transform="translate(-20.75 50.96) rotate(-45)"/>
<rect x="31.15" y="189.28" width="40" height="20" rx="10" ry="10" transform="translate(-125.92 94.52) rotate(-45)"/>
<path d="m125.02,180c-31.21,0-56.44-26.14-54.93-57.69,1.33-27.76,23.57-50.41,51.3-52.19,13.49-.87,26.04,3.16,36.04,10.48,3.96,2.9,9.45,2.44,12.92-1.03h0c4.36-4.36,3.75-11.56-1.23-15.19-13.27-9.68-29.83-15.12-47.65-14.29-38.22,1.77-69.26,32.56-71.33,70.77-2.34,43.23,32.15,79.15,74.88,79.15,16.51,0,31.8-5.37,44.2-14.45,4.94-3.61,5.46-10.79,1.13-15.12h0c-3.51-3.51-9.03-3.86-13.05-.94-9.07,6.6-20.23,10.5-32.29,10.5Z"/>
<path d="m240,115h-30v-30c0-5.52-4.48-10-10-10h0c-5.52,0-10,4.48-10,10v30h-30c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h30v30c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10v-30h30c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10Z"/>
</svg>`
document?.querySelectorAll('.ez-brightness-up').forEach(icon => {
    icon.innerHTML = iconBrightnessUp;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBrush = 
`<svg class="ez-brush ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m197.07,52.08l-22.96.02v-22.99s-22.99,0-22.99,0l.02-22.96c-.68-.68-1.36-1.35-2.03-2.03-5.5-5.5-14.42-5.5-19.92,0l-47.54,47.54c-16.12,16.12-16.12,42.25,0,58.37l2.93,2.93L10.87,186.66c-14.49,14.49-14.49,37.99,0,52.48,7.25,7.25,16.74,10.87,26.24,10.87,9.5,0,18.99-3.62,26.24-10.87l73.7-73.7,2.93,2.93c16.12,16.12,42.26,16.12,58.38,0l47.52-47.52c5.5-5.5,5.5-14.41,0-19.92l-48.81-48.84ZM49.51,224.69c-6.7,6.7-17.68,7.04-24.43.38-3.39-3.35-5.09-7.76-5.09-12.17,0-4.38,1.68-8.76,5.01-12.1l73.7-73.7,24.2,24.19-73.4,73.39Zm104.61-70.47l-58.33-58.32c-8.32-8.31-8.32-21.79,0-30.1l88.43,88.42c-8.32,8.31-21.79,8.31-30.1,0Zm44.24-14.15L109.94,51.65l29.17-29.17v18.62h23v23h18.65s25.68,25.68,25.68,25.68l-13.08,13.08c-2.54,2.54-2.54,6.65,0,9.19h0c2.54,2.54,6.65,2.54,9.19,0l13.08-13.08,11.91,11.91-29.19,29.19Z"/>
</svg>`
document?.querySelectorAll('.ez-brush').forEach(icon => {
    icon.innerHTML = iconBrush;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBurger = 
`<svg class="ez-burger ez" width="1em" height="1em" viewBox="0 0 240 240" fill="currentColor">
<rect x="0" y="0" width="240" height="40"/>
<rect x="0" y="200" width="240" height="40"/>
<rect x="30" y="100" width="180" height="40"/>
</svg>`
document?.querySelectorAll('.ez-burger').forEach(icon => {
    icon.innerHTML = iconBurger;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconBus = 
`<svg class="ez-bus ez" width="1em" height="1em" viewBox="0 0 275 225" fill="currentColor">
<path d="m218.02,6.46C215.22,2.41,210.62,0,205.7,0H15C6.71,0,0,6.71,0,15v160.01c0,8.28,6.71,15,15,15h5.31c2.47,19.7,19.34,35,39.69,35s37.22-15.3,39.69-35h75.62c2.47,19.7,19.34,35,39.69,35s37.22-15.3,39.69-35h5.31c8.28,0,15-6.71,15-15v-81.62c0-3.05-.93-6.03-2.67-8.54L218.02,6.46Zm23.16,68.54h-41.18V20h3.08l38.1,55Zm-61.18-55v55h-40V20h40Zm-60,0v55h-40V20h40Zm-100,0h40v55H20V20Zm40,185c-9.29,0-17.14-6.39-19.37-15-.41-1.6-.63-3.27-.63-5,0-5.97,2.63-11.33,6.79-15,3.53-3.11,8.15-5,13.21-5s9.68,1.89,13.21,5c4.16,3.66,6.79,9.03,6.79,15,0,1.73-.22,3.4-.63,5-2.23,8.61-10.07,15-19.37,15Zm155,0c-9.29,0-17.14-6.39-19.37-15-.41-1.6-.63-3.27-.63-5,0-5.97,2.63-11.33,6.79-15,3.53-3.11,8.15-5,13.21-5s9.68,1.89,13.21,5c4.16,3.66,6.79,9.03,6.79,15,0,1.73-.22,3.4-.63,5-2.23,8.61-10.07,15-19.37,15Zm37.08-35c-5.94-14.65-20.32-25-37.08-25s-31.13,10.35-37.08,25h-80.84c-5.94-14.65-20.32-25-37.08-25s-31.13,10.35-37.08,25h-2.92v-75h235v75h-2.92Z"/>
</svg>`
document?.querySelectorAll('.ez-bus').forEach(icon => {
    icon.innerHTML = iconBus;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCalculator = 
`<svg class="ez-calculator ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m0,15v220c0,8.28,6.72,15,15,15h145c8.28,0,15-6.72,15-15V15c0-8.28-6.72-15-15-15H15C6.72,0,0,6.72,0,15Zm155,215H20V20h135v210Z"/>
<circle cx="44.75" cy="125.5" r="12.5"/>
<circle cx="87.75" cy="125.5" r="12.5"/>
<circle cx="130.75" cy="125.5" r="12.5"/>
<circle cx="44.25" cy="165.47" r="12.5"/>
<circle cx="87.75" cy="165.47" r="12.5"/>
<circle cx="87.75" cy="205.45" r="12.5"/>
<circle cx="44.25" cy="205.45" r="12.5"/>
<path d="m130.52,152.98c-6.88.13-12.27,6.03-12.27,12.91v39.14c0,6.88,5.38,12.79,12.27,12.91s12.73-5.52,12.73-12.5v-39.97c0-6.98-5.72-12.63-12.73-12.5Z"/>
<path d="m143,91.67v-59.67H32v59.67h111ZM47,47h81v29.67H47v-29.67Z"/>
</svg>`
document?.querySelectorAll('.ez-calculator').forEach(icon => {
    icon.innerHTML = iconCalculator;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCalendar = 
`<svg class="ez-calendar ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m191.22,25v-15c0-5.52-4.48-10-10-10s-10,4.48-10,10v15h-92.22v-15c0-5.52-4.48-10-10-10s-10,4.48-10,10v15H0v225h250V25h-58.78Zm38.78,205H20v-125.31h210v125.31Zm0-145.31H20v-39.69h39v15h20v-15h92.22v15h20v-15h38.78v39.69Z"/>
<rect x="45" y="175" width="40" height="40"/>
<rect x="105" y="119.69" width="40" height="40"/>
<rect x="105" y="175" width="40" height="40"/>
<rect x="165" y="119.69" width="40" height="40"/>
<rect x="45" y="119.69" width="40" height="40"/>
<rect x="165" y="175" width="40" height="40"/>
</svg>`
document?.querySelectorAll('.ez-calendar').forEach(icon => {
    icon.innerHTML = iconCalendar;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCamera = 
`<svg class="ez-camera ez" width="1em" height="1em" viewBox="0 0 250 260" fill="currentColor">
<path d="m175,50v-30c0-11.05-8.95-20-20-20h-60c-11.05,0-20,8.95-20,20v30h-15c0-11.05-8.95-20-20-20h0c-11.05,0-20,8.95-20,20h0s-10,0-10,0c-5.52,0-10,4.48-10,10v180c0,5.52,4.48,10,10,10h230c5.52,0,10-4.48,10-10V60c0-5.52-4.48-10-10-10h-65Zm-80-30h60v30h-60v-30Zm135,210H20V70h210v160Z"/>
<path d="m121.92,219.85c42.2,2.7,77.13-32.24,74.43-74.43-2.23-34.88-30.4-63.05-65.28-65.28-42.2-2.7-77.13,32.24-74.43,74.43,2.23,34.88,30.4,63.05,65.28,65.28Zm.01-119.65c31.15-2.78,57.14,23.21,54.36,54.36-2.13,23.88-21.36,43.11-45.23,45.23-31.15,2.78-57.14-23.21-54.36-54.36,2.13-23.88,21.36-43.11,45.23-45.23Z"/>
</svg>`
document?.querySelectorAll('.ez-camera').forEach(icon => {
    icon.innerHTML = iconCamera;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCar = 
`<svg class="ez-car ez" width="1em" height="1em" viewBox="0 -25 275 225" fill="currentColor">
<path d="m254.95,88.01h-39.5s-.04-.01-.04-.03l-11.87-67.29c-2.11-11.97-12.51-20.69-24.66-20.69h-82.83c-12.15,0-22.55,8.72-24.66,20.69l-11.87,67.29s-.02.03-.04.03H20.04c-11.07,0-20.04,8.97-20.04,20.04v81.95h34.83s.04.01.04.03c3.56,19.85,20.96,34.97,41.82,34.97s38.26-15.11,41.82-34.97c0-.02.02-.03.04-.03h38.36s.03.01.04.03c4.51,18.6,21.31,32.47,41.3,32.47s36.78-13.87,41.3-32.47c0-.02.02-.03.04-.03h35.37s.04-.02.04-.04v-81.9c0-11.07-8.98-20.04-20.05-20.04ZM96.03,20h82.88c2.43,0,4.51,1.74,4.93,4.13l11.26,63.83s-.01.05-.04.05h-115.17s-.04-.02-.04-.05l11.26-63.83c.42-2.39,2.5-4.14,4.93-4.14ZM25.04,108.01h224.92c2.78,0,5.03,2.25,5.03,5.03v56.91s-.02.04-.04.04h-15.37s-.03-.01-.04-.03c-4.52-18.61-21.32-32.47-41.3-32.47s-36.79,13.86-41.3,32.47c0,.02-.02.03-.04.03h-39.57s-.03-.01-.04-.03c-5.36-17.35-21.54-29.97-40.61-29.97s-35.26,12.63-40.61,29.97c0,.02-.02.03-.04.03h-16s-.04-.02-.04-.04v-56.91c0-2.79,2.26-5.04,5.04-5.04Zm72.85,81.99c-3.09,8.73-11.43,15-21.2,15s-18.12-6.27-21.21-15c-.84-2.35-1.29-4.87-1.29-7.5,0-4.62,1.4-8.92,3.8-12.5,4.04-6.03,10.91-10,18.7-10s14.65,3.97,18.69,10c2.41,3.58,3.81,7.88,3.81,12.5,0,2.63-.45,5.15-1.3,7.5Zm100.36,12.5c-8.82,0-16.46-5.1-20.16-12.5-1.5-3.01-2.34-6.41-2.34-10s.84-6.98,2.34-10c3.69-7.4,11.34-12.5,20.16-12.5s16.46,5.1,20.14,12.5c1.51,3.02,2.36,6.41,2.36,10s-.85,6.99-2.36,10c-3.68,7.4-11.33,12.5-20.14,12.5Z"/>
</svg>`
document?.querySelectorAll('.ez-car').forEach(icon => {
    icon.innerHTML = iconCar;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCDRom = 
`<svg class="ez-cd-rom ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C56.07,0,0,56.08,0,125s56.07,125,125,125,125-56.08,125-125S193.93,0,125,0Zm0,230c-57.9,0-105-47.1-105-105S67.1,20,125,20s105,47.1,105,105-47.1,105-105,105Z"/>
<path d="m125,75c-27.57,0-50,22.43-50,50s22.43,50,50,50,50-22.43,50-50-22.43-50-50-50Zm0,80c-16.54,0-30-13.46-30-30s13.46-30,30-30,30,13.46,30,30-13.46,30-30,30Z"/>
<path d="m125,54c-39.15,0-71,31.85-71,71s31.85,71,71,71,71-31.85,71-71-31.85-71-71-71Zm0,130c-32.53,0-59-26.47-59-59s26.47-59,59-59,59,26.47,59,59-26.47,59-59,59Z"/>
</svg>`
document?.querySelectorAll('.ez-cd-rom').forEach(icon => {
    icon.innerHTML = iconCDRom;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconClock = 
`<svg class="ez-cd-clock ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m129.14.07C56.95-2.28-2.28,56.95.07,129.15c2.07,63.64,57.15,118.72,120.79,120.78,72.19,2.35,131.43-56.89,129.08-129.08C247.86,57.21,192.79,2.14,129.14.07Zm50.85,214.34l-12.44-21.55c-1.38-2.39-4.44-3.21-6.83-1.83h0c-2.39,1.38-3.21,4.44-1.83,6.83l12.35,21.39c-11.12,5.48-23.35,9.05-36.25,10.27v-19.21c0-5.01-3.56-9.49-8.52-10.21-6.18-.89-11.48,3.88-11.48,9.89v19.52c-13.15-1.25-25.6-4.93-36.9-10.6l12.16-21.06c1.38-2.39.56-5.45-1.83-6.83h0c-2.39-1.38-5.45-.56-6.83,1.83l-12.22,21.16c-13-8.15-24.1-19.07-32.46-31.92l20.91-12.07c2.39-1.38,3.21-4.44,1.83-6.83h0c-1.38-2.39-4.44-3.21-6.83-1.83l-20.95,12.1c-6.12-11.71-10.09-24.7-11.4-38.47h19.52c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10h-19.52c1.27-13.35,5.04-25.97,10.85-37.4l21.5,12.41c2.39,1.38,5.45.56,6.83-1.83h0c1.38-2.39.56-5.45-1.83-6.83l-21.55-12.44c7.82-12.33,18.14-22.92,30.23-31.07l12.3,21.3c1.38,2.39,4.44,3.21,6.83,1.83h0c2.39-1.38,3.21-4.44,1.83-6.83l-12.41-21.49c12.09-6.56,25.6-10.81,39.94-12.18v19.21c0,5.01,3.56,9.49,8.52,10.21,6.18.89,11.48-3.88,11.48-9.89v-19.52c14.09,1.34,27.37,5.47,39.29,11.84l-12.44,21.54c-1.38,2.39-.56,5.45,1.83,6.83h0c2.39,1.38,5.45.56,6.83-1.83l12.36-21.41c12.25,8.13,22.72,18.75,30.64,31.15l-21.51,12.42c-2.39,1.38-3.21,4.44-1.83,6.83h0c1.38,2.39,4.44,3.21,6.83,1.83l21.49-12.41c5.9,11.52,9.73,24.26,11.01,37.74h-19.52c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h19.52c-1.32,13.89-5.36,27-11.57,38.8l-21.52-12.43c-2.39-1.38-5.45-.56-6.83,1.83h0c-1.38,2.39-.56,5.45,1.83,6.83l21.44,12.38c-8.47,12.92-19.71,23.87-32.87,32Z"/>
<path d="m142.3,115c-1.75-3.03-4.27-5.55-7.3-7.3v-32.7l-10-10-10,10v32.7c-5.97,3.46-10,9.9-10,17.3,0,11.05,8.95,20,20,20,7.4,0,13.84-4.03,17.3-10h22.7l10-10-10-10h-22.7Z"/>
</svg>`
document?.querySelectorAll('.ez-clock').forEach(icon => {
    icon.innerHTML = iconClock;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCloudDownload = 
`<svg class="ez-cloud-download ez" width="1em" height="1em" viewBox="0 -20 300 200" fill="currentColor">
<path d="m284.24,99.47c-7.94-8.66-18.13-14.73-29.34-17.6-1.64-26.52-24.11-47.53-51.14-46.86C187.78,12.98,162.51,0,135,0,89.53,0,52.29,35.88,50.1,80.82,21.71,85.55,0,110.29,0,140c0,33.08,26.92,60,60,60h180c33.08,0,60-26.92,60-60,0-15.05-5.6-29.44-15.76-40.53Zm-44.24,80.53H60c-22.06,0-40-17.94-40-40s17.94-40,40-40h10.85l-.71-10.66c-.1-1.48-.15-2.94-.15-4.34,0-35.84,29.16-65,65-65,22.65,0,43.3,11.5,55.26,30.76l3.5,5.64,6.55-1.03c1.55-.24,3.13-.37,4.68-.37,16.54,0,30,13.46,30,30,0,1.34-.08,2.65-.25,3.89l-1.39,10.33,10.38.96c20.67,1.91,36.26,19.03,36.26,39.82,0,22.06-17.94,40-40,40Z"/>
<polygon points="160 37.5 140 37.5 140 112.5 112.5 112.5 150 162.5 187.5 112.5 160 112.5 160 37.5"/>
</svg>`
document?.querySelectorAll('.ez-cloud-download').forEach(icon => {
    icon.innerHTML = iconCloudDownload;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCloudUpload = 
`<svg class="ez-cloud-upload ez" width="1em" height="1em" viewBox="0 -20 300 200" fill="currentColor">
<path d="m284.24,99.47c-7.94-8.66-18.13-14.73-29.34-17.6-1.64-26.52-24.11-47.53-51.14-46.86C187.78,12.98,162.51,0,135,0,89.53,0,52.29,35.88,50.1,80.82,21.71,85.55,0,110.29,0,140c0,33.08,26.92,60,60,60h180c33.08,0,60-26.92,60-60,0-15.05-5.6-29.44-15.76-40.53Zm-44.24,80.53H60c-22.06,0-40-17.94-40-40s17.94-40,40-40h10.85l-.71-10.66c-.1-1.48-.15-2.94-.15-4.34,0-35.84,29.16-65,65-65,22.65,0,43.3,11.5,55.26,30.76l3.5,5.64,6.55-1.03c1.55-.24,3.13-.37,4.68-.37,16.54,0,30,13.46,30,30,0,1.34-.08,2.65-.25,3.89l-1.39,10.33,10.38.96c20.67,1.91,36.26,19.03,36.26,39.82,0,22.06-17.94,40-40,40Z"/>
<polygon points="112.5 87.5 140 87.5 140 162.5 160 162.5 160 87.5 187.5 87.5 150 37.5 112.5 87.5"/>
</svg>`
document?.querySelectorAll('.ez-cloud-upload').forEach(icon => {
    icon.innerHTML = iconCloudUpload;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCloud = 
`<svg class="ez-cloud ez" width="1em" height="1em" viewBox="0 -20 300 200" fill="currentColor">
<path d="m240,200H60c-33.08,0-60-26.92-60-60,0-29.71,21.71-54.45,50.1-59.18C52.29,35.88,89.53,0,135,0c27.51,0,52.78,12.98,68.76,35.02,27.03-.67,49.5,20.33,51.14,46.86,11.21,2.86,21.4,8.93,29.34,17.6,10.16,11.09,15.76,25.48,15.76,40.53,0,33.08-26.92,60-60,60ZM60,100c-22.06,0-40,17.94-40,40s17.94,40,40,40h180c22.06,0,40-17.94,40-40,0-20.79-15.59-37.91-36.26-39.82l-10.38-.96,1.39-10.33c.17-1.24.25-2.55.25-3.89,0-16.54-13.46-30-30-30-1.56,0-3.13.12-4.68.37l-6.55,1.03-3.5-5.64c-11.96-19.26-32.62-30.76-55.26-30.76-35.84,0-65,29.16-65,65,0,1.4.05,2.86.15,4.34l.71,10.66h-10.85Z"/>
</svg>`
document?.querySelectorAll('.ez-cloud').forEach(icon => {
    icon.innerHTML = iconCloud;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCodeSimple = 
`<svg class="ez-code-simple ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m158.38.43c-6.67-1.79-13.52,2.17-15.31,8.84l-60.28,224.99c-1.79,6.67,2.17,13.52,8.84,15.31h0c6.67,1.79,13.52-2.17,15.31-8.84L167.21,15.74c1.79-6.67-2.17-13.52-8.84-15.31Z"/>
<path d="m73.34,80.81c4.88-4.88,4.88-12.8,0-17.68h0c-4.88-4.88-12.8-4.88-17.68,0L4.39,114.4c-5.86,5.86-5.86,15.35,0,21.21l51.27,51.27c4.88,4.88,12.8,4.88,17.68,0,4.88-4.88,4.88-12.8,0-17.68l-40.66-40.66c-1.95-1.95-1.95-5.12,0-7.08l40.66-40.66Z"/>
<path d="m245.61,114.4l-51.27-51.27c-4.88-4.88-12.8-4.88-17.68,0h0c-4.88,4.88-4.88,12.8,0,17.68l40.66,40.66c1.95,1.95,1.95,5.12,0,7.08l-40.66,40.66c-4.88,4.88-4.88,12.8,0,17.68h0c4.88,4.88,12.8,4.88,17.68,0l51.27-51.27c5.86-5.86,5.86-15.35,0-21.21Z"/>
</svg>`
document?.querySelectorAll('.ez-code-simple').forEach(icon => {
    icon.innerHTML = iconCodeSimple;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconComment = 
`<svg class="ez-comment ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m0,15v157.75c0,8.28,6.71,15,15,15h120.29l59.07,59.07c6.8,6.8,18.42,1.98,18.42-7.63v-51.44h22.22c8.28,0,15-6.72,15-15V15c0-8.28-6.72-15-15-15H15C6.72,0,0,6.71,0,15Zm230,152.75h-37.22v49.2l-49.2-49.2H20.06V20h209.94v147.75Z"/>
</svg>`
document?.querySelectorAll('.ez-comment').forEach(icon => {
    icon.innerHTML = iconComment;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconComputerChip = 
`<svg class="ez-computer-chip ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m250,75.34h0c0-5.52-4.48-10-10-10h-15s0-40.34,0-40.34h-42.55v-15C182.45,4.48,177.97,0,172.45,0h0c-5.52,0-10,4.48-10,10v15h-27.45v-15c0-5.52-4.48-10-10-10h0c-5.52,0-10,4.48-10,10v15h-28.13v-15C86.87,4.48,82.39,0,76.87,0h0c-5.52,0-10,4.48-10,10v15s-41.87,0-41.87,0v40.34h-15c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h15v29.66h-15c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h15v29.66h-15c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h15v40.34h41.87v15c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10v-15s28.13,0,28.13,0v15c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10v-15s27.45,0,27.45,0v15c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10v-15s42.55,0,42.55,0v-40.34h15c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10h-15s0-29.66,0-29.66h15c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10h-15v-29.66h15c5.52,0,10-4.48,10-10Zm-45,129.66H45V44.99h160v160.01Z"/>
<path d="m187.5,62.5H62.5v125h125V62.5Zm-20,105h-85v-85h85v85Z"/>
</svg>`
document?.querySelectorAll('.ez-computer-chip').forEach(icon => {
    icon.innerHTML = iconComputerChip;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconConnection = 
`<svg class="ez-connection ez" width="1em" height="1em" viewBox="0 0 250 255" fill="currentColor">
<path d="m250,165V15c0-8.28-6.72-15-15-15H95v20h135v140H67.5v20h27.5v45h-27.5v25h147.5v-25h-60v-45h80c8.28,0,15-6.72,15-15Z"/>
<path d="m75,0H0v80c0,11.04,8.95,20,20,20h7.5v150h20V100h7.5c11.04,0,20-8.95,20-20V0Zm-20,80H20v-15h35v15Zm0-35H20v-25h35v25Z"/>
</svg>`
document?.querySelectorAll('.ez-connection').forEach(icon => {
    icon.innerHTML = iconConnection;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconCycle = 
`<svg class="ez-cycle ez" width="1em" height="1em" viewBox="0 -30 300 200" fill="currentColor">
<path d="m254.25,100.37c-5.87-.48-11.55.07-16.88,1.48l-24.39-51.25h-.02s0,0,0,0V0h-53.3c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h33.3s0,30.6,0,30.6h-84.57l-10.94-23h6.53c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10h-30c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h1.33l17.12,35.99-23.34,40.44c-7.08-2.96-15-4.33-23.27-3.66C21.44,102.32,1.89,122.05.13,146.42c-2.1,29.17,21.04,53.58,49.78,53.58,25.13,0,45.97-18.65,49.41-42.82h50.76s.01,0,.01,0l50.26-86.58,19.1,40.15c-12.25,9.56-19.96,24.69-19.23,41.55,1.07,24.75,20.53,45.25,45.21,47.49,31.01,2.82,56.92-22.9,54.4-53.85-1.97-24.14-21.44-43.58-45.58-45.57Zm-109.66,26.34l-26.7-56.11h59.1l-32.4,56.11Zm-94.68,53.47c-17.32,0-31.26-14.7-30-32.28,1.06-14.86,13.15-26.87,28.02-27.82,3.88-.25,7.62.24,11.08,1.35l-9.08,15.73.05.03h-.07c0,11.04,8.95,20,20,20h9.24c-3.19,13.18-15.09,23-29.24,23Zm23.1-42.99l29.84-51.67,24.59,51.67h-54.42Zm175.14,42.93c-15.19-.96-27.46-13.47-28.12-28.68-.37-8.56,2.85-16.37,8.29-22.07l7.76,16.32c2.37,4.99,8.34,7.11,13.33,4.73h0c4.99-2.37,7.11-8.34,4.73-13.32l-8-16.82c1.29-.17,2.61-.27,3.95-.27,16.59,0,30.09,13.49,30.09,30.08s-14.56,31.12-32.02,30.02Z"/>
</svg>`
document?.querySelectorAll('.ez-cycle').forEach(icon => {
    icon.innerHTML = iconCycle;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconDatabase = 
`<svg class="ez-database ez" width="1em" height="1em" viewBox="0 0 228 253" fill="currentColor">
<path d="m189.56,7.12C169.25,2.53,142.42,0,114,0S58.75,2.53,38.44,7.12C12.62,12.96.04,21.49,0,33.22v186.72l.04,1.98h.11c1.49,10.63,14.04,18.48,38.28,23.96,20.31,4.59,47.15,7.12,75.56,7.12s55.25-2.53,75.56-7.12c25.31-5.72,37.88-14.03,38.42-25.46l.02-187.2c-.04-11.72-12.62-20.25-38.44-26.09ZM21.54,54.54c4.79,1.79,10.46,3.42,16.89,4.88,20.31,4.59,47.15,7.12,75.56,7.12s55.25-2.53,75.56-7.12c6.43-1.45,12.1-3.09,16.89-4.88v163.96c-1.86,1.62-9.08,5.52-26.15,8.96-18.17,3.66-41.72,5.67-66.3,5.67s-48.13-2.01-66.3-5.67c-17.08-3.44-24.29-7.34-26.15-8.96V54.54Zm158.76-13.54c-18.17,3.66-41.72,5.67-66.3,5.67s-48.13-2.01-66.3-5.67c-14.46-2.91-21.33-5.97-24.33-7.73,3.01-1.76,9.87-4.82,24.33-7.73,18.18-3.66,41.73-5.67,66.3-5.67s48.13,2.01,66.3,5.67c14.46,2.91,21.33,5.97,24.33,7.73-3,1.76-9.87,4.82-24.33,7.73Z"/>
</svg>`
document?.querySelectorAll('.ez-database').forEach(icon => {
    icon.innerHTML = iconDatabase;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconDisplay = 
`<svg class="ez-display ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m250,165V15c0-8.28-6.72-15-15-15H15C6.72,0,0,6.72,0,15v150c0,8.28,6.72,15,15,15h80v45h-60v25h180v-25h-60v-45h80c8.28,0,15-6.72,15-15Zm-230-5V20h210v140H20Z"/>
</svg>`
document?.querySelectorAll('.ez-display').forEach(icon => {
    icon.innerHTML = iconDisplay;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconDivide = 
`<svg class="ez-divide ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m246.34,3.66h0c-4.88-4.88-12.8-4.88-17.68,0L3.66,228.66c-4.88,4.88-4.88,12.8,0,17.68,4.88,4.88,12.8,4.88,17.68,0L246.34,21.34c4.88-4.88,4.88-12.8,0-17.68Z"/>
<circle cx="62.5" cy="62.5" r="30"/>
<circle cx="187.5" cy="187.5" r="30"/>
</svg>`
document?.querySelectorAll('.ez-divide').forEach(icon => {
    icon.innerHTML = iconDivide;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconDotsHorzontal = 
`<svg class="ez-dots-horizontal ez" width="1em" height="1em" viewBox="0 -20 250 75" fill="currentColor">
<path d="m37.5,0C16.82,0,0,16.82,0,37.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5S58.18,0,37.5,0Zm0,55c-9.65,0-17.5-7.85-17.5-17.5s7.85-17.5,17.5-17.5,17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5Z"/>
<path d="m212.5,0c-20.68,0-37.5,16.82-37.5,37.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5S233.18,0,212.5,0Zm0,55c-9.65,0-17.5-7.85-17.5-17.5s7.85-17.5,17.5-17.5,17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5Z"/>
<path d="m125,0c-20.68,0-37.5,16.82-37.5,37.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5S145.68,0,125,0Zm0,55c-9.65,0-17.5-7.85-17.5-17.5s7.85-17.5,17.5-17.5,17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5Z"/>
</svg>`
document?.querySelectorAll('.ez-dots-horizontal').forEach(icon => {
    icon.innerHTML = iconDotsHorzontal;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'baseline';
});

const iconDotsVertical = 
`<svg class="ez-dots-vertical ez" width="1em" height="1em" viewBox="0 0 75 250" fill="currentColor">
<path d="m75,37.5C75,16.82,58.18,0,37.5,0S0,16.82,0,37.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5Zm-55,0c0-9.65,7.85-17.5,17.5-17.5s17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5-17.5-7.85-17.5-17.5Z"/>
<path d="m75,212.5c0-20.68-16.82-37.5-37.5-37.5S0,191.82,0,212.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5Zm-55,0c0-9.65,7.85-17.5,17.5-17.5s17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5-17.5-7.85-17.5-17.5Z"/>
<path d="m75,125c0-20.68-16.82-37.5-37.5-37.5S0,104.32,0,125s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5Zm-55,0c0-9.65,7.85-17.5,17.5-17.5s17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5-17.5-7.85-17.5-17.5Z"/>
</svg>`
document?.querySelectorAll('.ez-dots-vertical').forEach(icon => {
    icon.innerHTML = iconDotsVertical;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconDownload = 
`<svg class="ez-download ez" width="1em" height="1em" viewBox="0 0 225 250" fill="currentColor">
<polygon points="178.5 120.14 124.13 120.14 124.13 0 100.87 0 100.87 120.14 46.5 120.14 112.5 201.31 178.5 120.14"/>
<polygon points="202.72 187.34 202.72 229.02 22.29 229.02 22.29 187.34 0 187.34 0 250 225 250 225 187.34 202.72 187.34"/>
</svg>`
document?.querySelectorAll('.ez-download').forEach(icon => {
    icon.innerHTML = iconDownload;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFactory = 
`<svg class="ez-factory ez" width="1em" height="1em" viewBox="0 0 275 255" fill="currentColor">
<path d="m200,0v62.18L122.5,17.43c-10-5.77-22.5,1.44-22.5,12.99v31.75L22.5,17.44C12.5,11.67,0,18.89,0,30.43v219.57h0s255,0,255,0h20V0h-75Zm55,230H20V39.09l100,57.73v-57.74l100,57.74V20h35v210Z"/>
<path d="m80,125h-35.01c-8.28,0-15,6.71-15,15v35.01c0,8.28,6.71,15,15,15h35.01c8.28,0,15-6.71,15-15v-35.01c0-8.28-6.71-15-15-15Zm0,50h-35v-35h35v35Z"/>
<path d="m155,125h-35.01c-8.28,0-15,6.71-15,15v35.01c0,8.28,6.71,15,15,15h35.01c8.28,0,15-6.71,15-15v-35.01c0-8.28-6.71-15-15-15Zm0,50h-35v-35h35v35Z"/>
<path d="m180,140v35.01c0,8.28,6.71,15,15,15h35.01c8.28,0,15-6.71,15-15v-35.01c0-8.28-6.71-15-15-15h-35.01c-8.28,0-15,6.71-15,15Zm15,0h35v35h-35v-35Z"/>
</svg>`
document?.querySelectorAll('.ez-factory').forEach(icon => {
    icon.innerHTML = iconFactory;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFilePDF = 
`<svg class="ez-file-pdf ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m160,170h-20v80h20c16.57,0,30-13.43,30-30v-20c0-16.57-13.43-30-30-30Zm10,50c0,5.52-4.48,10-10,10v-40c5.52,0,10,4.48,10,10v20Z"/>
<path d="m105,170h-25v80h20v-30h5c13.81,0,25-11.19,25-25h0c0-13.81-11.19-25-25-25Zm0,30h-5v-10h5c2.76,0,5,2.24,5,5s-2.24,5-5,5Z"/>
<path d="m20,20h90v70h70v70h20v-84.14L124.14,0H0v250h70v-20H20V20Zm110,14.15l35.86,35.85h-35.86v-35.85Z"/>
<polygon points="250 190 250 170 200 170 200 250 220 250 220 220 250 220 250 200 220 200 220 190 250 190"/>
</svg>`
document?.querySelectorAll('.ez-file-pdf').forEach(icon => {
    icon.innerHTML = iconFilePDF;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFileZIP = 
`<svg class="ez-file-zip ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m180,90v70h20v-84.14L124.14,0H0v250h100v-20H20V20h90v70h70Zm-50-55.85l35.86,35.85h-35.86v-35.85Z"/>
<path d="m225,170h-25v80h20v-30h5c13.81,0,25-11.19,25-25h0c0-13.81-11.19-25-25-25Zm0,30h-5v-10h5c2.76,0,5,2.24,5,5s-2.24,5-5,5Z"/>
<polygon points="110 190 135 190 110 230 110 250 160 250 160 230 135 230 160 190 160 170 110 170 110 190"/>
<rect x="170" y="170" width="20" height="80"/>
</svg>`
document?.querySelectorAll('.ez-file-zip').forEach(icon => {
    icon.innerHTML = iconFileZIP;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFile = 
`<svg class="ez-file ez" width="1em" height="1em" viewBox="0 0 200 250" fill="currentColor">
<path d="m200,75.86L124.14,0H0v250h200V75.86Zm-34.14-5.86h-35.86v-35.85l35.86,35.85ZM20,20h90v70h70v140H20V20Z"/>
</svg>`
document?.querySelectorAll('.ez-file').forEach(icon => {
    icon.innerHTML = iconFile;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFilm = 
`<svg class="ez-film ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<path d="m0,0v250h275V0H0Zm239.63,20h0c8.49,0,15.37,6.88,15.37,15.37v25.74c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37v-25.74c0-8.49,6.88-15.37,15.37-15.37Zm0,76.47h0c8.49,0,15.37,6.88,15.37,15.37v26.02c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37v-26.02c0-8.49,6.88-15.37,15.37-15.37ZM70.74,20h133.52v95H70.74V20Zm-35.37,0h0c8.49,0,15.37,6.88,15.37,15.37v26.02c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37v-26.02c0-8.49,6.88-15.37,15.37-15.37Zm0,76.76h0c8.49,0,15.37,6.88,15.37,15.37v26.02c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37v-26.02c0-8.49,6.88-15.37,15.37-15.37Zm-15.37,117.87v-25.74c0-8.49,6.88-15.37,15.37-15.37h0c8.49,0,15.37,6.88,15.37,15.37v25.74c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37Zm50.74,15.37v-95h133.52v95H70.74Zm153.52-15.37v-26.02c0-8.49,6.88-15.37,15.37-15.37h0c8.49,0,15.37,6.88,15.37,15.37v26.02c0,8.49-6.88,15.37-15.37,15.37h0c-8.49,0-15.37-6.88-15.37-15.37Z"/>
</svg>`
document?.querySelectorAll('.ez-film').forEach(icon => {
    icon.innerHTML = iconFilm;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFilter = 
`<svg class="ez-filter ez" width="1em" height="1em" viewBox="0 0 240 248" fill="currentColor">
<rect x="0" y="0" width="240" height="40" rx="20" ry="20"/>
<rect x="30" y="100" width="180" height="40" rx="20" ry="20"/>
<rect x="60" y="200" width="120" height="40" rx="20" ry="20"/>
</svg>`
document?.querySelectorAll('.ez-filter').forEach(icon => {
    icon.innerHTML = iconFilter;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFlipHorizontally = 
`<svg class="ez-flip-horizontally ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<polygon points="250 185.39 250 60.39 155 122.89 250 185.39"/>
<rect x="115" width="30" height="25"/>
<rect x="115" y="55" width="30" height="25"/>
<rect x="115" y="110" width="30" height="25"/>
<rect x="115" y="165" width="30" height="25"/>
<rect x="115" y="220" width="30" height="25"/>
<path d="m0,62.5v125l95-62.5L0,62.5Zm20,37.5l38,25-38,25v-50Z"/>
</svg>`
document?.querySelectorAll('.ez-flip-horizontally').forEach(icon => {
    icon.innerHTML = iconFlipHorizontally;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFlipVertically = 
`<svg class="ez-flip-vertically ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<polygon points="185.39 0 60.39 0 122.89 95 185.39 0"/>
<rect y="115" width="25" height="30"/>
<rect x="55" y="115" width="25" height="30"/>
<rect x="110" y="115" width="25" height="30"/>
<rect x="165" y="115" width="25" height="30"/>
<rect x="220" y="115" width="25" height="30"/>
<path d="m62.5,250h125l-62.5-95-62.5,95Zm37.5-20l25-38,25,38h-50Z"/>
</svg>`
document?.querySelectorAll('.ez-flip-vertically').forEach(icon => {
    icon.innerHTML = iconFlipVertically;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFloppyDisk = 
`<svg class="ez-floppy-disk ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m250,50.71L199.28,0H0v250h250V50.71ZM61,20h110v35H61V20Zm169,210H20V20h21v55h150V20l39,38.99v171.01Z"/>
<path d="m125,113.65c-20.68,0-37.5,16.82-37.5,37.5s16.82,37.5,37.5,37.5,37.5-16.82,37.5-37.5-16.82-37.5-37.5-37.5Zm0,55c-9.65,0-17.5-7.85-17.5-17.5s7.85-17.5,17.5-17.5,17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5Z"/>
</svg>`
document?.querySelectorAll('.ez-floppy-disk').forEach(icon => {
    icon.innerHTML = iconFloppyDisk;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFolder = 
`<svg class="ez-folder ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m199.85,41.72l-33.41-33.5h-75L83.21,0H15C6.72,0,0,6.72,0,15v185c0,8.29,6.72,15,15,15h220c8.29,0,15-6.72,15-15V56.72c0-8.29-6.72-15-15-15h-35.15Zm-28.28,0h-46.65l-13.49-13.5h46.64l13.5,13.5Zm58.43,153.28H20V20h54.92l41.72,41.72h113.36v133.28Z"/>
</svg>`
document?.querySelectorAll('.ez-folder').forEach(icon => {
    icon.innerHTML = iconFolder;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFullScreenOff = 
`<svg class="ez-fullscreen-off ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<polygon points="209.66 134.48 134.47 134.48 134.47 209.65 165.19 178.94 236.19 249.93 249.94 236.18 178.94 165.2 209.66 134.48"/>
<polygon points="178.88 84.85 250 13.74 236.25 0 165.13 71.1 134.41 40.39 134.41 115.56 209.6 115.56 178.88 84.85"/>
<polygon points="40.32 115.56 115.51 115.56 115.51 40.39 84.79 71.1 13.78 .11 .03 13.85 71.04 84.85 40.32 115.56"/>
<polygon points="71.08 165.2 0 236.26 13.75 250 84.82 178.94 115.55 209.65 115.55 134.48 40.36 134.48 71.08 165.2"/>
</svg>`
document?.querySelectorAll('.ez-fullscreen-off').forEach(icon => {
    icon.innerHTML = iconFullScreenOff;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconFullScreen = 
`<svg class="ez-fullscreen ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<polygon points="80.92 0 .25 0 .25 80.75 33.24 47.73 97.65 112.2 112.35 97.5 47.93 33.02 80.92 0"/>
<polygon points="96.39 139.05 33.11 202.4 0 169.25 0 250 80.67 250 47.81 217.11 111.09 153.75 96.39 139.05"/>
<polygon points="153.73 138.93 139.03 153.63 202.32 216.98 169.33 250 250 250 250 169.25 217.01 202.27 153.73 138.93"/>
<polygon points="169.33 0 202.32 33.02 137.78 97.63 152.48 112.33 217.01 47.73 250 80.75 250 0 169.33 0"/>
</svg>`
document?.querySelectorAll('.ez-fullscreen').forEach(icon => {
    icon.innerHTML = iconFullScreen;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconGear = 
`<svg class="ez-gear ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m250,151.98v-54.6l-36.91-6.61-1.71-4.04,21.18-30.83-39.61-39.06-30,21.67-4.02-1.77L152.09,0l-54.91.09-6.18,36.18-4.49,1.73-29.98-20.45L17.3,56.14l20.8,30-1.79,4.08L0,96.67v56.49l36.55,6.46,1.89,4.18-21.33,29.41,39.45,39.59,29.59-21.29,4.52,1.97,5.91,36.52h56.37l6.82-36.83,3.7-1.6,30.76,21.11,38.93-39.59-22.32-29.41,1.95-4.5,37.25-7.19Zm-42.29,39.48l-15.93,16.2-26.23-18-22.89,9.91-5.77,31.16h-23.95l-4.97-30.71-24.2-10.58-25.18,18.12-16.28-16.34,18.26-25.18-10.67-23.64-30.66-5.42v-24.18l30.55-5.42,10.26-23.38-17.69-25.52,16.38-16.12,25.27,17.23,24.13-9.32,5.29-30.97,22.65-.04,5.77,30.98,23.44,10.32,25.74-18.59,16.52,16.29-18.02,26.22,9.89,23.38,31.32,5.61v22.58l-31.63,6.1-10.45,24.17,19.05,25.1Z"/>
<path d="m125,75c-27.57,0-50,22.43-50,50s22.43,50,50,50,50-22.43,50-50-22.43-50-50-50Zm0,80c-16.54,0-30-13.46-30-30s13.46-30,30-30,30,13.46,30,30-13.46,30-30,30Z"/>
</svg>`
document?.querySelectorAll('.ez-gear').forEach(icon => {
    icon.innerHTML = iconGear;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconGlobe = 
`<svg class="ez-globe ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m249.6,115c-1.75-22.12-9.3-42.64-21.12-60.04-3.91-5.77-8.3-11.2-13.1-16.23-14.63-15.32-33.1-26.93-53.85-33.28-8.47-2.6-17.31-4.31-26.43-5.04-.03-.01-.06-.01-.1-.01-3.3-.27-6.63-.4-10-.4s-6.7.13-10,.4c-.02,0-.04,0-.06.01-9.11.72-17.96,2.43-26.42,5.02-20.77,6.35-39.26,17.97-53.9,33.3-4.8,5.03-9.19,10.46-13.1,16.23C9.7,72.36,2.15,92.88.4,115c-.27,3.3-.4,6.64-.4,10s.13,6.7.4,10c1.64,20.7,8.36,40,18.89,56.65,3.69,5.83,7.85,11.34,12.42,16.47,15.07,16.88,34.64,29.67,56.81,36.45,8.46,2.59,17.31,4.3,26.42,5.02.02.01.04.01.06.01,3.3.27,6.64.4,10,.4s6.7-.13,10-.4c.04,0,.07,0,.1-.01,9.12-.73,17.96-2.44,26.43-5.04,22.15-6.78,41.7-19.56,56.76-36.43,4.57-5.13,8.73-10.64,12.42-16.47,10.53-16.65,17.25-35.95,18.89-56.65.27-3.3.4-6.63.4-10s-.13-6.7-.4-10Zm-20.08,0h-37.88c-.59-15.35-2.57-30.45-5.86-45.16,8.02-1.99,15.92-4.38,23.67-7.15,11.05,14.92,18.23,32.85,20.07,52.31Zm-62.48,56.84c-10.52-1.77-21.22-2.88-32.04-3.3v-33.54h36.62c-.53,12.57-2.09,24.87-4.58,36.84Zm-88.62-36.84h36.58v33.54c-10.81.42-21.5,1.52-32.01,3.29-2.48-11.96-4.04-24.27-4.57-36.83Zm5.5-61.1c10.21,1.68,20.59,2.74,31.08,3.14v37.96h-36.58c.6-14.06,2.47-27.8,5.5-41.1Zm51.08,41.1v-37.96c10.5-.41,20.89-1.46,31.11-3.15,3.04,13.31,4.91,27.05,5.51,41.11h-36.62Zm59.62-68.53c-4.61,1.47-9.29,2.8-14.03,3.98-1.91-6.16-4.06-12.23-6.44-18.21,7.39,3.92,14.26,8.71,20.47,14.23Zm-46.92-23.99c5.13,10.25,9.51,20.93,13.08,31.98-8.45,1.33-17.05,2.19-25.78,2.56V20.48c4.32.4,8.56,1.07,12.7,2Zm-32.7-2v36.54c-8.71-.37-17.3-1.23-25.74-2.55,3.57-11.05,7.95-21.74,13.08-32,4.13-.92,8.36-1.59,12.66-1.99Zm-39.09,11.72c-2.39,6-4.55,12.09-6.46,18.26-4.75-1.18-9.44-2.51-14.07-3.99,6.22-5.53,13.11-10.33,20.53-14.27Zm-35.36,30.49c7.77,2.78,15.68,5.17,23.71,7.16-3.29,14.71-5.27,29.81-5.86,45.15H20.48c1.84-19.46,9.02-37.39,20.07-52.31Zm-20.07,72.31h37.92c.54,13.89,2.21,27.57,4.97,40.95-8.59,2.17-17.04,4.79-25.31,7.86-9.63-14.19-15.88-30.84-17.58-48.81Zm31.38,65.26c5.36-1.81,10.82-3.42,16.35-4.82,2.21,7.58,4.79,15.04,7.7,22.36-8.84-4.7-16.94-10.62-24.05-17.54Zm50.48,27.27c-5.78-11.55-10.61-23.65-14.39-36.21,8.86-1.44,17.89-2.37,27.05-2.76v40.96c-4.3-.4-8.53-1.07-12.66-1.99Zm32.66,1.99v-40.96c9.18.39,18.22,1.32,27.09,2.77-3.78,12.55-8.61,24.64-14.39,36.19-4.14.93-8.38,1.6-12.7,2Zm39.15-11.76c2.91-7.31,5.47-14.75,7.68-22.32,5.52,1.41,10.96,3.02,16.31,4.82-7.1,6.91-15.17,12.82-23.99,17.5Zm37.79-33.95c-8.26-3.06-16.69-5.68-25.27-7.85,2.76-13.38,4.43-27.07,4.97-40.96h37.88c-1.7,17.97-7.95,34.62-17.58,48.81Z"/>
</svg>`
document?.querySelectorAll('.ez-globe').forEach(icon => {
    icon.innerHTML = iconGlobe;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconHeadphones = 
`<svg class="ez-headphones ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m249.97,122.8C248.79,54.88,193.19,0,125,0S0,56.08,0,125v75.35h30v19.65c0,16.54,13.46,30,30,30s30-13.46,30-30v-60c0-16.54-13.46-30-30-30s-30,13.46-30,30v20.35h-10v-55.35c0-57.9,47.1-105,105-105s105,47.1,105,105v55.35h-10v-20.35c0-16.54-13.46-30-30-30s-30,13.46-30,30v60c0,16.54,13.46,30,30,30s30-13.46,30-30v-19.65h30v-77.55h-.03Zm-199.97,37.2c0-5.51,4.49-10,10-10s10,4.49,10,10v60c0,5.51-4.49,10-10,10s-10-4.49-10-10v-60Zm150,60c0,5.51-4.49,10-10,10s-10-4.49-10-10v-60c0-5.51,4.49-10,10-10s10,4.49,10,10v60Z"/>
</svg>`
document?.querySelectorAll('.ez-headphones').forEach(icon => {
    icon.innerHTML = iconHeadphones;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconHeart = 
`<svg class="ez-heart ez" width="1em" height="1em" viewBox="0 0 250 227.5" fill="currentColor">
<path d="m228.79,21.2c-28.27-28.27-74.27-28.27-102.55,0h0s0,0,0,0l-1.22,1.22-1.25-1.25h-.01c-28.28-28.24-74.27-28.23-102.54.03-28.27,28.27-28.28,74.26,0,102.53h0s103.8,103.77,103.8,103.77l103.8-103.77.02-.02h0c28.25-28.27,28.25-74.25-.02-102.51Zm-103.79,178.02L35.36,109.59h-.01s0,0,0,0c-9.91-9.91-15.37-23.1-15.37-37.11s5.46-27.21,15.38-37.12c20.47-20.47,53.79-20.47,74.27,0l15.38,15.36,15.37-15.36h0c9.92-9.91,23.11-15.37,37.13-15.37s27.21,5.46,37.13,15.38c9.92,9.92,15.38,23.1,15.38,37.12s-5.46,27.21-15.38,37.12h0s-89.65,89.63-89.65,89.63Z"/>
</svg>`
document?.querySelectorAll('.ez-heart').forEach(icon => {
    icon.innerHTML = iconHeart;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconHome = 
`<svg class="ez-home ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m15,119.75v130.25h90v-105.03h40v105.03h90s0-130.25,0-130.25L125,39.2,15,119.75Zm200,110.24h-50v-105.03h-80v105.03h-50v-99.82L125,63.63l90,66.53v99.83Z"/>
<path d="m193.91,50.5V0h-32.87v26.43L124.97,0,0,91.53v24.8L124.97,24.8l125.03,91.58v-24.79l-56.09-41.08Z"/>
</svg>`
document?.querySelectorAll('.ez-home').forEach(icon => {
    icon.innerHTML = iconHome;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconHotFood = 
`<svg class="ez-hot-food ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m86.78,58.35c5.27,1.06,8.99,6.05,8.18,11.36-.58,3.8-3.22,6.75-6.58,7.93-3.39,1.2-5.93,4.03-6.62,7.56h0c-1.46,7.49,5.7,13.88,12.93,11.42,9.85-3.35,17.7-11.75,19.83-22.67,3.15-16.17-7.39-31.89-23.51-35.14-5.27-1.06-8.99-6.05-8.18-11.36.58-3.8,3.22-6.75,6.58-7.93,3.39-1.19,5.93-4.03,6.62-7.56,1.46-7.49-5.7-13.88-12.93-11.42-9.85,3.35-17.7,11.75-19.83,22.67-3.15,16.17,7.39,31.89,23.51,35.14Z"/>
<path d="m38.07,58.35c5.24,1.2,8.83,6.28,7.87,11.57-.68,3.79-3.4,6.66-6.78,7.75-3.42,1.11-6.04,3.87-6.82,7.38h0c-1.66,7.45,5.34,14.02,12.62,11.76,9.94-3.09,18-11.28,20.42-22.14,3.57-16.08-6.54-32.07-22.57-35.75-5.24-1.2-8.83-6.28-7.87-11.57.68-3.79,3.4-6.66,6.78-7.75,3.42-1.11,6.04-3.87,6.82-7.38,1.66-7.45-5.34-14.02-12.62-11.76-9.94,3.09-18,11.28-20.42,22.14-3.57,16.08,6.54,32.07,22.57,35.75Z"/>
<path d="m0,105v20c0,68.92,56.07,125,125,125s125-56.08,125-125v-20H0Zm125,125c-57.9,0-105-47.1-105-105h210c0,57.9-47.1,105-105,105Z"/>
<path d="m180,64.72c16.54,0,30,13.46,30,30h20c0-27.57-22.43-50-50-50s-50,22.43-50,50h20c0-16.54,13.46-30,30-30Z"/>
</svg>`
document?.querySelectorAll('.ez-hot-food').forEach(icon => {
    icon.innerHTML = iconHotFood;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconImage = 
`<svg class="ez-image ez" width="1em" height="1em" viewBox="0 -10 275 225" fill="currentColor">
<path d="m0,25v175.01c0,13.81,11.19,25,25,25h225.01c13.81,0,25-11.19,25-25V25c0-13.81-11.19-25-25-25H25C11.19,0,0,11.19,0,25Zm162.52,68.72l-52.23,78.34-23.3-31.06c-6-8-18-8-24,0l-43,57.33V25c0-2.76,2.24-5,5-5h225c2.76,0,5,2.24,5,5v170l-67.52-101.28c-5.94-8.91-19.02-8.91-24.96,0Z"/>
<path d="m67.43,35.1c-18.49-1.46-33.8,13.85-32.34,32.34,1.15,14.54,12.93,26.32,27.47,27.47,18.48,1.46,33.79-13.85,32.34-32.34-1.15-14.54-12.93-26.32-27.47-27.47Z"/>
</svg>`
document?.querySelectorAll('.ez-image').forEach(icon => {
    icon.innerHTML = iconImage;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconImages = 
`<svg class="ez-images ez" width="1em" height="1em" viewBox="0 0 320 270" fill="currentColor">
<path d="m250,45H25c-13.81,0-25,11.19-25,25v175.01c0,13.81,11.19,25,25,25h225.01c13.81,0,25-11.19,25-25V70c0-13.81-11.19-25-25-25Zm5,195l-67.52-101.27c-5.94-8.91-19.03-8.91-24.97,0l-52.22,78.33-23.29-31.05c-6-8-18.01-8-24.01,0l-43,57.33V70c0-2.76,2.24-5,5-5h225c2.76,0,5,2.24,5,5v170Z"/>
<path d="m62.57,80.1c-14.54,1.15-26.32,12.93-27.47,27.47-1.46,18.48,13.85,33.8,32.34,32.34,14.54-1.15,26.32-12.93,27.47-27.47,1.46-18.49-13.85-33.8-32.34-32.34Z"/>
<path d="m297.17,20.18L68.05.14C48.8-1.55,31.82,12.7,30.14,31.95c9.18.8,18.13-2.4,25.15-8.37,2.95-2.51,6.86-3.88,11.03-3.52l219.16,19.17c8.25.72,14.36,8,13.64,16.25l-14.38,164.38c-.96,11,7.18,20.7,18.18,21.67h0l17-194.26c1.2-13.76-8.97-25.88-22.73-27.09Z"/>
</svg>`
document?.querySelectorAll('.ez-images').forEach(icon => {
    icon.innerHTML = iconImages;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconInfo = 
`<svg class="ez-info ez" width="1em" height="1em" viewBox="0 0 255 255" fill="currentColor">
<path d="m125,0C56.07,0,0,56.07,0,125s56.07,125,125,125,125-56.07,125-125S193.93,0,125,0Zm0,233.21c-59.67,0-108.21-48.54-108.21-108.21S65.33,16.79,125,16.79s108.21,48.54,108.21,108.21-48.54,108.21-108.21,108.21Z"/>
<polygon points="90.02 115.41 101.68 115.41 101.68 190.48 90.02 190.48 90.02 211.25 159.98 211.25 159.98 190.48 148.32 190.48 148.32 115.41 159.98 115.41 159.98 94.64 90.02 94.64 90.02 115.41"/>
<circle cx="125" cy="57.93" r="23.32"/>
</svg>`
document?.querySelectorAll('.ez-info').forEach(icon => {
    icon.innerHTML = iconInfo;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconKey = 
`<svg class="ez-key ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m165.56,0c-46.56,0-84.44,37.82-84.44,84.3,0,7.5,1.01,14.98,3.01,22.25L0,191.51v58.49h47.27s17.17-17.15,17.36-17.35c0-.46,0-11.72,0-11.72h17.58v-14.37h17.71v-18.45s12.98,0,13.56,0c8.09-8.07,16.17-16.14,24.26-24.22,8.93,3.12,18.27,4.7,27.81,4.7,46.56,0,84.44-37.82,84.44-84.3S212.12,0,165.56,0Zm0,149.63c-10.83,0-21.57-2.71-31.06-7.84l-1.31-.71-27.69,27.75h-24.87v18.45h-17.71v14.37h-17.58v23.46l-5.93,5.91h-20.42v-14.11l77.61-77.61-3.54-3.54L18.99,209.84v-11.46c29.02-28.95,58.05-57.9,87.07-86.85l-.55-1.25c-3.59-8.24-5.41-16.98-5.41-25.98,0-36.03,29.36-65.33,65.45-65.33s65.45,29.31,65.45,65.33-29.36,65.33-65.45,65.33Z"/>
<path d="m184.5,36.18c-15.16,0-27.5,12.34-27.5,27.5s12.34,27.5,27.5,27.5,27.5-12.34,27.5-27.5-12.34-27.5-27.5-27.5Zm0,45c-9.65,0-17.5-7.85-17.5-17.5s7.85-17.5,17.5-17.5,17.5,7.85,17.5,17.5-7.85,17.5-17.5,17.5Z"/>
</svg>`
document?.querySelectorAll('.ez-key').forEach(icon => {
    icon.innerHTML = iconKey;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconKeyboard = 
`<svg class="ez-keyboard ez" width="1em" height="1em" viewBox="0 0 300 240" fill="currentColor">
<rect x="100.25" y="160" width="100" height="40"/>
<rect x="40.25" y="40" width="40" height="40"/>
<rect x="40.25" y="100" width="40" height="40"/>
<rect x="100.25" y="40" width="40" height="40"/>
<rect x="160.25" y="40" width="40" height="40"/>
<rect x="220.25" y="40" width="40" height="40"/>
<rect x="160.25" y="100" width="40" height="40"/>
<rect x="220.25" y="100" width="40" height="40"/>
<rect x="220.25" y="160" width="40" height="40"/>
<rect x="39.75" y="160" width="40" height="40"/>
<rect x="100.25" y="100" width="40" height="40"/>
<path d="m.02,0h-.02v240h300V0H.02Zm279.98,220H20.02V20h259.98v200Z"/>
</svg>`
document?.querySelectorAll('.ez-keyboard').forEach(icon => {
    icon.innerHTML = iconKeyboard;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconLaptop = 
`<svg class="ez-laptop ez" width="1em" height="1em" viewBox="0 0 275 225" fill="currentColor">
<path d="m257.5,144.02h0V0H17.5v144.01L0,169v.41c0,5.85.9,11.49,2.58,16.78,2.72,8.6,7.47,16.3,13.7,22.53,10.06,10.06,23.95,16.28,39.3,16.28h163.84c24.84,0,45.89-16.31,53-38.81,1.68-5.29,2.58-10.93,2.58-16.78v-.4l-17.5-24.99ZM37.5,20h200v110H37.5V20Zm.23,130h0s199.54,0,199.54,0h0s11.34,16.19,11.34,16.19H26.39l11.34-16.19Zm181.69,55H55.58c-13.59,0-25.39-7.62-31.39-18.81h80.81v10h65v-10h80.81c-6,11.19-17.8,18.81-31.39,18.81Z"/>
</svg>`
document?.querySelectorAll('.ez-laptop').forEach(icon => {
    icon.innerHTML = iconLaptop;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconListAZ = 
`<svg class="ez-list-az ez" width="1em" height="1em" viewBox="0 0 230 250" fill="currentColor">
<polygon points="76.22 0 53.78 0 53.78 154.08 0 154.08 65 250 130 154.08 76.22 154.08 76.22 0"/>
<path d="m190,0h0c-22.09,0-40,17.91-40,40v75h20v-47.5h40v47.5h20V40c0-22.09-17.91-40-40-40Zm20,47.5h-40v-7.5c0-11.05,8.95-20,20-20s20,8.95,20,20v7.5Z"/>
<polygon points="230 154.64 230 135 150 135 150 155 202.32 155 150 230 150 230 150 230 150 230.02 150 250 230 250 230 230 177.43 230 230 154.64"/>
</svg>`
document?.querySelectorAll('.ez-list-az').forEach(icon => {
    icon.innerHTML = iconListAZ;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconListZA = 
`<svg class="ez-list-za ez" width="1em" height="1em" viewBox="0 0 230 250" fill="currentColor">
<polygon points="76.22 250 53.78 250 53.78 95.92 0 95.92 65 0 130 95.92 76.22 95.92 76.22 250"/>
<path d="m190,0h0c-22.09,0-40,17.91-40,40v75h20v-47.5h40v47.5h20V40c0-22.09-17.91-40-40-40Zm20,47.5h-40v-7.5c0-11.05,8.95-20,20-20s20,8.95,20,20v7.5Z"/>
<polygon points="230 154.64 230 135 150 135 150 155 202.32 155 150 230 150 230 150 230 150 230.02 150 250 230 250 230 230 177.43 230 230 154.64"/>
</svg>`
document?.querySelectorAll('.ez-list-za').forEach(icon => {
    icon.innerHTML = iconListZA;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconList = 
`<svg class="ez-list ez" width="1em" height="1em" viewBox="0 0 240 240" fill="currentColor">
<path d="m220,190h-120c-11.05,0-20,8.95-20,20s8.95,20,20,20h120c11.05,0,20-8.95,20-20s-8.95-20-20-20Z"/>
<path d="m220,100h-120c-11.05,0-20,8.95-20,20s8.95,20,20,20h120c11.05,0,20-8.95,20-20s-8.95-20-20-20Z"/>
<path d="m100,50h120c11.05,0,20-8.95,20-20s-8.95-20-20-20h-120c-11.05,0-20,8.95-20,20s8.95,20,20,20Z"/>
<circle cx="30" cy="30" r="30"/>
<circle cx="30" cy="210" r="30"/>
<circle cx="30" cy="120" r="30"/>
</svg>`
document?.querySelectorAll('.ez-list').forEach(icon => {
    icon.innerHTML = iconList;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconLink = 
`<svg class="ez-link ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m230.29,15.51c-23.8-21.65-60.56-20.5-83.68,2.62l-46.26,46.26c-11.37,11.37-17.64,26.5-17.64,42.58s6.26,31.21,17.64,42.58l10.08,10.08c1.89,1.89,4.4,2.93,7.07,2.93s5.19-1.04,7.07-2.93c1.89-1.89,2.93-4.4,2.93-7.08s-1.04-5.18-2.93-7.08l-10.08-10.08c-7.59-7.59-11.78-17.69-11.78-28.43s4.18-20.84,11.78-28.43l46.41-46.41c14.85-14.85,40.37-15.77,55.72-2.01,8.31,7.46,13.06,17.71,13.36,28.86.3,11.17-3.87,21.65-11.74,29.53l-40.16,40.16c-1.89,1.89-2.93,4.4-2.93,7.08s1.04,5.19,2.93,7.08c1.89,1.89,4.4,2.93,7.07,2.93s5.19-1.04,7.07-2.93l40.16-40.16c11.74-11.74,17.98-27.37,17.59-44.01-.39-16.63-7.39-31.95-19.69-43.15Z"/>
<path d="m139.47,90.26c-3.9-3.9-10.25-3.9-14.15,0-1.89,1.89-2.93,4.4-2.93,7.08s1.04,5.19,2.93,7.08l10.08,10.08c7.59,7.59,11.78,17.69,11.78,28.43s-4.18,20.84-11.78,28.43l-46.41,46.41c-14.86,14.85-40.37,15.77-55.72,2.01-8.31-7.46-13.06-17.71-13.36-28.86-.3-11.17,3.87-21.65,11.74-29.53l40.16-40.16c1.89-1.89,2.93-4.4,2.93-7.08s-1.04-5.18-2.93-7.08c-3.9-3.9-10.25-3.9-14.15,0l-39.54,39.54c-23.12,23.13-24.28,59.88-2.62,83.68,11.2,12.31,26.52,19.3,43.15,19.69.49.01.99.02,1.48.02,16.09,0,31.15-6.22,42.53-17.61l46.88-46.88c23.48-23.48,23.48-61.68,0-85.16l-10.08-10.08Z"/>
</svg>`
document?.querySelectorAll('.ez-link').forEach(icon => {
    icon.innerHTML = iconLink;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconLockOpen = 
`<svg class="ez-lock-open ez" width="1em" height="1em" viewBox="0 0 242 280" fill="currentColor">
<path d="m110,212.08v27.92h20v-27.92c9.96-3.97,17-13.7,17-25.08,0-14.91-12.09-27-27-27s-27,12.09-27,27c0,11.38,7.04,21.1,17,25.08Z"/>
<path d="m225,120H62v-38c0-31.98,26.02-58,58-58s58,26.02,58,58h24C202,36.79,165.21,0,120,0S38,36.79,38,82v38H15c-8.29,0-15,6.72-15,15v129.99c0,8.29,6.72,15,15,15h209.99c8.29,0,15-6.72,15-15v-129.99c0-8.29-6.72-15-15-15Zm-5,140H20v-120h200v120Z"/>
</svg>`
document?.querySelectorAll('.ez-lock-open').forEach(icon => {
    icon.innerHTML = iconLockOpen;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconLock = 
`<svg class="ez-lock ez" width="1em" height="1em" viewBox="0 0 242 280" fill="currentColor">
<path d="m110,212.08v27.92h20v-27.92c9.96-3.97,17-13.7,17-25.08,0-14.91-12.09-27-27-27s-27,12.09-27,27c0,11.38,7.04,21.1,17,25.08Z"/>
<path d="m225,120h-23v-38C202,36.79,165.21,0,120,0S38,36.79,38,82v38H15c-8.29,0-15,6.72-15,15v129.99c0,8.29,6.72,15,15,15h209.99c8.29,0,15-6.72,15-15v-129.99c0-8.29-6.72-15-15-15ZM62,82c0-31.98,26.02-58,58-58s58,26.02,58,58v38H62v-38Zm158,178H20v-120h200v120Z"/>
</svg>`
document?.querySelectorAll('.ez-lock').forEach(icon => {
    icon.innerHTML = iconLock;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMagnet = 
`<svg class="ez-magnet ez" width="1em" height="1em" viewBox="0 0 250 255" fill="currentColor">
<path d="m250,0h-90v125c0,19.33-15.67,35-35,35h0c-19.33,0-35-15.67-35-35V0H0v125c0,69.03,55.96,125,125,125h0c69.04,0,125-55.97,125-125V0Zm-70,20h50v40.41h-50V20Zm-160,0h50v40.41H20V20Zm105,210h0c-57.99,0-105-47.01-105-105v-44.59h50v44.59c0,30.38,24.62,55,55,55h0c30.38,0,55-24.62,55-55v-44.59h50v44.59c0,57.99-47.01,105-105,105Z"/>
</svg>`
document?.querySelectorAll('.ez-magnet').forEach(icon => {
    icon.innerHTML = iconMagnet;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMagnifyingGlass = 
`<svg class="ez-magnifying-glass ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m238.97,185.7l-46.1-46.09c15.45-36.56,8.3-80.48-21.45-110.23C131.31-10.73,65.45-9.77,26.58,32.24c-35.39,38.25-35.44,97.91-.1,136.21,29.75,32.24,75.35,40.38,113.12,24.43l46.1,46.09c14.71,14.71,38.57,14.71,53.28,0h0c14.71-14.71,14.71-38.56,0-53.27Zm-14.21,39.07h0c-6.87,6.86-18,6.86-24.86,0l-56.5-56.49c-31.54,19.99-74.07,15.9-101.09-12.31-28.9-30.18-29.71-78.12-1.78-109.19,30.99-34.48,84.32-35.54,116.68-3.18,27.07,27.06,30.73,68.77,11.05,99.83l56.5,56.49c6.87,6.86,6.87,18,0,24.86Z"/>
<path d="m100.12,31.56c-37.77,0-68.5,30.73-68.5,68.5s30.73,68.5,68.5,68.5,68.5-30.73,68.5-68.5S137.89,31.56,100.12,31.56Zm0,125c-31.15,0-56.5-25.35-56.5-56.5s25.35-56.5,56.5-56.5,56.5,25.35,56.5,56.5-25.35,56.5-56.5,56.5Z"/>
</svg>`
document?.querySelectorAll('.ez-magnifying-glass').forEach(icon => {
    icon.innerHTML = iconMagnifyingGlass;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMail = 
`<svg class="ez-mail ez" width="1em" height="1em" viewBox="0 -20 275 200" fill="currentColor">
<path d="m260,0H15C6.72,0,0,6.72,0,15v169.99c0,8.29,6.72,15,15,15h244.99c8.29,0,15-6.72,15-15V15c0-8.29-6.72-15-15-15Zm-122.49,123.36L30.14,16h214.72l-107.36,107.36Zm121.5-93.22v139.71l-69.86-69.86h0l69.86-69.86ZM85.86,100L16,169.86V30.14l69.86,69.86Zm14.14,14.14l26.89,26.89c5.86,5.86,15.36,5.86,21.22,0l26.89-26.89,69.86,69.86H30.14l69.86-69.86Z"/>
</svg>`
document?.querySelectorAll('.ez-mail').forEach(icon => {
    icon.innerHTML = iconMail;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMapPin = 
`<svg class="ez-map-pin ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m163.93,41.98C148.82,15.69,121.54,0,90.93,0h-6.86C53.46,0,26.18,15.69,11.08,41.98c-15.1,26.28-14.74,57.46.96,83.4l75.46,124.63,75.46-124.63c15.7-25.94,16.07-57.11.96-83.4Zm-17.72,73.51l-58.71,96.96L28.79,115.49c-12.05-19.91-12.33-43.83-.74-64,11.59-20.17,32.53-32.21,56.02-32.21h6.86c23.49,0,44.43,12.04,56.02,32.21,11.59,20.17,11.31,44.1-.74,64Z"/>
<path d="m87.5,33.48c-27.57,0-50,22.43-50,50s22.43,50,50,50,50-22.43,50-50-22.43-50-50-50Zm0,80c-16.54,0-30-13.46-30-30s13.46-30,30-30,30,13.46,30,30-13.46,30-30,30Z"/>
</svg>`
document?.querySelectorAll('.ez-map-pin').forEach(icon => {
    icon.innerHTML = iconMapPin;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMeetingVideo = 
`<svg class="ez-meeting-video ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m20,20h70c5.52,0,10-4.48,10-10h0C100,4.48,95.52,0,90,0H15C6.71,0,0,6.71,0,15v75c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10V20Z"/>
<path d="m150,10h0c0,5.52,4.48,10,10,10h70v70c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10V15C250,6.71,243.29,0,235,0h-75c-5.52,0-10,4.48-10,10Z"/>
<path d="m10,150h0C4.48,150,0,154.48,0,160v75c0,8.28,6.71,15,15,15h75c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10H20s0-70,0-70c0-5.52-4.48-10-10-10Z"/>
<path d="m230,230h-70c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h75c8.28,0,15-6.71,15-15v-75c0-5.52-4.48-10-10-10h0c-5.52,0-10,4.48-10,10v70Z"/>
<path d="m50,75.45v99.1c0,5.52,4.48,10,10,10h80c5.52,0,10-4.48,10-10v-15.8l34.25,23.98c6.63,4.64,15.74-.1,15.74-8.2v-99.06c0-8.1-9.11-12.84-15.74-8.19l-34.25,23.99v-15.82c0-5.52-4.48-10-10-10H60c-5.52,0-10,4.48-10,10Zm100.01,40.22l29.99-21v60.67l-30-21.01h0s0,0,0,0h0s0,0,0,0h-19.99v30.22h-60v-79.11h60v30.22h20s0,0,0,0Z"/>
</svg>`
document?.querySelectorAll('.ez-meeting-video').forEach(icon => {
    icon.innerHTML = iconMeetingVideo;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMegaphone = 
`<svg class="ez-megaphone ez" width="1em" height="1em" viewBox="0 0 300 270" fill="currentColor">
<path d="m218.96,1.45l-79.32,45.8h-63.96c-11.43,0-20.69,9.26-20.69,20.69v4.31h-9.31C20.46,72.24,0,92.7,0,117.94v8.62c0,25.23,20.46,45.69,45.69,45.69h9.31v4.31c0,11.43,9.26,20.69,20.69,20.69h2.83l-14.44,53.87c-2.55,9.53,4.63,18.89,14.49,18.89h41.45c6.79,0,12.73-4.56,14.49-11.12l14.99-55.94c23.16,13.37,46.31,26.75,69.47,40.13,7.12,4.11,16.03-1.02,16.03-9.24,0-47.84,0-175.25,0-223.12,0-8.23-8.91-13.37-16.04-9.26ZM55,152.24h-9.31c-14.19,0-25.69-11.5-25.69-25.69v-8.62c0-14.19,11.5-25.69,25.69-25.69h9.31v60Zm61.18,97.76h-31.09l14.14-52.76h31.09l-14.14,52.76Zm18.82-72.76h-55c-2.76,0-5-2.24-5-5v-99.99c0-2.76,2.24-5,5-5h55v110Zm80,40.41l-60-34.64V61.47l60-34.65v190.83Z"/>
<path d="m260,132.24h30c5.52,0,10-4.48,10-10s-4.48-10-10-10h-30c-5.52,0-10,4.48-10,10s4.48,10,10,10Z"/>
<path d="m263.61,69.2l28.98-7.76c5.33-1.43,8.5-6.91,7.07-12.25-1.43-5.33-6.91-8.5-12.25-7.07l-28.98,7.76c-5.33,1.43-8.5,6.91-7.07,12.25s6.91,8.5,12.25,7.07Z"/>
<path d="m292.59,183.05l-28.98-7.76c-5.33-1.43-10.82,1.74-12.25,7.07s1.74,10.82,7.07,12.25l28.98,7.76c5.33,1.43,10.82-1.74,12.25-7.07,1.43-5.33-1.74-10.82-7.07-12.25Z"/>
</svg>`
document?.querySelectorAll('.ez-megaphone').forEach(icon => {
    icon.innerHTML = iconMegaphone;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMicrophone = 
`<svg class="ez-microphone ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m175,120.48h-20c0,33.82-25.01,61.92-57.5,66.76-3.27.49-6.6.74-10,.74s-6.73-.25-10-.74c-32.49-4.84-57.5-32.94-57.5-66.76H0c0,44.87,33.94,81.95,77.5,86.93v22.59h-40v20h100v-20h-40v-22.59c43.56-4.98,77.5-42.06,77.5-86.93Z"/>
<path d="m87.5,173.68c31.57,0,57.25-25.68,57.25-57.25v-59.19C144.75,25.68,119.07,0,87.5,0S30.25,25.68,30.25,57.25v59.19c0,31.57,25.68,57.25,57.25,57.25ZM49.75,57.25c0-20.82,16.94-37.75,37.75-37.75s37.75,16.94,37.75,37.75v59.19c0,20.82-16.94,37.75-37.75,37.75h0c-20.82,0-37.75-16.94-37.75-37.75v-59.19Z"/>
</svg>`
document?.querySelectorAll('.ez-microphone').forEach(icon => {
    icon.innerHTML = iconMicrophone;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMinus = 
`<svg class="ez-minus ez" width="1em" height="1em" viewBox="0 0 250 50" fill="currentColor">
<rect x="112.5" y="-112.5" width="25" height="250" rx="12.5" ry="12.5" transform="translate(137.5 -112.5) rotate(90)"/>
</svg>`
document?.querySelectorAll('.ez-minus').forEach(icon => {
    icon.innerHTML = iconMinus;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMobilephone = 
`<svg class="ez-mobilephone ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m140,0H35C15.67,0,0,15.67,0,35v180c0,19.33,15.67,35,35,35h105c19.33,0,35-15.67,35-35V35c0-19.33-15.67-35-35-35Zm15,215c0,8.28-6.71,15-15,15H35c-8.28,0-15-6.71-15-15V35c0-8.28,6.71-15,15-15h105.01c8.28,0,15,6.71,15,15v180.01Z"/>
<rect x="58.51" y="192.85" width="55" height="25" rx="11.5" ry="11.5"/>
</svg>`
document?.querySelectorAll('.ez-mobilephone').forEach(icon => {
    icon.innerHTML = iconMobilephone;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMouse = 
`<svg class="ez-mouse ez" width="1em" height="1em" viewBox="0 0 200 275" fill="currentColor">
<path d="m105,0h-10C42.53,0,0,42.53,0,95c.15,31.38.29,62.75.44,94.13,4.6,48.18,45.18,85.87,94.57,85.87h10c52.47,0,95-42.53,95-95v-85C200,42.53,157.47,0,105,0ZM20,100c0-40.79,30.54-74.43,70-79.36v20.73c-4.14,0-7.5,3.36-7.5,7.5v35c0,4.14,3.36,7.5,7.5,7.5v20H20v-11.37Zm160,75c0,44.18-35.82,80-80,80h0c-44.18,0-80-35.82-80-80v-43.63h160v43.63Zm0-63.63h-70v-20c4.14,0,7.5-3.36,7.5-7.5v-35c0-4.14-3.36-7.5-7.5-7.5v-20.73c39.46,4.92,70,38.56,70,79.36v11.37Z"/>
</svg>`
document?.querySelectorAll('.ez-mouse').forEach(icon => {
    icon.innerHTML = iconMouse;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconMusicNote = 
`<svg class="ez-music-note ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<path class="cls-1" d="m274.79,182.13c.27-2.08.28-4.17,0-6.27V0h-11.58L81.48,34.79v.08s0,0,0,0v149.59c-10.11-4.36-23.14-5.84-36.8-3.43C16.91,185.94-2.94,205.1.36,223.83c3.29,18.73,28.48,29.93,56.25,25.01,23.36-4.13,41.11-18.35,44.2-33.91l.6-4.25V81.74l153.45-29.24v100.63c-10.06-4.25-22.95-5.68-36.46-3.29-27.77,4.91-47.62,24.07-44.33,42.8s28.48,29.93,56.25,25.01c23.36-4.13,41.11-18.35,44.2-33.91l.26-1.62Z"/>
</svg>`
document?.querySelectorAll('.ez-music-note').forEach(icon => {
    icon.innerHTML = iconMusicNote;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconOffice = 
`<svg class="ez-office ez" width="1em" height="1em" viewBox="0 0 225 300" fill="currentColor">
<path d="m54,105h35.01c8.28,0,15-6.71,15-15v-35.01c0-8.28-6.71-15-15-15h-35.01c-8.28,0-15,6.71-15,15v35.01c0,8.28,6.71,15,15,15Zm0-50h35v35h-35v-35Z"/>
<path d="m135,105h35.01c8.28,0,15-6.71,15-15v-35.01c0-8.28-6.71-15-15-15h-35.01c-8.28,0-15,6.71-15,15v35.01c0,8.28,6.71,15,15,15Zm0-50h35v35h-35v-35Z"/>
<path d="m89.52,117.5h-35.04c-8.27,0-14.98,6.71-14.98,14.98v35.04c0,8.27,6.71,14.98,14.98,14.98h35.04c8.27,0,14.98-6.71,14.98-14.98v-35.04c0-8.27-6.71-14.98-14.98-14.98Zm-.02,50h-35v-35h35v35Z"/>
<path d="m170.52,117.5h-35.04c-8.27,0-14.98,6.71-14.98,14.98v35.04c0,8.27,6.71,14.98,14.98,14.98h35.04c8.27,0,14.98-6.71,14.98-14.98v-35.04c0-8.27-6.71-14.98-14.98-14.98Zm-.02,50h-35v-35h35v35Z"/>
<path d="m89.52,195h-35.04c-8.27,0-14.98,6.71-14.98,14.98v35.04c0,8.27,6.71,14.98,14.98,14.98h35.04c8.27,0,14.98-6.71,14.98-14.98v-35.04c0-8.27-6.71-14.98-14.98-14.98Zm-.02,50h-35v-35h35v35Z"/>
<path d="m205,0H20C8.96,0,0,8.96,0,20v280h140.5v-85h24.97v85h59.53V20c0-11.05-8.96-20-20-20Zm0,280h-19.5v-70c0-8.29-6.72-15-15-15h-35c-8.29,0-15,6.72-15,15v70H20V20h185v260Z"/>
</svg>`
document?.querySelectorAll('.ez-office').forEach(icon => {
    icon.innerHTML = iconOffice;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPause = 
`<svg class="ez-pause ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<rect x="0" y="0" width="60" height="250" rx="30" ry="30"/>
<rect x="115" y="0" width="60" height="250" rx="30" ry="30"/>
</svg>`
document?.querySelectorAll('.ez-pause').forEach(icon => {
    icon.innerHTML = iconPause;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPen = 
`<svg class="ez-pen ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m241.02,8.98c-11.97-11.97-31.44-11.97-43.41,0l-9.53,9.53-12.38,12.38L31.14,175.42l-12.38,12.38-.09.09L0,250l62.12-18.85.06.06.11-.11,12.28-12.28L219.1,74.3l12.38-12.38,9.53-9.53c11.97-11.97,11.97-31.44,0-43.41ZM31.98,225.58l-7.65-7.65c2.82-5.37,5.63-10.74,8.45-16.12l15.3,15.3c-5.37,2.82-10.73,5.65-16.1,8.47Zm30.19-19.14l-18.64-18.64L188.08,43.27l18.64,18.64L62.17,206.44ZM228.64,40l-9.53,9.53-18.64-18.64,9.53-9.53c5.14-5.14,13.5-5.14,18.64,0s5.14,13.5,0,18.64Z"/>
</svg>`
document?.querySelectorAll('.ez-pen').forEach(icon => {
    icon.innerHTML = iconPen;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPhoneRinging = 
`<svg class="ez-phone-ringing ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m225.5,174.18l-2.08-4.31-78.17-11.59-3.23,3.33c-4.38,4.51-7.9,9.73-10.44,15.4-26.56-11.62-48.01-33.35-59.41-60.2,5.79-2.8,11.06-6.67,15.54-11.44l3.02-3.22-11.16-76.48-3.98-2.16c-3.8-2.06-7.85-3.61-12-4.6-4.11-1.01-8.37-1.49-12.66-1.44h0C28.19,17.74,7.65,33.31.98,55.32l-.28.93-.08.97C.26,61.48.06,65.83.01,70.14c-.05,4.32.06,8.66.31,12.89,2.65,45.8,22.3,88.17,55.33,119.29,33.18,31.27,76.76,48.2,122.71,47.66,14.24-.16,27.22-6.16,36.68-15.69,9.46-9.54,15.4-22.63,15.57-36.99.04-3.84-.33-7.64-1.08-11.21-.83-4.08-2.18-8.09-4.02-11.92Zm-47.29,57.6c-84.72.99-154.94-64.84-159.87-149.9-.23-3.81-.32-7.71-.28-11.6.04-3.54.2-7.1.46-10.59,4.67-14.02,17.92-23.85,32.56-24.03,2.79-.03,5.55.28,8.24.94,1.28.31,2.54.69,3.76,1.15l8.46,58.01c-3.89,3.25-8.43,5.61-13.32,6.9l-9.41,2.48,3.11,9.27c13.01,38.83,43.74,69.9,82.21,83.11l9.49,3.26,2.24-9.87c1.09-4.79,3.19-9.29,6.14-13.22l58.93,8.73c.36,1.13.66,2.28.9,3.45.49,2.33.73,4.78.7,7.28-.22,18.87-15.62,34.41-34.34,34.62Z"/>
<path d="m230,151.42h20C250,67.93,182.07,0,98.58,0v20c72.58,0,131.42,58.84,131.42,131.42Z"/>
<path d="m102.05,49.56v20c20.94,0,40.62,8.15,55.43,22.96,14.81,14.81,22.96,34.49,22.96,55.43h20c0-26.28-10.23-50.99-28.82-69.57-18.58-18.58-43.29-28.82-69.57-28.82Z"/>
</svg>`
document?.querySelectorAll('.ez-phone-ringing').forEach(icon => {
    icon.innerHTML = iconPhoneRinging;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPlay = 
`<svg class="ez-play ez" width="1em" height="1em" viewBox="0 0 250 254" fill="currentColor">
<path d="m237.73,105.15c16.36,8.18,16.36,31.52,0,39.7l-99.01,49.49-106.59,53.28c-14.76,7.38-32.12-3.35-32.12-19.85V22.22C0,5.72,17.37-5.01,32.12,2.37l106.59,53.28,99.01,49.49Z"/>
</svg>`
document?.querySelectorAll('.ez-play').forEach(icon => {
    icon.innerHTML = iconPlay;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPlus = 
`<svg class="ez-plus ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m237.5,112.5h-100V12.5c0-6.9-5.6-12.5-12.5-12.5h0c-6.9,0-12.5,5.6-12.5,12.5v100H12.5c-6.9,0-12.5,5.6-12.5,12.5h0c0,6.9,5.6,12.5,12.5,12.5h100v100c0,6.9,5.6,12.5,12.5,12.5h0c6.9,0,12.5-5.6,12.5-12.5v-100h100c6.9,0,12.5-5.6,12.5-12.5h0c0-6.9-5.6-12.5-12.5-12.5Z"/>
</svg>`
document?.querySelectorAll('.ez-plus').forEach(icon => {
    icon.innerHTML = iconPlus;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPopupClose = 
`<svg class="ez-popup-close ez" width="1em" height="1em" viewBox="0 0 275 225" fill="currentColor">
<path d="m18.16,18.25h223.55v86.39h18.16V15c0-8.28-6.71-15-15-15H15C6.71,0,0,6.71,0,15v179.8c0,8.28,6.71,15,15,15h114.93v-18.25H18.16V18.25Z"/>
<rect x="145.07" y="119.84" width="129.93" height="105.16" rx="15" ry="15"/>
<path d="m29.59,31.06v12.73h0v52.27l26.14-26.14c17.8,17.8,35.6,35.6,53.4,53.4l12.46-12.99c-17.71-17.71-35.43-35.43-53.14-53.14l26.14-26.14H29.59Z"/>
</svg>`
document?.querySelectorAll('.ez-popup-close').forEach(icon => {
    icon.innerHTML = iconPopupClose;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPopupWindow = 
`<svg class="ez-popup-window ez" width="1em" height="1em" viewBox="0 0 275 225" fill="currentColor">
<path d="m18.17,18.26h223.66v86.47h18.17V15c0-8.28-6.71-15-15-15H15C6.71,0,0,6.71,0,15v179.99c0,8.28,6.71,15,15,15h114.99v-18.26H18.17V18.26Z"/>
<rect x="145" y="119.75" width="130" height="105.25" rx="15" ry="15"/>
<path d="m120.19,120.25v-12.73h0v-52.27l-26.14,26.14c-17.8-17.8-35.6-35.6-53.4-53.4-4.15,4.33-8.31,8.66-12.46,12.99,17.71,17.71,35.43,35.43,53.14,53.14l-26.14,26.14h65Z"/>
</svg>`
document?.querySelectorAll('.ez-popup-window').forEach(icon => {
    icon.innerHTML = iconPopupWindow;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconPrinter = 
`<svg class="ez-printer ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m210,57.5v-28.26L180.75,0H40v57.5H0v135h57.61v57.5h131.42v-57.5h60.97V57.5h-40ZM60,20h112.47l17.53,17.52v19.98H60V20Zm109.03,210h-91.42v-77.5h91.42v77.5Zm60.97-57.5h-40.97v-20h23.47v-20H37.5v20h20.11v20H20v-95h210v95Z"/>
<rect x="88.32" y="201.25" width="70" height="10"/>
<rect x="88.32" y="171.25" width="70" height="10"/>
<rect x="35" y="92.5" width="25" height="25"/>
</svg>`
document?.querySelectorAll('.ez-printer').forEach(icon => {
    icon.innerHTML = iconPrinter;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconQrCode = 
`<svg class="ez-qr-code ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m0,0v250h250V0H0Zm230,230H20V20h210v210Z"/>
<path d="m100,150h-60v60h60v-60Zm-20,40h-20v-20h20v20Z"/>
<path d="m150,210h60v-60h-60v60Zm20-40h20v20h-20v-20Z"/>
<polygon points="115 135 115 210 135 210 135 135 130 135 130 120 150 120 150 100 130 100 130 115 120 115 120 135 115 135"/>
<polygon points="170 140 170 135 210 135 210 115 170 115 170 120 150 120 150 140 170 140"/>
<rect x="100" y="60" width="20" height="55"/>
<rect x="40" y="40" width="40" height="47.5"/>
<polygon points="60 125 80 125 80 135 100 135 100 115 80 115 80 105 60 105 60 115 40 115 40 135 60 135 60 125"/>
<rect x="120" y="40" width="20" height="20"/>
<polygon points="170 100 210 100 210 40 150 40 150 80 170 80 170 100"/>
</svg>`
document?.querySelectorAll('.ez-qr-code').forEach(icon => {
    icon.innerHTML = iconQrCode;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconQuestion = 
`<svg class="ez-qusetion ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C56.07,0,0,56.08,0,125s56.07,125,125,125,125-56.08,125-125S193.93,0,125,0Zm0,232.34c-59.19,0-107.34-48.15-107.34-107.34S65.81,17.66,125,17.66s107.34,48.15,107.34,107.34-48.15,107.34-107.34,107.34Z"/>
<path d="m124.02,174.6c-9.48,0-17.19,7.88-17.19,17.56s7.71,17.56,17.19,17.56,17.19-7.88,17.19-17.56-7.71-17.56-17.19-17.56Z"/>
<path d="m126.68,39.29c-23.31,0-42.86,17.66-45.79,41.21-2.28,1.2-3.75,3.62-3.75,6.27v7.2c0,3.89,3.11,7.06,6.93,7.06h13.78c3.82,0,6.93-3.17,6.93-7.06v-7.2c0-2.27-1.06-4.36-2.82-5.68,2.45-11.92,12.7-20.48,24.72-20.48,15.71,0,24.92,15.52,25.27,26.25.14,4.21-1.18,8.89-3.71,13.17-2.65,4.48-5.55,6.29-9.95,9.03-4.32,2.69-9.22,5.75-13.91,11.57-7.39,9.18-11,21.5-10.73,36.61l.07,3.68c6.95.02,13.89.03,20.84.05-.03-.98-.05-2.38-.02-4.07.1-5.01.17-8.97,1.41-13.31.63-2.2,1.71-5.85,4.58-9.44,1.13-1.41,1.66-2.55,8.66-6.92,5.46-3.4,11.64-7.26,16.93-16.18,4.61-7.77,6.99-16.62,6.71-24.92-.66-19.64-17.06-46.84-46.16-46.84Z"/>
</svg>`
document?.querySelectorAll('.ez-question').forEach(icon => {
    icon.innerHTML = iconQuestion;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconRecord = 
`<svg class="ez-record ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m20,20h70c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10H15C6.72,0,0,6.72,0,15v75c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10V20Z"/>
<path d="m150,10h0c0,5.52,4.48,10,10,10h70v70c0,5.52,4.48,10,10,10h0c5.52,0,10-4.48,10-10V15c0-8.28-6.72-15-15-15h-75c-5.52,0-10,4.48-10,10Z"/>
<path d="m10,150h0c-5.52,0-10,4.48-10,10v75c0,8.28,6.72,15,15,15h75c5.52,0,10-4.48,10-10h0c0-5.52-4.48-10-10-10H20v-70c0-5.52-4.48-10-10-10Z"/>
<path d="m230,230h-70c-5.52,0-10,4.48-10,10h0c0,5.52,4.48,10,10,10h75c8.28,0,15-6.72,15-15v-75c0-5.52-4.48-10-10-10h0c-5.52,0-10,4.48-10,10v70Z"/>
<ellipse cx="125" cy="125" rx="62.47" ry="62.52" transform="translate(-51.78 125) rotate(-45)"/>
</svg>`
document?.querySelectorAll('.ez-record').forEach(icon => {
    icon.innerHTML = iconRecord;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconRecycle = 
`<svg class="ez-recycle ez" width="1em" height="1em" viewBox="0 0 286 275" fill="currentColor">
<path d="m50.89,165.03l32.73,20.91-6.09-82.28L0,132.53l32.3,20.63-28.27,44.11c-10.8,16.84,1.34,38.93,21.39,38.93h78.63v-22H25.42c-2.61,0-4.2-2.88-2.79-5.08l28.26-44.09Z"/>
<path d="m145.64,23.52l30.03,46.85-32.81,20.84,77.45,29.07,6.31-82.26-32.33,20.53-30.04-46.87c-9.98-15.57-32.79-15.57-42.77,0l-39.49,61.62,18.58,11.87,39.51-61.65c1.3-2.03,4.27-2.03,5.57,0Z"/>
<path d="m281.97,197.27l-37.48-58.48-18.58,11.87,37.47,58.46c1.41,2.2-.17,5.08-2.79,5.08h-61.49v-38.2l-66.21,49.5,66.21,49.5v-38.8h61.48c20.05,0,32.19-22.08,21.39-38.93Z"/>
</svg>`
document?.querySelectorAll('.ez-recycle').forEach(icon => {
    icon.innerHTML = iconRecycle;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconReject = 
`<svg class="ez-reject ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,0C56.07,0,0,56.08,0,125s56.07,125,125,125,125-56.08,125-125S193.93,0,125,0Zm0,230c-57.9,0-105-47.1-105-105S67.1,20,125,20s105,47.1,105,105-47.1,105-105,105Z"/>
<polygon points="176.27 56.06 125 107.32 73.73 56.06 56.06 73.73 107.32 125 56.06 176.27 73.73 193.94 125 142.68 176.27 193.94 193.94 176.27 142.68 125 193.94 73.73 176.27 56.06"/>
</svg>`
document?.querySelectorAll('.ez-reject').forEach(icon => {
    icon.innerHTML = iconReject;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconRobot = 
`<svg class="ez-robot ez" width="1em" height="1em" viewBox="0 0 300 250" fill="currentColor">
<polygon points="260 77.5 260 97.5 280 97.5 280 152.5 260 152.5 260 172.5 300 172.5 300 77.5 260 77.5"/>
<polygon points="0 171.12 40 171.12 40 151.12 20 151.12 20 96.12 40 96.12 40 76.12 0 76.12 0 171.12"/>
<path d="m50,0v250h200V0H50Zm180,230H70V20h160v210Z"/>
<path d="m112.5,118.14c17.92,0,32.5-14.58,32.5-32.5s-14.58-32.5-32.5-32.5-32.5,14.58-32.5,32.5,14.58,32.5,32.5,32.5Zm0-45c6.89,0,12.5,5.61,12.5,12.5s-5.61,12.5-12.5,12.5-12.5-5.61-12.5-12.5,5.61-12.5,12.5-12.5Z"/>
<path d="m187.5,118.14c17.92,0,32.5-14.58,32.5-32.5s-14.58-32.5-32.5-32.5-32.5,14.58-32.5,32.5,14.58,32.5,32.5,32.5Zm0-45c6.89,0,12.5,5.61,12.5,12.5s-5.61,12.5-12.5,12.5-12.5-5.61-12.5-12.5,5.61-12.5,12.5-12.5Z"/>
<path d="m130,210h90v-70H80v20c0,27.62,22.39,50,50,50Zm70-50v30h-17v-30h17Zm-27,0v30h-18v-30h18Zm-28,0v30h-15c-1.01,0-2.01-.05-3-.15v-29.85h18Zm-28,0v27.04c-10.06-4.84-17-15.13-17-27.04h17Z"/>
</svg>`
document?.querySelectorAll('.ez-robot').forEach(icon => {
    icon.innerHTML = iconRobot;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconRotate = 
`<svg class="ez-rotate ez" width="1em" height="1em" viewBox="0 0 250 275" fill="currentColor">
<path d="m115,150v52.3h0c-52.38,0-95-42.62-95-95H0c.01,7.74.85,48.3,33.59,81.15,32.91,33.02,73.73,33.84,81.41,33.85v52.7l37.5-31.25,37.5-31.25-37.5-31.25-37.5-31.25Z"/>
<path d="m135,52.5V0l-37.5,31.25-37.5,31.25,37.5,31.25,37.5,31.25v-52.5c52.38,0,95,42.62,95,95h20c0-63.41-51.59-115-115-115Z"/>
</svg>`
document?.querySelectorAll('.ez-rotate').forEach(icon => {
    icon.innerHTML = iconRotate;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconRouter = 
`<svg class="ez-router ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<path d="m207.93,150v-37.5c0-6.9-5.6-12.5-12.5-12.5s-12.5,5.6-12.5,12.5v37.5H0v100h275v-100h-67.07Zm47.07,80H20v-60h235v60Z"/>
<path d="m166.5,100c0-9.65,7.85-17.5,17.5-17.5v-20c-20.68,0-37.5,16.82-37.5,37.5h20Z"/>
<path d="m184,20V0c-55.14,0-100,44.86-100,100h20c0-44.11,35.89-80,80-80Z"/>
<path d="m184,31.5c-37.77,0-68.5,30.73-68.5,68.5h19.59c0-26.97,21.94-48.91,48.91-48.91v-19.59Z"/>
<circle cx="50" cy="200" r="15"/>
<circle cx="95" cy="200" r="15"/>
<circle cx="140" cy="200" r="15"/>
<circle cx="185" cy="200" r="15"/>
</svg>`
document?.querySelectorAll('.ez-router').forEach(icon => {
    icon.innerHTML = iconRouter;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconScissors = 
`<svg class="ez-scissors ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m249.96,21.31c.05-.05.05-.14,0-.2-11.72-11.62-30.64-11.58-42.33.1l-82.57,82.57-30.73-30.73c6.33-12.12,7.87-27.13,1.93-42.52-4.71-12.2-14.33-21.97-26.51-26.72C27.29-12.73-12.73,27.3,3.82,69.77c4.75,12.19,14.54,21.82,26.74,26.52,15.42,5.94,30.45,4.38,42.58-1.99l30.7,30.71-30.7,30.71c-12.13-6.37-27.16-7.93-42.58-1.99-12.21,4.7-21.99,14.33-26.74,26.52-16.56,42.46,23.47,82.49,65.93,65.95,12.18-4.75,21.81-14.52,26.51-26.72,5.94-15.39,4.4-30.4-1.93-42.52L249.96,21.31ZM63.98,76.8c-26.95,12.51-53.29-13.83-40.78-40.79,2.61-5.63,7.18-10.2,12.81-12.81,26.95-12.51,53.29,13.83,40.78,40.79-2.61,5.63-7.18,10.2-12.81,12.81Zm0,150c-26.95,12.51-53.29-13.83-40.78-40.79,2.61-5.63,7.18-10.2,12.81-12.81,26.95-12.51,53.29,13.83,40.78,40.79-2.61,5.63-7.18,10.2-12.81,12.81Z"/>
<path d="m139.2,160.35l68.44,68.44c11.67,11.68,30.58,11.72,42.3.12.07-.07.07-.17,0-.24l-89.53-89.53-21.21,21.21Z"/>
</svg>`
document?.querySelectorAll('.ez-scissors').forEach(icon => {
    icon.innerHTML = iconScissors;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconServer = 
`<svg class="ez-server ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m0,250h250v-75H0v75Zm20-55h210v35H20v-35Z"/>
<path d="m0,162.5h250v-75H0v75Zm20-55h210v35H20v-35Z"/>
<path d="m0,0v75h250V0H0Zm230,55H20V20h210v35Z"/>
<circle cx="41" cy="212.5" r="10"/>
<circle cx="41" cy="125" r="10"/>
<circle cx="41" cy="37.5" r="10"/>
<circle cx="71" cy="212.5" r="10"/>
<circle cx="71" cy="125" r="10"/>
<circle cx="71" cy="37.5" r="10"/>
</svg>`
document?.querySelectorAll('.ez-server').forEach(icon => {
    icon.innerHTML = iconServer;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconShare = 
`<svg class="ez-share ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m202.5,155c-14.92,0-28.26,6.91-36.96,17.71l-72.06-36.25c.99-3.81,1.52-7.81,1.52-11.93s-.51-7.96-1.46-11.71l71.85-35.71c8.71,10.9,22.11,17.89,37.11,17.89,26.2,0,47.5-21.31,47.5-47.5S228.7,0,202.5,0s-47.5,21.3-47.5,47.5c0,4.04.51,7.97,1.47,11.71l-71.85,35.71c-8.71-10.9-22.11-17.89-37.12-17.89C21.31,77.03,0,98.34,0,124.53s21.31,47.5,47.5,47.5c14.93,0,28.26-6.92,36.98-17.71l72.04,36.24c-.99,3.82-1.52,7.82-1.52,11.94,0,26.19,21.31,47.5,47.5,47.5s47.5-21.31,47.5-47.5-21.3-47.5-47.5-47.5Zm-27.5-107.5c0-15.17,12.34-27.5,27.5-27.5s27.5,12.33,27.5,27.5-12.33,27.5-27.5,27.5c-7.1,0-13.59-2.71-18.47-7.15-4.98-4.52-8.3-10.83-8.92-17.91-.07-.8-.11-1.62-.11-2.44Zm-127.5,104.53c-15.16,0-27.5-12.34-27.5-27.5s12.34-27.5,27.5-27.5c7.11,0,13.6,2.71,18.48,7.15,4.97,4.52,8.29,10.84,8.91,17.91.07.8.11,1.62.11,2.44,0,.87-.04,1.73-.12,2.58-.66,7.06-4,13.36-9,17.86-4.87,4.39-11.32,7.06-18.38,7.06Zm155,77.97c-15.16,0-27.5-12.34-27.5-27.5,0-.87.04-1.73.12-2.58.66-7.07,4.01-13.38,9.01-17.86,4.87-4.39,11.32-7.06,18.37-7.06,15.17,0,27.5,12.33,27.5,27.5s-12.33,27.5-27.5,27.5Z"/>
</svg>`
document?.querySelectorAll('.ez-share').forEach(icon => {
    icon.innerHTML = iconShare;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconShoppingBag = 
`<svg class="ez-shopping-bag ez" width="1em" height="1em" viewBox="0 0 250 280" fill="currentColor">
<path d="m230,50h-43.75C180.46,21.47,155.24,0,125,0h0c-30.24,0-55.46,21.47-61.25,50H20L0,275h250l-20-225ZM125,15c21.91,0,40.34,14.83,45.83,35h-91.65c5.49-20.17,23.92-35,45.83-35Zm-85,55h22.5v14.21c-5.91,2.81-10,8.82-10,15.79,0,9.67,7.83,17.5,17.5,17.5s17.5-7.83,17.5-17.5c0-6.98-4.09-12.98-10-15.79v-14.21h95v13.89c-5.91,2.81-10,8.82-10,15.79,0,9.67,7.83,17.5,17.5,17.5s17.5-7.83,17.5-17.5c0-6.98-4.09-12.98-10-15.79v-13.89h22.5l15.68,145.04H24.32l15.68-145.04Zm-20,185l2.7-24.96h204.6l2.7,24.96H20Z"/>
</svg>`
document?.querySelectorAll('.ez-shopping-bag').forEach(icon => {
    icon.innerHTML = iconShoppingBag;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconShoppingCart = 
`<svg class="ez-shopping-cart ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m213.47,202.79h0c0-10.97-8.89-19.87-19.87-19.87h-105.25l-5.66-21.14h130.97L250,26.18H46.35L39.34,0H10C4.48,0,0,4.48,0,10h0c0,5.52,4.48,10,10,10h13.99l48.93,182.64c-9.09,4.56-15.02,14.49-13.61,25.63,1.43,11.3,10.62,20.32,21.94,21.57,15.08,1.67,27.85-10.1,27.85-24.84,0-9.57-5.38-17.87-13.27-22.08h94.43c-8.48,4.52-14.06,13.77-13.18,24.23,1.02,12.22,11.07,22.03,23.31,22.79,14.53.9,26.6-10.61,26.6-24.95,0-9.67-5.49-18.05-13.53-22.21Zm10.46-156.61l-25.62,95.6h-120.98l-25.62-95.6h172.22Z"/>
</svg>`
document?.querySelectorAll('.ez-shopping-cart').forEach(icon => {
    icon.innerHTML = iconShoppingCart;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSitemap = 
`<svg class="ez-sitemap ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m225,180v-60h-90v-40h30V0h-80v80h30v40H25v60H0v70h70v-70h-25v-40h70v40h-25v70h70v-70h-25v-40h70v40h-25v70h70v-70h-25ZM105,60V20h40v40h-40Zm-55,140v30h-30v-30h30Zm90,0v30h-30v-30h30Zm90,30h-30v-30h30v30Z"/>
</svg>`
document?.querySelectorAll('.ez-sitemap').forEach(icon => {
    icon.innerHTML = iconSitemap;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSkipBackwards = 
`<svg class="ez-skip-backwards ez" width="1em" height="1em" viewBox="0 0 250 200" fill="currentColor">
<path d="m231.29,2.56l-51.29,41.21-48.95,39.32V11.52c0-9.66-11.18-15.01-18.71-8.97l-51.29,41.21L5.6,88.31c-7.47,6-7.47,17.38,0,23.38l55.45,44.55,51.29,41.21c7.53,6.05,18.71.69,18.71-8.97v-71.56l48.95,39.32,51.29,41.21c7.53,6.05,18.71.69,18.71-8.97V11.52c0-9.66-11.18-15.01-18.71-8.97Z"/>
</svg>`
document?.querySelectorAll('.ez-skip-backwards').forEach(icon => {
    icon.innerHTML = iconSkipBackwards;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSkipForward = 
`<svg class="ez-skip-forward ez" width="1em" height="1em" viewBox="0 0 250 200" fill="currentColor">
<path d="m18.71,2.56l51.29,41.21,48.95,39.32V11.52c0-9.66,11.18-15.01,18.71-8.97l51.29,41.21,55.45,44.55c7.47,6,7.47,17.38,0,23.38l-55.45,44.55-51.29,41.21c-7.53,6.05-18.71.69-18.71-8.97v-71.56l-48.95,39.32-51.29,41.21c-7.53,6.05-18.71.69-18.71-8.97V11.52C0,1.87,11.18-3.49,18.71,2.56Z"/>
</svg>`
document?.querySelectorAll('.ez-skip-forward').forEach(icon => {
    icon.innerHTML = iconSkipForward;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSmileWide = 
`<svg class="ez-smile-wide ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m124.2,0C55.72,0,0,55.72,0,124.2s55.72,124.2,124.2,124.2,124.2-55.72,124.2-124.2S192.68,0,124.2,0Zm0,230c-58.34,0-105.8-47.46-105.8-105.8S65.86,18.4,124.2,18.4s105.8,47.46,105.8,105.8-47.46,105.8-105.8,105.8Z"/>
<ellipse cx="89.2" cy="81.91" rx="20" ry="25"/>
<ellipse cx="159.2" cy="81.91" rx="20" ry="25"/>
<path d="m199,133.58c-22.02,12.69-47.56,19.95-74.8,19.95s-52.78-7.26-74.8-19.95h-.2c0,41.42,33.58,75,75,75s75-33.58,75-75h-.2Z"/>
</svg>`
document?.querySelectorAll('.ez-smile-wide').forEach(icon => {
    icon.innerHTML = iconSmileWide;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSmileWink = 
`<svg class="ez-smile-wink ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m124.2,0C55.72,0,0,55.72,0,124.2s55.72,124.2,124.2,124.2,124.2-55.72,124.2-124.2S192.68,0,124.2,0Zm0,230c-58.34,0-105.8-47.46-105.8-105.8S65.86,18.4,124.2,18.4s105.8,47.46,105.8,105.8-47.46,105.8-105.8,105.8Z"/>
<ellipse cx="90.2" cy="81.91" rx="20" ry="25"/>
<path d="m173.2,71.91h-30c-5.52,0-10,4.48-10,10s4.48,10,10,10h30c5.52,0,10-4.48,10-10s-4.48-10-10-10Z"/>
<path d="m48.51,124.2c-2.24,29.33,12.99,58.49,40.86,72.62,27.87,14.14,60.39,9.2,82.73-9.92-23.38.27-47.17-4.93-69.46-16.24-22.29-11.31-40.54-27.43-54.13-46.46Z"/>
</svg>`
document?.querySelectorAll('.ez-smile-wink').forEach(icon => {
    icon.innerHTML = iconSmileWink;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSort = 
`<svg class="ez-sort ez" width="1em" height="1em" viewBox="0 0 240 248" fill="currentColor">
<rect x="0" y="0" width="240" height="40" rx="20" ry="20"/>
<rect x="0" y="100" width="180" height="40" rx="20" ry="20"/>
<rect x="1.52" y="200" width="120" height="40" rx="20" ry="20"/>
</svg>`
document?.querySelectorAll('.ez-sort').forEach(icon => {
    icon.innerHTML = iconSort;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSpeaker = 
`<svg class="ez-speaker ez" width="1em" height="1em" viewBox="0 0 175 250" fill="currentColor">
<path d="m0,0v250h175V0H0Zm155,230H20V20h135v210Z"/>
<path d="m87.5,217.51c30.33,0,55-24.67,55-55s-24.67-55-55-55-55,24.67-55,55,24.67,55,55,55Zm0-90c19.3,0,35,15.7,35,35s-15.7,35-35,35-35-15.7-35-35,15.7-35,35-35Z"/>
<path d="m87.5,94.16c16.54,0,30-13.46,30-30s-13.46-30-30-30-30,13.46-30,30,13.46,30,30,30Zm0-40c5.51,0,10,4.49,10,10s-4.49,10-10,10-10-4.49-10-10,4.49-10,10-10Z"/>
</svg>`
document?.querySelectorAll('.ez-speaker').forEach(icon => {
    icon.innerHTML = iconSpeaker;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSpeakers = 
`<svg class="ez-speakers ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<path d="m0,250h175V0H0v250ZM20,20h135v210H20V20Z"/>
<path d="m87.5,107.51c-30.33,0-55,24.67-55,55s24.67,55,55,55,55-24.67,55-55-24.67-55-55-55Zm0,90c-19.3,0-35-15.7-35-35s15.7-35,35-35,35,15.7,35,35-15.7,35-35,35Z"/>
<path d="m87.5,94.16c16.54,0,30-13.46,30-30s-13.46-30-30-30-30,13.46-30,30,13.46,30,30,30Zm0-40c5.51,0,10,4.49,10,10s-4.49,10-10,10-10-4.49-10-10,4.49-10,10-10Z"/>
<polygon points="190.45 0 190.45 20 255 20 255 230 191.35 230 191.35 250 275 250 275 0 190.45 0"/>
<path d="m246.34,162.51c0-30.33-24.67-55-55-55v20c19.3,0,35,15.7,35,35s-15.7,35-35,35v20c30.33,0,55-24.67,55-55Z"/>
<path d="m220.45,64.16c0-16.54-13.46-30-30-30v20c5.51,0,10,4.49,10,10s-4.49,10-10,10v20c16.54,0,30-13.46,30-30Z"/>
</svg>`
document?.querySelectorAll('.ez-speakers').forEach(icon => {
    icon.innerHTML = iconSpeakers;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconStar = 
`<svg class="ez-star ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m46.71,238.55l11.28-77.93L3.01,106.8c-5.83-5.7-2.74-15.61,5.29-17l73.99-12.8L114.22,5.9c3.46-7.71,14.32-7.91,18.08-.35l34.59,69.71,74.4,9.73c8.09,1.06,11.58,10.84,5.98,16.78l-52.91,56.05,14.22,77.41c1.51,8.2-7.09,14.53-14.47,10.67l-66.94-35.02-65.57,37.76c-7.23,4.16-16.08-1.84-14.89-10.1Zm-15.74-132.36l48.27,47.25-9.79,67.61,57.25-32.97,58.5,30.6-12.35-67.2,46.43-49.19-65.56-8.57-29.92-60.3-27.62,61.5-65.21,11.28Z"/>
</svg>`
document?.querySelectorAll('.ez-star').forEach(icon => {
    icon.innerHTML = iconStar;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconStop = 
`<svg class="ez-stop ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<rect width="250" height="250" rx="30" ry="30"/>
</svg>`
document?.querySelectorAll('.ez-stop').forEach(icon => {
    icon.innerHTML = iconStop;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconSun = 
`<svg class="ez-sun ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m128.54,50.08c-44.13-2.03-80.46,34.31-78.43,78.45,1.77,38.47,32.92,69.62,71.39,71.39,44.13,2.03,80.46-34.31,78.43-78.45-1.77-38.47-32.92-69.62-71.39-71.39Zm.07,129.8c-33.15,2.12-60.59-25.33-58.47-58.49,1.75-27.4,23.88-49.53,51.28-51.28,33.15-2.12,60.59,25.33,58.47,58.49-1.75,27.4-23.88,49.53-51.28,51.28Z"/>
<rect x="0" y="115" width="39.99" height="20" rx="10" ry="10"/>
<rect x="210.01" y="113.02" width="39.99" height="20" rx="10" ry="10"/>
<rect x="115.02" y="0" width="20" height="40" rx="10" ry="10"/>
<rect x="115.02" y="210" width="20" height="40" rx="10" ry="10"/>
<rect x="189.88" y="179.28" width="20" height="40" rx="10" ry="10" transform="translate(-82.37 199.68) rotate(-45)"/>
<rect x="41.15" y="30.53" width="20" height="40" rx="10" ry="10" transform="translate(-20.75 50.96) rotate(-45)"/>
<rect x="31.15" y="189.28" width="40" height="20" rx="10" ry="10" transform="translate(-125.92 94.52) rotate(-45)"/>
<rect x="179.88" y="40.53" width="40" height="20" rx="10" ry="10" transform="translate(22.81 156.12) rotate(-45)"/>
</svg>`
document?.querySelectorAll('.ez-sun').forEach(icon => {
    icon.innerHTML = iconSun;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTarget = 
`<svg class="ez-target ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m125,64.91c9.51,0,18.93,2.29,27.38,6.64l13.67-13.67c-12.36-7.59-26.52-11.61-41.05-11.61-43.41,0-78.73,35.32-78.73,78.73s35.32,78.73,78.73,78.73,78.73-35.32,78.73-78.73c0-14.56-4.03-28.74-11.65-41.12l-13.67,13.67c4.37,8.47,6.67,17.92,6.67,27.46,0,33.13-26.95,60.09-60.09,60.09s-60.09-26.95-60.09-60.09,26.95-60.09,60.09-60.09Z"/>
<path d="m234.72,65.24h-21.85c12.09,17.71,18.49,38.34,18.49,59.76,0,58.65-47.71,106.36-106.36,106.36S18.64,183.65,18.64,125,66.35,18.64,125,18.64c21.41,0,42.03,6.39,59.74,18.48V15.27C166.46,5.28,145.87,0,125,0,56.07,0,0,56.07,0,125s56.07,125,125,125,125-56.07,125-125c0-20.88-5.29-41.48-15.28-59.76Z"/>
<path d="m125,92.5c-17.95,0-32.5,14.55-32.5,32.5s14.55,32.5,32.5,32.5,32.5-14.55,32.5-32.5c0-5.58-1.41-10.84-3.89-15.43l53.33-53.33h27.36c1.52-1.52,3.04-3.04,4.56-4.56-1.14-1.14-2.28-2.28-3.42-3.43h6.85c1.52-1.52,3.03-3.03,4.55-4.55-4.78-4.78-9.55-9.56-14.33-14.34h-11.87v-11.87l-13.96-13.96-4.94,4.94v6.09l-3.05-3.05-4.94,4.94v26.6l-53.33,53.33c-4.59-2.48-9.84-3.89-15.43-3.89Z"/>
</svg>`
document?.querySelectorAll('.ez-target').forEach(icon => {
    icon.innerHTML = iconTarget;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTerminal = 
`<svg class="ez-terminal ez" width="1em" height="1em" viewBox="0 -10 275 225" fill="currentColor">
<path d="m0,0v225h275V0H0Zm255,205H20V20h235v185Z"/>
<rect x="110" y="170.28" width="125" height="20"/>
<polygon points="54.14 190.28 131.92 112.5 54.14 34.72 40 48.86 103.64 112.5 40 176.14 54.14 190.28"/>
</svg>`
document?.querySelectorAll('.ez-terminal').forEach(icon => {
    icon.innerHTML = iconTerminal;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTimes = 
`<svg class="ez-times ez" width="1em" height="1em" viewBox="0 -10 275 225" fill="currentColor">
<path d="m142.68,125L246.34,21.34c4.88-4.88,4.88-12.8,0-17.68h0c-4.88-4.88-12.8-4.88-17.68,0l-103.66,103.66L21.34,3.66C16.46-1.22,8.54-1.22,3.66,3.66c-4.88,4.88-4.88,12.8,0,17.68l103.66,103.66L3.66,228.66c-4.88,4.88-4.88,12.8,0,17.68,4.88,4.88,12.8,4.88,17.68,0l103.66-103.66,103.66,103.66c4.88,4.88,12.8,4.88,17.68,0h0c4.88-4.88,4.88-12.8,0-17.68l-103.66-103.66Z"/>
</svg>`
document?.querySelectorAll('.ez-times').forEach(icon => {
    icon.innerHTML = iconTimes;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconToolbox = 
`<svg class="ez-toolbox ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m187.5,50h0v-15c0-19.33-15.67-35-35-35h-55.01c-19.33,0-35,15.67-35,35v15h0c-4.16,0-8.15,1.65-11.1,4.6L0,106v144.01h250V105.86l-51.16-51.16c-3.01-3.01-7.08-4.7-11.33-4.7Zm-90-30h54.99c8.29,0,15,6.72,15,15v14.99h-85v-14.99c0-8.29,6.72-15,15-15Zm132.5,210.01H20v-70h32.5v9.17c0,11.5,9.33,20.83,20.83,20.83h3.34c11.5,0,20.83-9.33,20.83-20.83v-9.17h55v9.17c0,11.5,9.33,20.83,20.83,20.83h3.34c11.5,0,20.83-9.33,20.83-20.83v-9.17h32.5v70Zm-157.5-99.18c0-.45.37-.82.83-.82h3.34c.46,0,.83.37.83.82v38.35c0,.46-.37.83-.83.83h-3.34c-.46,0-.83-.37-.83-.83v-38.35Zm100,0c0-.45.37-.82.83-.82h3.34c.46,0,.83.37.83.82v38.35c0,.46-.37.83-.83.83h-3.34c-.46,0-.83-.37-.83-.83v-38.35Zm57.5,9.18h-32.5v-9.18c0-11.48-9.34-20.82-20.83-20.82h-3.34c-11.49,0-20.83,9.34-20.83,20.82v9.18h-55v-9.18c0-11.48-9.34-20.82-20.83-20.82h-3.34c-11.49,0-20.83,9.34-20.83,20.82v9.18H20v-25.72l44.28-44.29h121.58l44.14,44.15v25.86Z"/>
</svg>`
document?.querySelectorAll('.ez-toolbox').forEach(icon => {
    icon.innerHTML = iconToolbox;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTools = 
`<svg class="ez-tools ez" width="1em" height="1em" viewBox="0 0 275 275" fill="currentColor">
<path d="m253.06,128c15.69-15.68,22.97-36.63,21.82-57.19,0-.07,0-.15-.01-.22-.58-10.28-13.04-15.04-20.33-7.77l-24.89,24.85-37.76-4.67-4.58-37.79,23.67-23.61h0s0,0,0,0c5.32-5.32,5.08-13.76-.67-18.63-3.15-2.67-4.62-2.75-6.14-2.84-20.59-1.15-41.57,6.13-57.27,21.81-15.68,15.67-22.95,36.6-21.82,57.16l-16.09,16.08-11.1-11.09v-45.86h0s0,0,0,0L34.57.39,0,34.94l37.86,63.28h0s45.89,0,45.89,0l60.15,60.1c-11.72,11.71-11.72,30.71,0,42.42l74.3,74.25,56.61-56.57-68.82-68.78c17.18-1.36,33.97-8.56,47.08-21.66Zm-175.17-49.77h-28.68s-24.03-40.17-24.03-40.17l12.51-12.5,40.19,24.01h0v28.66Zm80.16,65.96l-34.89-34.87,23.01-22.99c-3.69-17.58,1.27-36.63,14.9-50.25,5.78-5.78,12.54-10,19.76-12.66l-7.65,7.63c-4.36,4.35-6.47,10.45-5.73,16.56l4.58,37.77c1.11,9.13,8.29,16.33,17.41,17.46l37.76,4.67c6.11.76,12.23-1.34,16.59-5.69l7.82-7.8c-2.66,7.24-6.9,14.04-12.7,19.83-13.63,13.62-32.69,18.58-50.28,14.89l-6.77,6.77c-8.52-.73-17.28,2.16-23.8,8.67h0Zm88.45,74.24l-28.3,28.28-53.07-53.03c-7.82-7.81-7.82-20.47,0-28.28h0c7.82-7.81,20.49-7.81,28.3,0l53.07,53.03Z"/>
<path d="m76.58,240.71c-11.19,11.18-29.27,12.29-41.23,1.95-13.34-11.53-13.89-31.71-1.64-43.95l61.05-61.01-14.15-14.14-61.05,61.01c-19.54,19.53-19.54,51.18,0,70.71h0c19.54,19.53,51.22,19.53,70.76,0l39.82-39.8c-.05-.05-.11-.11-.16-.16-7.6-7.74-19.95-8.02-27.62-.35l-25.77,25.75Z"/>
<path d="m36.65,220.93c-1.24,9.81,7.02,18.07,16.85,16.83,6.69-.85,12.08-6.24,12.93-12.93,1.24-9.81-7.02-18.07-16.84-16.83-6.69.84-12.09,6.24-12.93,12.93Z"/>
</svg>`
document?.querySelectorAll('.ez-tools').forEach(icon => {
    icon.innerHTML = iconTools;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTrain = 
`<svg class="ez-train ez" width="1em" height="1em" viewBox="0 0 200 250" fill="currentColor">
<path d="m175,50h-65v-30h20.71l35.46,12.91c5.19,1.89,10.93-.79,12.82-5.98h0c1.89-5.19-.79-10.93-5.97-12.82L134.23,0h-68.45L24.7,14.95c-5.19,1.89-7.86,7.63-5.98,12.82h0c1.89,5.19,7.63,7.86,12.81,5.98l37.76-13.74h20.7v30H25c-13.81,0-25,11.19-25,25v175h200V75c0-13.81-11.19-25-25-25ZM20,70h70v70H20v-70Zm160,160H20v-70h160v70Zm0-90h-70v-70h70v70Z"/>
<path d="m54.13,182.6c-8.18-1.03-15.05,5.85-14.02,14.02.7,5.57,5.2,10.07,10.77,10.77,8.18,1.03,15.05-5.85,14.02-14.02-.7-5.57-5.2-10.07-10.77-10.77Z"/>
<path d="m145.88,207.4c8.18,1.03,15.05-5.85,14.02-14.02-.7-5.57-5.2-10.07-10.77-10.77-8.18-1.03-15.05,5.85-14.02,14.02.7,5.57,5.2,10.07,10.77,10.77Z"/>
</svg>`
document?.querySelectorAll('.ez-train').forEach(icon => {
    icon.innerHTML = iconTrain;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconTrash = 
`<svg class="ez-trash ez" width="1em" height="1em" viewBox="0 0 225 250" fill="currentColor">
<path d="m159.49,32.02s-.02,0-.02-.02V0H59.47v31.99s0,.02-.02.02H25.02C11.2,32.02,0,43.22,0,57.04v28.99s0,.02.02.02h11.79s.02,0,.02.02l14.33,163.91s.01.02.02.02h172.85s.02,0,.02-.02l14.34-163.91s.01-.02.02-.02h11.56s.02,0,.02-.02v-28.99c0-13.82-11.2-25.02-25.02-25.02h-40.49Zm-80-12h59.96s.02,0,.02.02v11.95s0,.02-.02.02h-59.96s-.02,0-.02-.02v-11.95s0-.02.02-.02ZM31.93,86.05h161.37s.02.01.02.02l-12.59,143.91s-.01.02-.02.02H44.53s-.02,0-.02-.02l-12.6-143.91s0-.02.02-.02Zm173.05-20H20.02s-.02,0-.02-.02v-9.01c0-2.76,2.24-5,5-5h175c2.76,0,5,2.24,5,5v9.02s0,.02-.02.02Z"/>
<rect x="102.5" y="100.53" width="20" height="114.99" rx="10" ry="10"/>
<rect x="99.29" y="148.03" width="114.99" height="20" rx="10" ry="10" transform="translate(-14.3 300.44) rotate(-85)"/>
<rect x="58.33" y="100.53" width="20" height="114.99" rx="10" ry="10" transform="translate(-13.51 6.56) rotate(-5)"/>
</svg>`
document?.querySelectorAll('.ez-trash').forEach(icon => {
    icon.innerHTML = iconTrash;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconUpload = 
`<svg class="ez-upload ez" width="1em" height="1em" viewBox="0 0 225 250" fill="currentColor">
<polygon points="178.5 81.17 124.13 81.17 124.13 201.31 100.87 201.31 100.87 81.17 46.5 81.17 112.5 0 178.5 81.17"/>
<polygon points="202.72 187.34 202.72 229.02 22.29 229.02 22.29 187.34 0 187.34 0 250 225 250 225 187.34 202.72 187.34"/>
</svg>`
document?.querySelectorAll('.ez-upload').forEach(icon => {
    icon.innerHTML = iconUpload;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconUser = 
`<svg class="ez-user ez" width="1em" height="1em" viewBox="0 0 225 250" fill="currentColor">
<path d="m173.58,106.82l-.86-.11-.52.69c-4.5,5.92-9.83,11.14-15.85,15.51l-3.7,2.69h13.19c22.18,0,40.23,18.52,40.23,41.28v63.82h-23.9v-53.86h-18.94v53.86H59.71v-54.18h-18.94v54.18h-21.83v-63.82c0-22.76,18.05-41.28,40.23-41.28h13.19l-3.7-2.69c-6.02-4.37-11.35-9.59-15.85-15.51l-.52-.69-.86.11C22.11,110.76,0,136.58,0,166.87v83.13h225v-83.13c0-30.29-22.11-56.11-51.42-60.05Z"/>
<path d="m108.39,125.82c1.35.09,2.69.13,4.03.13,16.66,0,32.72-6.61,44.57-18.46,12.8-12.81,19.48-30.53,18.32-48.63C173.3,27.39,148.06,2.14,116.61.13c-18.08-1.15-35.8,5.53-48.6,18.34-12.8,12.81-19.48,30.53-18.32,48.63,2.01,31.47,27.24,56.72,58.7,58.73Zm-39.82-66.88c1.89-21.24,18.68-38.03,39.9-39.92,1.33-.12,2.65-.18,3.97-.18,11.69,0,22.9,4.6,31.23,12.94,9.27,9.28,13.92,22.12,12.76,35.22-1.89,21.24-18.67,38.03-39.9,39.93-13.1,1.17-25.93-3.48-35.21-12.76-9.27-9.28-13.92-22.12-12.75-35.23Z"/>
</svg>`
document?.querySelectorAll('.ez-user').forEach(icon => {
    icon.innerHTML = iconUser;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconUtensils = 
`<svg class="ez-utensils ez" width="1em" height="1em" viewBox="0 0 285 250" fill="currentColor">
<path d="m63.76,104.21c7.38-1.62,12.73-8.3,12.73-15.9V.01h-19.94v84.83h-8.74V.01h-19.94v84.83h-7.94V.01H0v88.29c0,3.66,1.19,7.12,3.43,10,3.09,3.99,7.74,6.28,12.76,6.28h11.59v144.93h20.13V104.58h12.4c1.15,0,2.31-.12,3.46-.37Z"/>
<path d="m275.1.51c-2.63,0-5.26.2-7.83.58h-2.06v.36c-13.97,2.68-26.31,10.99-33.98,22.95-3.21,5-5.49,10.45-6.79,16.2-.82,3.61-1.24,7.37-1.24,11.15v58.88c0,9.8,2.83,19.33,8.17,27.56,6.96,10.73,17.61,18.48,29.98,21.84,1.28.35,2.57.65,3.86.9v89.08h19.78V.51h-9.9Zm-9.89,140.26c-13.13-4.2-22.23-16.47-22.23-30.13v-58.88c0-5.23,1.32-10.4,3.82-14.95,3.93-7.23,10.57-12.69,18.41-15.2v119.17Z"/>
<path d="m241.52,196.91c-4.19-1.79-8.82-.88-12.03,2.34-19.76,19.81-45.96,30.72-73.77,30.72s-56.77-12.23-76.51-33.55c-.21-.23-.42-.46-.63-.69-3.15-3.46-8.16-4.73-12.47-2.92s-6.65,5.53-6.65,10.03v.53l.34.41c5.19,6.36,11.03,12.24,17.36,17.47,22.11,18.24,50.01,28.28,78.56,28.28,34.95,0,68.48-15.01,92.01-41.19l.38-.43v-.7c0-4.42-2.51-8.57-6.58-10.31Z"/>
<path d="m94.25,31.6c2,1.2,4.22,1.81,6.44,1.81,2.02,0,4.05-.5,5.92-1.5l.79-.42c14.8-7.8,31.51-11.93,48.32-11.93,14.68,0,28.89,3.03,42.24,9,3.21,1.43,6.77,1.45,10.01.03s5.58-4.13,6.81-7.38l1.91-5.06-1.13-.63C197.3,5.37,176.61,0,155.72,0c-17.23,0-33.93,3.51-49.62,10.42-5.92,2.61-11.7,5.72-17.18,9.25l-.69.44v.45c0,4.46,2.2,8.73,6.02,11.03Z"/>
<path d="m100.81,180.52c13.87,13.8,32.15,21.87,51.48,22.7,1.16.05,2.31.07,3.43.07,30.49,0,58.38-18.07,71.07-46.03.84-1.85.58-4.01-.67-5.61l-5.8-7.38c-1.04-1.28-2.58-2.02-4.27-2.02-2.25,0-4.3,1.42-5.09,3.53-8.67,22.99-30.87,38.43-55.24,38.43-32.57,0-59.07-26.67-59.07-59.45,0-7.02,1.21-13.9,3.6-20.45,2.42-6.64,5.98-12.74,10.6-18.16,11.25-13.24,27.6-20.84,44.86-20.84,15.26,0,29.75,5.88,40.84,16.57,1.64,1.58,4.13,2.1,6.2,1.15,1.95-.9,3.15-2.77,3.15-4.94v-10.86c0-1.68-.79-3.26-2.11-4.3-13.87-10.93-30.49-16.7-48.08-16.7-19.55,0-38.27,7.33-52.72,20.63-10.15,9.35-17.68,21.2-21.78,34.29-2.83,8.98-4,18.36-3.5,27.87,1.03,19.41,9.23,37.7,23.08,51.49Z"/>
</svg>`
document?.querySelectorAll('.ez-utensils').forEach(icon => {
    icon.innerHTML = iconUtensils;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconVideoCamera = 
`<svg class="ez-video-camera ez" width="1em" height="1em" viewBox="0 0 275 250" fill="currentColor">
<path d="m254.88,107.32l-54.9,19.98v-12.28c.02-8.29-6.7-15.01-14.99-15.01h-3.85c11.55-10.52,18.81-25.68,18.81-42.5,0-31.71-25.79-57.5-57.5-57.5-26.16,0-48.27,17.56-55.22,41.51-8.49-12.94-23.13-21.51-39.73-21.51C21.31,20,0,41.31,0,67.5c0,12.64,4.97,24.12,13.04,32.64-7.36.96-13.04,7.24-13.04,14.86v119.99c0,8.29,6.72,15,15,15h169.98c8.29,0,15.01-6.72,15-15.01v-12.29s54.89,19.98,54.89,19.98c9.78,3.56,20.12-3.68,20.12-14.09v-107.17c0-10.41-10.34-17.65-20.12-14.09ZM142.45,20c20.68,0,37.5,16.82,37.5,37.5s-16.82,37.5-37.5,37.5-37.5-16.82-37.5-37.5,16.82-37.5,37.5-37.5Zm-50.67,64.66c3.11,5.77,7.17,10.96,11.98,15.34h-21.66c4.15-4.41,7.46-9.61,9.69-15.34Zm-44.28-44.66c15.16,0,27.5,12.34,27.5,27.5s-12.34,27.5-27.5,27.5-27.5-12.34-27.5-27.5,12.34-27.5,27.5-27.5Zm207.5,181.44l-68.31-24.87c-3.26-1.19-6.71,1.23-6.71,4.7v28.73H20v-110h159.98v28.71c0,3.47,3.45,5.89,6.71,4.7l68.31-24.86v92.88Z"/>
<circle cx="47.5" cy="67.5" r="12.5"/>
<circle cx="142.45" cy="57.5" r="22.5"/>
</svg>`
document?.querySelectorAll('.ez-video-camera').forEach(icon => {
    icon.innerHTML = iconVideoCamera;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconVolumeOff = 
`<svg class="ez-volume-off ez" width="1em" height="1em" viewBox="0 0 256 240" fill="currentColor">
<path d="m147.15,0c-3.43,0-6.72,1.36-9.15,3.79l-66.24,66.21h0s-51.75,0-51.75,0c-11.05,0-20.01,8.95-20.01,20v60c0,11.05,8.96,20,20.01,20h51.75l66.25,66.21c2.43,2.42,5.71,3.79,9.14,3.79h0c7.14,0,12.93-5.79,12.93-12.93V12.93c0-7.14-5.79-12.93-12.94-12.93Zm-7.07,210l-60.04-60H25.01c-2.76,0-5-2.24-5-5v-50c0-2.76,2.24-5,5-5h55.03s60.04-60,60.04-60v180Z"/>
<path d="m253.07,84.64h0c-3.91-3.9-10.24-3.9-14.14,0l-21.23,21.22-21.23-21.22c-3.91-3.9-10.24-3.9-14.14,0h0c-3.91,3.91-3.91,10.24,0,14.15l21.22,21.21-21.22,21.21c-3.91,3.91-3.91,10.24,0,14.15h0c3.91,3.9,10.24,3.9,14.14,0l21.23-21.22,21.23,21.22c3.91,3.9,10.24,3.9,14.14,0h0c3.91-3.91,3.91-10.24,0-14.15l-21.22-21.21,21.22-21.21c3.91-3.91,3.91-10.24,0-14.15Z"/>
</svg>`
document?.querySelectorAll('.ez-volume-off').forEach(icon => {
    icon.innerHTML = iconVolumeOff;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconVolumeUp = 
`<svg class="ez-volume-up ez" width="1em" height="1em" viewBox="0 0 266 240" fill="currentColor">
<path d="m147.07,0c-3.43,0-6.72,1.36-9.15,3.79l-66.2,66.21h0s-51.72,0-51.72,0c-11.05,0-20,8.95-20,20v60c0,11.05,8.95,20,20,20h51.72l66.21,66.21c2.42,2.42,5.71,3.79,9.14,3.79,7.14,0,12.93-5.79,12.93-12.93V12.93c0-7.14-5.79-12.93-12.93-12.93Zm-7.07,210l-60-60H25c-2.76,0-5-2.24-5-5v-50c0-2.76,2.24-5,5-5h55s60-60,60-60v180Z"/>
<path d="m176,40.63h0c0,5.02,3.72,9.29,8.7,9.91,34.51,4.3,61.3,33.81,61.3,69.46s-26.79,65.16-61.3,69.46c-4.98.62-8.7,4.89-8.7,9.91h0c0,5.98,5.21,10.68,11.14,9.94,44.39-5.51,78.86-43.46,78.86-89.31s-34.47-83.81-78.86-89.31c-5.93-.74-11.14,3.96-11.14,9.94Z"/>
<path d="m226,120c0-23.26-15.96-42.85-37.5-48.42-6.33-1.64-12.5,3.15-12.5,9.69h0c0,4.58,3.13,8.54,7.56,9.69,12.89,3.36,22.44,15.1,22.44,29.04s-9.55,25.68-22.44,29.04c-4.43,1.16-7.56,5.11-7.56,9.69h0c0,6.54,6.17,11.33,12.5,9.69,21.54-5.56,37.5-25.16,37.5-48.42Z"/>
</svg>`
document?.querySelectorAll('.ez-volume-up').forEach(icon => {
    icon.innerHTML = iconVolumeUp;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});

const iconWifi = 
`<svg class="ez-wifi ez" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
<path d="m176.78,73.22C129.56,26,66.78,0,0,0v24.75c124.2,0,225.25,101.05,225.25,225.25h24.75c0-66.78-26-129.56-73.22-176.78Z"/>
<path d="m0,61.88v24.75c90.08,0,163.37,73.29,163.37,163.37h24.75C188.12,146.27,103.73,61.88,0,61.88Z"/>
<path d="m0,123.76v24.75c55.96,0,101.49,45.53,101.49,101.49h24.75c0-69.61-56.63-126.24-126.24-126.24Z"/>
<circle cx="30" cy="220" r="30"/>
</svg>`
document?.querySelectorAll('.ez-wifi').forEach(icon => {
    icon.innerHTML = iconWifi;
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'sub';
});







// CUSTOM ICON SIZES 


/* These scripts below seeks out ez-"size" tagged ICON-elements (if there is one). 
 When script finds ICON-element tagged with ez-"size" class, script changes the child-elements (SVG-element) width and height attributes to match the class size. */


// EXTRA-SMALL ICON | ez-s class.
const sIcon = document?.querySelectorAll('.ez-s');
    sIcon.forEach(sIcon => {
        sIcon.style.verticalAlign = 'baseline';
        let iconSVG = sIcon.querySelectorAll('.ez');
            iconSVG.forEach(svg => {
                svg.setAttribute('width', '.75em');
                svg.setAttribute('height', '.75em');
            });
    });


// MEDIUM ICON | ez-m class.
const mIcon = document?.querySelectorAll('.ez-m');
    mIcon.forEach(mIcon => {
        let iconSVG = mIcon.querySelectorAll('.ez');
            iconSVG.forEach(svg => {
                svg.setAttribute('width', '1em');
                svg.setAttribute('height', '1em');
            });
    });


// LARGE | ez-l class.
const lIcon = document?.querySelectorAll('.ez-l');
    lIcon.forEach(lIcon => {
        let iconSVG = lIcon.querySelectorAll('.ez');
            iconSVG.forEach(svg => {
                svg.setAttribute('width', '1.2em');
                svg.setAttribute('height', '1.2em');
            });
    });


// EXTRA LARGE | ez-xl class.
const xlIcon = document?.querySelectorAll('.ez-xl');
    xlIcon.forEach(xlIcon => {
        let iconSVG = xlIcon.querySelectorAll('.ez');
            iconSVG.forEach(svg => {
                svg.setAttribute('width', '1.5em');
                svg.setAttribute('height', '1.5em');
            });
    });


// XXL | ez-xxl class.
const xxlIcon = document?.querySelectorAll('.ez-xxl');
xxlIcon.forEach(xxlIcon => {
    let iconSVG = xxlIcon.querySelectorAll('.ez');
        iconSVG.forEach(svg => {
            svg.setAttribute('width', '1.75em');
            svg.setAttribute('height', '1.75em');
        });
});