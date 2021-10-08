import { Component } from "react";

interface IProps {
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IState {
    width: number;
    height: number;
}

export default class WindowDimensions extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { width: 0, height: 0 };
    }

    render() {
        return <></>;
        // return (
        //     <span>
        //         Window size: {this.state.width} x {this.state.height}
        //     </span>
        // );
    }

    isMobile = () => this.state.width < 576;

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
        this.props.setIsMobile(this.isMobile());
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}
