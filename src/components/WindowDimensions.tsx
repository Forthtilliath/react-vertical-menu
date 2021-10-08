import { Component } from "react";

interface IProps {
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IState {
    width: number;
    height: number;
    isMobile: boolean;
}

export default class WindowDimensions extends Component<IProps, IState> {
    // state = { width: 0, height: 0, isMobile: false };
    constructor(props: IProps) {
        super(props);
        this.state = { width: 0, height: 0, isMobile: false };
    }

    render() {
        // this.props.toggleMenu;

        return (
            <span>
                Window size: {this.state.width} x {this.state.height}
            </span>
        );
    }

    isMobile = () => this.state.width < 576;

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: this.isMobile()
        });
        this.props.setIsMobile(this.state.isMobile);
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}
