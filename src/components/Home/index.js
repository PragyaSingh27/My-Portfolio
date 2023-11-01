import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-p.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import Logo from './Logo';
import Loader from 'react-loaders';
import girlLogo from "./girlLogo.json";
import Lottie from "lottie-react";


const Home=() =>{
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['r','a','g','y','a']
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 4000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);

    return (
        <>
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                <br/>
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>

                <img src={LogoTitle}alt="developer"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15}/>
                
                <br/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={20}/>
                </h1>
                <h2>
                    Fullstack Developer/ React Developer
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo/> */}
            <div className="logo">
                <Lottie animationData={girlLogo} />
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home