import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSS, HTML, JS, Logo, PHP, React, ReactNative, VueJS } from "./Svg";
import WindowDimensions from "./WindowDimensions";

interface INavLinkDataset {
    to: string;
    children: JSX.Element | string;
    onClick: () => void;
    "data-label": string;
}

const NavLinkDataset = (props: INavLinkDataset) => <NavLink {...props} />;

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isMobile) setIsOpen(false);
    }, [isMobile]);

    return (
        <nav className={(isMobile && isOpen) ? "open" : ""}>
            <WindowDimensions setIsMobile={setIsMobile} />
            <div className="logo">
                <NavLinkDataset to="/" data-label="Accueil" onClick={() => setIsOpen(false)}>
                    <Logo />
                </NavLinkDataset>
            </div>
            <div className="nav">
                <NavLinkDataset to="/html" data-label="HTML" onClick={() => setIsOpen(false)}>
                    <HTML />
                </NavLinkDataset>
                <NavLinkDataset to="/css" data-label="CSS" onClick={() => setIsOpen(false)}>
                    <CSS />
                </NavLinkDataset>
                <NavLinkDataset to="/javascript" data-label="Javascript" onClick={() => setIsOpen(false)}>
                    <JS />
                </NavLinkDataset>
                <NavLinkDataset to="/php" data-label="PHP" onClick={() => setIsOpen(false)}>
                    <PHP />
                </NavLinkDataset>
                <NavLinkDataset to="/react" data-label="Réact" onClick={() => setIsOpen(false)}>
                    <React />
                </NavLinkDataset>
                <NavLinkDataset to="/native" data-label="Réact Native" onClick={() => setIsOpen(false)}>
                    <ReactNative />
                </NavLinkDataset>
                <NavLinkDataset to="/vuejs" data-label="Vue JS" onClick={() => setIsOpen(false)}>
                    <VueJS />
                </NavLinkDataset>
            </div>
            <div className="btn-open" onClick={() => setIsOpen(true)}>
                Open
            </div>
            <div className="btn-close" onClick={() => setIsOpen(false)}>
                X
            </div>
        </nav>
    );
};

export default Nav;
