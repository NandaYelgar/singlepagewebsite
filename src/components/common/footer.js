import React from 'react';
import { BackTop } from 'antd';

function AppFooter(){
    return(
     <div className="container-fluid" id="footer">
      <div className="footer">
       <div className="logo">
       
       <a href="/home">hORIZON</a>
       </div>
       <ul className="socials">
       <li><a href="www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
       <li><a href="www.twitter.com"><i class="fab fa-twitter"></i></a></li>
       <li><a href="www.linkedin.com"><i class="fab fa-linkedin-in"></i></a></li>
       <li><a href="www.instagram.com"><i class="fab fa-instagram"></i></a></li>
       </ul>
       <div className="copyright">Copyright &copy; 2020 </div>
       <BackTop>
      <div className="goTop"><i class="fas fa-arrow-circle-up"></i></div>
    </BackTop>
     </div>
    </div>
    );
}

export default AppFooter;