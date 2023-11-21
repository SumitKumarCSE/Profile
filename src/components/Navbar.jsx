import logoimg from "./logo.jpg";

function Navbar() {
    return(
        <>
            <header className="App-header">
                <div>
                    <img src={logoimg} id="logoimg" alt="logo" />
                    <div id="line"></div>
                    STORIES
                </div>
                <button>Courses</button>
            </header>
        </>
    );
}

export default Navbar;