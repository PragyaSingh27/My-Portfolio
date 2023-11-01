import './index.scss';
import LogoP from '../../../assets/images/logo-p.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';


const Logo=()=> {

    const bgRef=useRef();
    const outlineLogoRef=useRef();
    const solidLogoRef=useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        
        gsap
        .timeline()
        .to(bgRef.current,{
            duration:1,
            opacity:1,
        })
        .from(outlineLogoRef.current,
            {
                drawSVG:0,
                duration:20,
            })
        .fromTo(
            solidLogoRef.current,
            {
                opacity:0,
            },
            {
                opacity:1,
                delay:4,
                duration:4,
                
            }
        )
    },[])
    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoP} alt="JavaScript, Developer"/>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="433.000000pt" height="577.000000pt" viewBox="0 0 433.000000 577.000000"
                preserveAspectRatio="xMidYMid meet">

                <g 
                    className='svg-container'
                    transform="translate(0.000000,577.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path ref={outlineLogoRef} d="M697 4694 c-12 -243 -101 -3483 -97 -3488 7 -6 1091 -39 1097 -33 4
                    5 42 1210 43 1366 l0 84 228 -6 c632 -19 865 -20 937 -4 177 38 335 125 471
                    261 141 140 236 310 292 521 25 92 27 115 26 295 0 179 -2 203 -27 293 -34
                    127 -108 281 -184 382 -114 153 -283 285 -437 341 -139 50 -171 52 -1116 79
                    -492 13 -970 27 -1061 31 l-166 6 -6 -128z m594 91 c271 -9 494 -17 495 -18 5
                    -6 -103 -3567 -108 -3573 -6 -6 -1059 22 -1063 28 -1 3 102 3569 104 3576 2 4
                    67 2 572 -13z m1194 -35 c430 -13 476 -20 635 -100 178 -89 351 -264 445 -450
                    155 -306 159 -693 12 -1004 -108 -227 -267 -393 -472 -492 -143 -70 -222 -86
                    -405 -86 -189 1 -923 23 -929 28 -5 4 16 745 21 748 2 2 125 -3 273 -11 425
                    -22 482 -14 574 79 59 59 85 119 89 209 4 67 0 85 -23 138 -40 89 -132 166
                    -220 185 -24 5 -588 36 -659 36 -18 0 -18 10 -12 268 3 147 9 314 12 370 l7
                    104 151 -6 c83 -4 309 -11 501 -16z m-305 -755 c278 -14 323 -20 370 -45 46
                    -25 114 -96 136 -145 27 -56 32 -151 13 -215 -20 -65 -78 -131 -148 -167 -55
                    -29 -73 -33 -139 -33 -137 0 -607 22 -615 30 -7 6 6 386 19 528 l6 62 36 0
                    c20 0 165 -7 322 -15z"/>
                </g>
            </svg> 
            

        </div>
    )
}

export default Logo;