// script.js
const terminalText = `root@yuvxraj_Hub:~# cd Portfolio/
root@yuvxraj_Hub:~/Portfolio# cat about.txt
Hello, Friend! Myself, YUVARAJ M.

I'm an Aspiring Cybersecurity Enthusiast, who likes to explore Multiple Dimensions of Information Security and to work with Various Technologies in the field.

I developed a Huge interest, in the field of Cybersecurity at the age of 17 and working hard till now, to contribute something huge to the InfoSec Community.

My Area of Interest includes: Web Development, OpenSource Intelligence, Web Application and Mobile Application Security, Reverse Engineering and Malware Analysis.

I create Projects occasionally, to test my skills and to enhance them.

root@yuvxraj_Hub:~/Portfolio# cat contact.txt

Wanna Stay Connected?

Linkedin - linkedin.com/in/yuvaraj-m-b718151b9
Instagram - https://www.instagram.com/inspire_dailyforu
Twitter - https://twitter.com/yuv_here

Oooh, wait. Feel free to reach me at yuvarajyeshwanth7574@gmail.com

Developer by Day. Hacker by Night.

root@yuvxraj_Hub:~/Portfolio# exit
`;

let i = 0;
const terminal = document.getElementById('terminal');
const speed = 65; // Typing speed

function typeOut() {
    if (i < terminalText.length) {
        terminal.textContent += terminalText.charAt(i);
        i++;
        setTimeout(typeOut, speed);
    }
}

document.body.onload = typeOut; // Start typing effect on page load
