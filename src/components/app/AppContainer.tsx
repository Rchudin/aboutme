import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import debounce from "lodash/debounce"
import AppMobile from './AppMobile'
import AppDesktop from './AppDesktop'
import {RootState} from "../../store/store";
import {setIsMobile} from "../../store/actions/appActions";

const mapState = (state: RootState) => {
    return {
        isMobile: state.app.isMobile,
    }
};

const mapDispatch = {
    setIsMobile
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {

    }

    handleWindowSizeChange  = debounce(()=> {this.props.setIsMobile(window.innerWidth < 500)}, 200);

    componentWillMount(): void {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render() {
        return (
           this.props ? <AppMobile /> : <AppDesktop />
        )
    }
}

export default connector(AppContainer)




