import React from 'react';
import { Link } from 'react-router-dom'
import englishIcon from './icons/PNG/englishCV.png';
import frenchIcon from './icons/PNG/frenchCV.png';
import dutchIcon from './icons/PNG/dutchCV.png';
import englishCV from './pdfs/English CV.pdf';
import frenchCV from './pdfs/French CV.pdf';
import dutchCV from './pdfs/Dutch CV.pdf';

const DownloadCV = () => {
    return (

        <div className="cvIcons">
            <div className="cvWrap">
                <Link className="overlayWrap" to={englishCV} target="_blank">
                    <div className="overlay">
                        <div className="text">OPEN</div>
                    </div>
                    <img src={englishIcon} alt="english cv" />
                </Link>
                <Link className="btn" to={englishCV} download target="_new">Download <span className="green">English</span> cv</Link>
            </div>
            <div className="cvWrap">
                <Link className="overlayWrap" to={dutchCV} target="_blank">
                    <div className="overlay">
                        <div className="text">OPEN</div>
                    </div>
                    <img src={dutchIcon} alt="dutch cv" /></Link>
                <Link className="btn" to={dutchCV} download target="_new">Download <span className="green">Dutch</span> cv</Link>
            </div>
            <div className="cvWrap">
                <Link className="overlayWrap" to={frenchCV} target="_blank">
                    <div className="overlay">
                        <div className="text">OPEN</div>
                    </div>
                    <img src={frenchIcon} alt="french cv" /></Link>
                <Link className="btn" to={frenchCV} download target="_new">Download <span className="green">French</span> cv</Link>
            </div>
        </div>

    )
}

export default DownloadCV;
