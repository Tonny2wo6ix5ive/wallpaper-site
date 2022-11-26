import img from './Images/Icons/menu.png'

const NavBar = () => {

   

    return ( 
        <div>
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label for="check" class="menu">
                    <i><img id="menus" src={img} alt="" srcset=""/></i>
                </label>
                <label for="" class="logo">WallpaperX</label>
                <ul>
                    <li><a href="#home" class="link1">Home</a></li>
                    <li><a href="#pc" class="link1">PC</a></li>
                    <li><a href="#mobile" class="link1">Mobile</a></li>
                    <li><a href="#about" class="link1">About</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;