import React, {Fragment} from 'react';
import Switch from '@material-ui/core/Switch';



let Toggle = (props) => {

    const [state, setState] = React.useState({
        checkedA: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return(
        <Fragment>
            <label className="switch" >
                {props.toggleContent.question}
            </label>
            <input  type="hidden" value={state.checkedA} name={props.toggleContent.answer.name}/>
            <br/>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                color="primary"
                name="checkedA"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </Fragment>
    );
}

export default Toggle

