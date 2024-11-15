// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styled from "styled-components";
// import logo from "../assets/logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
//
// export default function Navbar() {
//     const [navbarState, setNavbarState] = useState(false);
//     const location = useLocation();
//
//     return (
//         <>
//             <Nav>
//                 <div className="brand">
//                     <div className="container">
//                         <img src={logo} alt="" />
//                         NestWorth
//                     </div>
//                     <div className="toggle">
//                         {navbarState ? (
//                             <VscChromeClose onClick={() => setNavbarState(false)} />
//                         ) : (
//                             <GiHamburgerMenu onClick={() => setNavbarState(true)} />
//                         )}
//                     </div>
//                 </div>
//
//                 <ul>
//                     {location.pathname === "/" ? (
//                         <>
//                             <li>
//                                 <a href="#hero">Home</a>
//                             </li>
//                             <li>
//                                 <a href="#services">Services</a>
//                             </li>
//                             <li>
//                                 <a href="#astimate">Destinations</a>
//                             </li>
//                             <li>
//                                 <a href="#testimonials">Testimonials</a>
//                             </li>
//                             <li>
//                                 <a href="#contact">Contact</a>
//                             </li>
//                         </>
//                     )}
//                 {/*</ul>*/}
//                 {/*<button>Connect</button>*/}
//             </Nav>
//
//             <ResponsiveNav state={navbarState}>
//                 <ul>
//                     {location.pathname === "/" ? (
//                         <>
//                             <li>
//                                 <a href="#hero" onClick={() => setNavbarState(false)}>
//                                     Home
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#services" onClick={() => setNavbarState(false)}>
//                                     Services
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#astimate" onClick={() => setNavbarState(false)}>
//                                     Destinations
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#testimonials" onClick={() => setNavbarState(false)}>
//                                     Testimonials
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#contact" onClick={() => setNavbarState(false)}>
//                                     Contact
//                                 </a>
//                             </li>
//                         </>
//
//                     )}
//                 </ul>
//             </ResponsiveNav>
//         </>
//     );
// }
//
// const Nav = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 10;
//     background-color: white;
//     padding: 10px 30px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//
//     .brand {
//         .container {
//             cursor: pointer;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 0.4rem;
//             font-size: 1.2rem;
//             font-weight: 900;
//             text-transform: uppercase;
//             img {
//                 height: 50px;
//                 width: auto;
//                 max-width: 100%;
//             }
//         }
//         .toggle {
//             display: none;
//         }
//     }
//     ul {
//         display: flex;
//         gap: 3rem;
//         list-style-type: none;
//         li {
//             a {
//                 text-decoration: none;
//                 color: #0077b6;
//                 font-size: 1.2rem;
//                 transition: 0.1s ease-in-out;
//                 &:hover {
//                     color: #023e8a;
//                 }
//             }
//             &:first-of-type {
//                 a {
//                     color: #023e8a;
//                     font-weight: 900;
//                 }
//             }
//         }
//     }
//     button {
//         padding: 0.5rem 1rem;
//         cursor: pointer;
//         border-radius: 1rem;
//         border: none;
//         color: white;
//         background-color: #48cae4;
//         font-size: 1.1rem;
//         letter-spacing: 0.1rem;
//         text-transform: uppercase;
//         transition: 0.3s ease-in-out;
//         &:hover {
//             background-color: #023e8a;
//         }
//     }
//     @media screen and (min-width: 280px) and (max-width: 1080px) {
//         .brand {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             width: 100%;
//             .container {
//                 img {
//                     height: 40px;
//                 }
//             }
//             .toggle {
//                 display: block;
//             }
//         }
//         ul {
//             display: none;
//         }
//         button {
//             display: none;
//         }
//     }
// `;
//
//
// const ResponsiveNav = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 1;
//   top: ${({ state }) => (state ? "50px" : "-400px")};
//   background-color: white;
//   height: 45vh;
//   width: 100%;
//   align-items: center;
//   transition: 0.3s ease-in-out;
//   ul {
//     margin-top: 10px;
//     list-style-type: none;
//     width: 100%;
//     li {
//       width: 100%;
//       margin: 1rem 0;
//       margin-left: 2rem;
//
//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//         a {
//           color: #023e8a;
//           font-weight: 900;
//         }
//       }
//     }
//   }
// `;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
    const [navbarState, setNavbarState] = useState(false);
    const location = useLocation();

    return (
        <>
            <Nav>
                <div className="brand">
                    <div className="container">
                        <img src={logo} alt="Logo" />
                        NestWorth
                    </div>
                    <div className="toggle">
                        {navbarState ? (
                            <VscChromeClose onClick={() => setNavbarState(false)} />
                        ) : (
                            <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                        )}
                    </div>
                </div>

                <ul>
                    {location.pathname === "/" ? (
                        <>
                            <li>
                                <a href="#hero">Home</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#estimate">Destinations</a> {/* Fixed typo */}
                            </li>
                            <li>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </>
                    ) : null}
                </ul>
                <button>Connect</button>
            </Nav>

            <ResponsiveNav state={navbarState}>
                <ul>
                    {location.pathname === "/" ? (
                        <>
                            <li>
                                <a href="#hero" onClick={() => setNavbarState(false)}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={() => setNavbarState(false)}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#estimate" onClick={() => setNavbarState(false)}>
                                    Destinations
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" onClick={() => setNavbarState(false)}>
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setNavbarState(false)}>
                                    Contact
                                </a>
                            </li>
                        </>
                    ) : null}
                </ul>
            </ResponsiveNav>
        </>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: white;
    padding: 10px 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .brand {
        .container {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
            img {
                height: 50px;
                width: auto;
                max-width: 100%;
            }
        }
        .toggle {
            display: none;
        }
    }
    ul {
        display: flex;
        gap: 3rem;
        list-style-type: none;
        li {
            a {
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: 0.1s ease-in-out;
                &:hover {
                    color: #023e8a;
                }
            }
            &:first-of-type {
                a {
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        }
    }
    button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #48cae4;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
            background-color: #023e8a;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .container {
                img {
                    height: 40px;
                }
            }
            .toggle {
                display: block;
            }
        }
        ul {
            display: none;
        }
        button {
            display: none;
        }
    }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 45vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    margin-top: 10px;
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
