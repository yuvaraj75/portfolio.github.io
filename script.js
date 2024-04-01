const terminalText = [
    '<span class="prompt">root@yuvxraj_Hub</span>:<span class="tilde">~</span><span class="hash">#</span> cd Portfolio/',
    '<span class="prompt">root@yuvxraj_Hub</span>:<span class="tilde">~</span><span class="hash">#</span> cat about.txt',
    '<span class="white">Hello, Friend! Myself, YUVARAJ M.</span>',
    '<span class="white">I\'m an Aspiring Cybersecurity Enthusiast, who likes to explore Multiple Dimensions of Information Security and to work with Various Technologies in the field.</span>',
    // ... Include the rest of your about.txt content here wrapped in <span class="white"></span> ...
    '<span class="prompt">root@yuvxraj_Hub</span>:<span class="tilde">~</span><span class="hash">#</span> cat contact.txt',
    '<span class="white">Wanna Stay Connected?</span>',
    // ... Contacts and social links go here ...
    '<span class="white">Oooh, wait. Feel free to reach me at yuvarajyeshwanth7574@gmail.com</span>',
    '<span class="red-text">Developer by Day. Hacker by Night.</span>',
    '<span class="prompt">root@yuvxraj_Hub</span>:<span class="tilde">~</span><span class="hash">#</span> exit',
].join('\n');

let i = 0;
const terminal = document.getElementById('terminal');
const speed = 50; // Increased typing speed

function typeOut() {
    if (i < terminalText.length) {
        terminal.innerHTML += terminalText.charAt(i);
        i++;
        setTimeout(typeOut, speed);
    }
}

// Ensuring the content starts typing at the top of the page
document.body.onload = () => {
    terminal.style.marginTop = '50px'; // Adjust as needed for your page
    typeOut();
};
