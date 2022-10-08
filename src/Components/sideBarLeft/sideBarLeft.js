import React,{useEffect} from 'react'





export default function SideBarLeft(props) {



  useEffect(()=>{
    let sidebarLeft = document.querySelector(".sidebar-left");
    let overlayLeft = document.querySelector(".overlay-left");
    let sidebarClose = document.querySelector(".sidebar-close .close");

    overlayLeft.addEventListener("click", function () {
      sidebarLeft.classList.toggle("open");
      overlayLeft.classList.toggle("open");
      props.openFuncP(false)
    });
    sidebarClose.addEventListener("click", function () {
      sidebarLeft.classList.remove("open");
      overlayLeft.classList.remove("open");
      props.openFuncP(false)
    });
    if(props.openMenuP){
      sidebarLeft.classList.add("open");
      overlayLeft.classList.add("open");
    }
  })



  return (
    <>
      <div className="sidebar-left">
        <div className="sidebar-close">
          <a className="close" href="#close"><i className="lni lni-close"></i></a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a href="index.html"><img src="assets/images/logo.svg" alt="Logo" /></a>
          </div>
          <p className="text">Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi rerum iusto intro.</p>
        
          <div className="sidebar-menu">
            <h5 className="menu-title">Quick Links</h5>
            <ul>
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Our Team</a></li>
              <li><a href="/#">Latest News</a></li>
              <li><a href="/#">Contact Us</a></li>
            </ul>
          </div>
          <div className="sidebar-social align-items-center justify-content-center">
            <h5 className="social-title">Follow Us On</h5>
            <ul>
              <li>
                <a href="/#"><i className="lni lni-facebook-filled"></i></a>
              </li>
              <li>
                <a href="/#"><i className="lni lni-twitter-original"></i></a>
              </li>
              <li>
                <a href="/#"><i className="lni lni-linkedin-original"></i></a>
              </li>
              <li>
                <a href="/#"><i className="lni lni-youtube"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="overlay-left"></div>
    </>
  )
}
