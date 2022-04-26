import { render } from "@testing-library/react";
import StateMaker from '../../state';
import { Provider } from "react-redux";


export default (component) =>
    render(
        <Provider store={StateMaker}>
            {component}
        </Provider>
    )