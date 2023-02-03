# NumGuessr Project

This was my first endeavour into coding independently outside of an online course. I started coding approximately three months ago having never written a single line of code before.

Utilising all the extensive notes I took from the online courses, as well as searching around online, I set out to build a simple, browser-based number-guessing game as my first project.

To begin I drew out some rudimentary designs on paper, then marked-up the HTML, followed by the CSS, until I was happy with what I had. Then I moved onto the JavaScript, and structured this based on my notes. After some trial and error, and about eight hours after starting, I finally had a working game. After scrolling up and down lines of code and telling myself I was the smartest man alive (soon to realise I wasn't when I discovered a bug I had no idea how to fix), I went on to refactor the JS as much as I could until I was happy with the readability - this is something I aim to practice and put great importance on. Then, after realising I had made the whole design far too big for most laptop screens, I added some very simple responsiveness to ensure most could at least play it and it still look reasonably scaled - again, responsiveness is something I aim to practice lot. Ultimately, though, and for simplicity, I decided to scale the whole UI down to something usable on all devices without any media queries.

From this project, I've taken that I need to read more about closures, as the bug that took me the longest to figure out was one that resulted in the input value being returned as an empty string when the init() function was called after the 'play again' button was clicked, ultimately, breaking the game. I think this was because I had placed the 'check' button callback function within the init function, which was called each time the 'play again' button was clicked - though this is a guess, as I'm still not 100% sure, hence needing more research.

If I think of anymore info or self-reflection, I will add it here, however, until then, I'll move onto another project. First, I just need to come up with one...

You can find NumGuessr [HERE](https://numguessr.netlify.app/)

P.S. If you really want to win, the secret number is in the console!
