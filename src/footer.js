const Footer = () => {

    const year = new Date;

    return ( 
        <footer id="about">
            <h2 class="h2">About</h2>
            <ul>
            <li class="footer"><a href="http://www.github.com/tonny2wo6ix5ive" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li class="footer"><a href="http://www.discord.com/tonny2wo6ix5ive" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li class="footer"><a href="http://www.facebook.com/tonny-makondesa" target="_blank" rel="noopener noreferrer">FaceBook</a></li>
                <li class="footer"><a href="http://www.instagram.com/tonny2wo6ix5ive" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li class="footer"><a href="http://www.linkedin.com/in/tonny-makondesa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li class="footer"><a href="http://www.twitter.com/tonny2wo6ix5ive" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
            <div class="foot">
                <p class="copy">&copy;Tonny Makondesa {year.getFullYear()}</p>
            </div>
        </footer>
     );
}
 
export default Footer;