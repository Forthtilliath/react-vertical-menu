import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSS, HTML, JS, Logo, PHP, React, ReactNative, VueJS } from "./Svg";
import WindowDimensions from "./WindowDimensions";

interface INavLinkDataset {
    to: string;
    children: JSX.Element | string;
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
                <NavLinkDataset to="/" data-label="Accueil">
                    <Logo />
                </NavLinkDataset>
            </div>
            <div className="nav">
                <NavLinkDataset to="/html" data-label="HTML">
                    <HTML />
                </NavLinkDataset>
                <NavLinkDataset to="/css" data-label="CSS">
                    <CSS />
                </NavLinkDataset>
                <NavLinkDataset to="/javascript" data-label="Javascript">
                    <JS />
                </NavLinkDataset>
                <NavLinkDataset to="/php" data-label="PHP">
                    <PHP />
                </NavLinkDataset>
                <NavLinkDataset to="/react" data-label="Réact">
                    <React />
                </NavLinkDataset>
                <NavLinkDataset to="/native" data-label="Réact Native">
                    <ReactNative />
                </NavLinkDataset>
                <NavLinkDataset to="/vuejs" data-label="Vue JS">
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
