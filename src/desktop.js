import img1 from "./Images/Desktop/IMG_20201220_083958_461.jpg";
import img2 from "./Images/Desktop/IMG_20201220_084255_087.jpg";
import img3 from "./Images/Desktop/IMG_20201220_084258_921.jpg"; 
import img4 from "./Images/Desktop/IMG_20201220_084303_180.jpg";
import img5 from "./Images/Desktop/IMG_20201225_212222_101.jpg";
import img6 from "./Images/Desktop/IMG_20201225_212613_592.jpg";
import img7 from "./Images/Desktop/IMG_20201225_212934_465.jpg";
import img8 from "./Images/Desktop/IMG_20201225_212940_213.jpg";
import img9 from "./Images/Desktop/IMG_20220515_222933_403.jpg";
import img10 from "./Images/Desktop/IMG_20210321_141937_616.jpg";
import img11 from "./Images/Desktop/IMG_20210321_142021_007.jpg";
import img12 from "./Images/Desktop/IMG_20210321_142704_356.jpg";
import img13 from "./Images/Desktop/IMG_20210324_225019_063.jpg";
import img14 from "./Images/Desktop/IMG_20210712_152319_240.jpg";
import img15 from "./Images/Desktop/Dribbble-git-monster-wallpaper-21-9.png-by-Vasil-Enchev.png";
import img16 from "./Images/Desktop/IMG_20210712_152512_637.jpg";
import img17 from "./Images/Desktop/IMG_20210712_152549_908.jpg";
import img18 from "./Images/Desktop/Dribbble-git-monster-wallpaper-21-9.png-by-Vasil-Enchev.png";
import img19 from "./Images/Desktop/IMG_20210712_152529_851.jpg";
import img20 from "./Images/Desktop/IMG_20220515_222850_472.jpg";
import img21 from "./Images/Desktop/IMG_20220515_222908_938.jpg";
import img22 from "./Images/Desktop/IMG_20220515_222928_949.jpg";
import img23 from "./Images/Desktop/wp2990058.jpg";

const Desktop = () => {
    return ( 
        <div>
            <section id="pc" class="section2">
                <h2>desktop Wallpapers</h2>
                <p>browse these stunning desktop wallpapers</p>
                <div class="row">
                    <div class="column">
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                        <img src={img4} alt=""/>
                        <img src={img5} alt=""/>
                        <img src={img6} alt=""/>
                        <img src={img7} alt=""/>
                    </div>
                    <div class="column">
                        <img src={img8} alt=""/>
                        <img src={img9} alt=""/>
                        <img src={img10} alt=""/>
                        <img src={img11} alt=""/>
                        <img src={img12} alt=""/>
                        <img src={img13} alt=""/>
                        <img src={img14} alt=""/>
                        <img src={img15} alt=""/>
                    </div>
                    <div className="column">
                        <img src={img16} alt=""/>
                        <img src={img17} alt=""/>
                        <img src={img18} alt=""/>
                        <img src={img19} alt=""/>
                        <img src={img20} alt=""/>
                        <img src={img21} alt=""/>
                        <img src={img22} alt=""/>
                        <img src={img23} alt=""/>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Desktop;