import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import debounce from "lodash/debounce"
import AppMobile from './AppMobile'
import AppDesktop from './AppDesktop'
import {RootState} from "../../store/store";
import {initialization, setIsMobile} from "../../store/actions/appActions";
import {mobileSize} from "../../utils/constants";

const mapState = (state: RootState) => {
    return {
        isMobile: state.app.isMobile,
    }
};

const mapDispatch = {
    setIsMobile,
    initialization
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    handleWindowSizeChange  = debounce(()=> {this.props.setIsMobile(window.innerWidth <= mobileSize)}, 200);

    componentDidMount(): void {
        this.props.initialization()
        this.props.setIsMobile(window.innerWidth < mobileSize);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render() {
        return (
           // this.props.isMobile ? <AppMobile /> : <AppDesktop />
            <AppDesktop />
        )
    }
}

export default connector(AppContainer)




