import React, {Fragment} from 'react';

let RadioCheckBox = (props) => {

    return (
        props.answer.options.map((option,index)=>(
            <Fragment >
                <label for="{index}">{option.text}
                <input id={index} key={index} type={props.answer.type} name={props.answer.name} value={option.value} />
                </label>
            </Fragment>
        ))
    )
}

export default RadioCheckBox;