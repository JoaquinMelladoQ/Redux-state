import React, { Component } from 'react'
import { reduxForm, Field  } from 'redux-form'
import CustomInput from './CustomInput'


const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Requiered'
    }
    if (!values.lastname) {
        errors.lastname  = 'Requiered'
    }

    return errors
}
class UserForm extends Component {
    render() {
        const { handleSubmit } = this.props
        console.log(this.props)
        return(
            <form onSubmit={handleSubmit} >
                <Field name="name" component={CustomInput} placeholder="name" title="name" />
                <Field name="lastname" component={CustomInput} placeholder="last name" title="last name" />
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

export default reduxForm({
     form: 'user',
     validate,
})(UserForm) 