import React from 'react';
import '../../css/footer.css';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer-bar">
                <footer className="copyright">
                <p id="copyright-text">Copyright &copy; 2020</p>
                </footer>
            </div>
        );
    }
}

export default Footer;