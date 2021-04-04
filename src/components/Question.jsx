import React, {Fragment} from 'react';
import Toggle from "./Toggle";
import TextField from '@material-ui/core/TextField';
import RadioCheckBox from "./RadioCheckBox";

let Question = (props) => {
   let funchandleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.lastname.value)          // or directly
    }
    let questionToAsk = props.questions.map(function (elem, index){
        switch (elem.answer.type){
            case "text":
                return(<Fragment key={index}>
                        <TextField label={elem.question}  type={elem.answer.type}   name={elem.answer.name}/>
                    </Fragment>
                )
            case "checkbox":
            case "radio":
                    return (
                        <div className={"contrainer"}>
                            <p>{elem.question}</p>
                            <RadioCheckBox answer={elem.answer}>
                            </RadioCheckBox>
                        </div>
                    )
            case "toggle":
                return(
                    <div className={"contrainer"}>
                        <Toggle className={"toggle"} toggleContent={elem}></Toggle>
                    </div>
                )
        }
    })


    return(<Fragment>
                 {questionToAsk}
                 <input  type="submit" value={"envoyer"}/>
        </Fragment>)


}

export default Question;