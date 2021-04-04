import React, {Fragment} from 'react';
import exam from "../qcm";
import Question from "./Question";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

let Form = () =>
{
    const classes = useStyles();
return(
    //http://188.165.104.163/exam
<Fragment>
    <form className={classes.root} key="1234" action="#" method='get'>
        <Question questions={exam} />
    </form>
</Fragment>
)
}

export default Form;