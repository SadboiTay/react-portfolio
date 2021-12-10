import React from "react";
import styles from '../../sectionStyle.module.css';

function Footer({ navSelection }) {

    return (
        <footer className={
            (navSelection === 'about' && styles.footerAboutSectionBorder) ||
            (navSelection === 'portfolio' && styles.footerPortfolioSectionBorder) ||
            (navSelection === 'contact' && styles.footerContactSectionBorder) ||
            (navSelection === 'resume' && styles.footerResumeSectionBorder)
        }>
            <svg id="backtotop-icosa" viewBox="0 0 407 464" xmlns="http://www.w3.org/2000/svg">
                <path id="backtotop-frame" className={
                    (navSelection === 'about' && styles.aboutSection) ||
                    (navSelection === 'portfolio' && styles.portfolioSection) ||
                    (navSelection === 'contact' && styles.contactSection) ||
                    (navSelection === 'resume' && styles.resumeSection)
                }
                    d="M203.5 461.5L405.5 347M203.5 461.5L1.99998 347M203.5 461.5L304.5 289.5M203.5 461.5L102.5 289.5M405.5 347L405.5 117.5M405.5 347L304.5 289.5M405.5 117.5L204 2.00001M405.5 117.5L304.5 289.5M405.5 117.5L304.5 117.25L203.5 117M204 2.00001L2 116M204 2.00001L203.5 117M2 116L1.99998 347M2 116L203.5 117M2 116L102.5 289.5M1.99998 347L102.5 289.5" />
                <path id="backtotop-arrow" className={
                    (navSelection === 'about' && styles.aboutSection) ||
                    (navSelection === 'portfolio' && styles.portfolioSection) ||
                    (navSelection === 'contact' && styles.contactSection) ||
                    (navSelection === 'resume' && styles.resumeSection)
                } d="M203.5 117L304.5 289.5L102.5 289.5L203.5 117Z" />
            </svg>
            <div className="socials-block">
                <a href="https://github.com/SadboiTay" target="_blank" rel="noreferrer">
                    <svg 
                        className={`footer-socials 
                        ${ (navSelection === 'about' && styles.aboutSection) ||
                        (navSelection === 'portfolio' && styles.portfolioSection) ||
                        (navSelection === 'contact' && styles.contactSection) ||
                        (navSelection === 'resume' && styles.resumeSection)
                        }`} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M97.1615 149.905C127.764 140.245 150 111.103 150 76.6533C150 34.3188 116.421 0 75 0C33.5786 0 0 34.3188 0 76.6533C0 111.217 22.3824 140.437 53.1415 150C54.0511 149.723 56.4904 148.395 56.4904 146.305C56.3942 146.305 56.3702 137.46 56.3702 133.038C51.6827 134.184 40.7692 134.831 35.5769 129.23C32.5721 126.159 32.047 125.421 31.0096 122.596C30.8063 122.147 30.6181 121.704 30.4301 121.261C29.4695 118.997 28.516 116.751 25.6009 113.874C25.6009 113.874 22.7163 111.172 20.9134 109.943C20.032 109.206 18.8942 107.56 21.3942 106.872C22.9166 106.627 26.6586 106.7 29.4471 108.961C30.649 109.739 33.4134 112.007 34.8557 114.857C35.5769 116.413 38.149 120.066 42.6683 122.228C44.2708 122.801 48.4134 123.702 52.1634 122.719C53.2852 122.391 55.7692 121.589 56.7307 120.999C56.9311 118.788 57.4519 114.857 61.2981 110.803C61.2981 110.803 28.4856 109.698 27.524 77.8817C26.6025 72.4766 26.8029 59.9468 34.9759 52.0849C33.6939 49.3824 32.0192 41.3977 35.5769 31.5703C38.4215 30.9971 46.4904 31.7423 56.0096 39.3094C63.6218 37.5077 76.2019 35.1327 93.75 39.3094C93.75 39.3094 108.654 29.6049 114.423 31.6932C115.385 33.0444 118.75 43.2403 115.385 51.8392C119.111 56.1387 124.712 63.9269 122.596 80.3385C122.596 80.3385 122.596 108.224 88.9423 110.803C90.5448 111.991 93.774 116.38 93.8702 124.439C93.9663 132.497 93.9102 142.374 93.8702 146.305C93.946 147.583 94.7174 149.983 97.1615 149.905Z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/taylor-hakes-7798b2215/" target="_blank" rel="noreferrer">
                    <svg className={`footer-socials 
                        ${ (navSelection === 'about' && styles.aboutSection) ||
                        (navSelection === 'portfolio' && styles.portfolioSection) ||
                        (navSelection === 'contact' && styles.contactSection) ||
                        (navSelection === 'resume' && styles.resumeSection)
                        }`} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M14 0C6.26801 0 0 6.26801 0 14V136C0 143.732 6.26801 150 14 150H136C143.732 150 150 143.732 150 136V14C150 6.26801 143.732 0 136 0H14ZM34.5 49C43.6127 49 51 41.6127 51 32.5C51 23.3873 43.6127 16 34.5 16C25.3873 16 18 23.3873 18 32.5C18 41.6127 25.3873 49 34.5 49ZM21 60C21 56.6863 23.6863 54 27 54H41C44.3137 54 47 56.6863 47 60V128C47 131.314 44.3137 134 41 134H27C23.6863 134 21 131.314 21 128V60ZM77 135H63C59.6863 135 57 132.314 57 129V58.7101C57 58.4048 57.013 58.0963 57.1126 57.8077C57.5065 56.6665 58.8435 55 62 55H79.5C83.5008 55 83.0039 60.2915 82.6282 62.9837C82.4839 64.0178 82.6075 63.9526 83.0434 63.0038C85.1985 58.3127 91.2089 55.0879 101 54C101.346 54 101.742 53.9951 102.18 53.9897C106.173 53.9402 113.742 53.8464 120.5 57C122.771 58.1355 127.915 62.1759 130.77 69.3979C130.874 69.6597 130.989 69.9152 131.104 70.1711C131.164 70.3042 131.224 70.4374 131.283 70.5715C132.115 72.4829 134.5 79.6881 134.5 99.5V130C134.333 131.333 133.1 133.9 129.5 133.5H112.474C111.829 133.5 111.167 133.423 110.638 133.055C109.763 132.445 108.837 131.281 108.956 129.425C108.96 129.359 108.965 129.293 108.969 129.227C108.985 129.01 109 128.791 109 128.574V91C109 85.6667 106.4 75 96 75C92.5643 74.8364 85.2741 77.0176 83.1157 86.9352C83.0348 87.3068 83 87.6914 83 88.0717V129C83 132.314 80.3137 135 77 135Z" />
                    </svg>
                </a>
                <a href="https://open.spotify.com/playlist/2MMoG7uL3UWlcJfA1llBES?si=8aa508c6cf2a4299" target="_blank" rel="noreferrer">
                    <svg className={`footer-socials 
                        ${ (navSelection === 'about' && styles.aboutSection) ||
                        (navSelection === 'portfolio' && styles.portfolioSection) ||
                        (navSelection === 'contact' && styles.contactSection) ||
                        (navSelection === 'resume' && styles.resumeSection)
                        }`} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150ZM26.5 46C30.5 42 46.5 41.2165 51 41C60.5 40.5431 82 40.3 96 43.5C103.333 45.5 119.9 50.8 127.5 56C132 58.5 130 70 120.5 67.5C119.239 67.0798 117.704 66.3066 115.774 65.3341C110.812 62.8348 103.238 59.0196 91 56.5C78.1722 53.915 62.7848 54.2886 56.0954 54.451C54.9626 54.4786 54.0793 54.5 53.5 54.5C46.924 54.7989 44.0336 55.5736 41.3234 56.2999C40.4069 56.5456 39.5109 56.7857 38.5 57C36.5 57.5 32.1667 58 30.5 58C26.9 58 25 56.1667 24.5 55C22.1 51 24.8333 47.3334 26.5 46ZM53.5 66.5C49.6837 66.6303 35.0456 67.5629 31.6079 70.9125C30.1795 72.0251 27.8193 75.1066 29.8056 78.5324C30.2155 79.5292 31.8038 81.1088 34.8548 81.1516C36.2673 81.1715 39.0983 80.7865 41.6527 79.9729C41.7967 79.9337 41.9417 79.894 42.0889 79.8537C44.3543 79.2329 47.1407 78.4694 55 77.5C62.5 77 72.8235 77.2272 85.5 79.9729C95.7783 82.2443 102.468 85.8676 106.833 88.2318C108.568 89.172 109.937 89.913 111.017 90.2907C119.038 92.527 120.87 82.7839 117.086 80.6071C110.707 76.1003 96.7301 71.402 90.539 69.6161C77.5 66 61.5567 66.2249 53.5 66.5ZM33.1915 94.9128C35.9167 92.2664 48.6755 90.598 51.6961 90.5C51.9785 90.4908 52.2791 90.4808 52.5965 90.4701C59.4456 90.2406 74.1422 89.748 84 92.5C88.8975 93.9218 102.457 98.5216 107.5 102.097C111.5 104.5 110.846 112.281 104.5 110.5C103.753 110.237 102.449 109.585 100.726 108.723C95.526 106.122 86.5137 101.615 77.5 100.158C71 98.5 52 100 51 100.158C51 100.158 45 101 41.1291 102.097C39.1063 102.738 36.8653 103.038 35.7474 103.021C33.3327 102.983 32.0777 101.73 31.7547 100.941C30.1873 98.227 32.0595 95.7914 33.1915 94.9128Z" />
                    </svg>
                </a>
            </div>
            <h5>follow me</h5>
            <h6
                id="copyright"
                className={
                    (navSelection === 'about' && styles.aboutSection) ||
                    (navSelection === 'portfolio' && styles.portfolioSection) ||
                    (navSelection === 'contact' && styles.contactSection) ||
                    (navSelection === 'resume' && styles.resumeSection)
                }
            >© 2021 Taylor Hakes. All rights reserved.</h6>
        </footer>
    )
}

export default Footer;