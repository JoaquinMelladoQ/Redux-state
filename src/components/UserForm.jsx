import React, { Component } from 'react'
import { reduxForm, Field  } from 'redux-form'

class UserForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit} >
                <Field name="name" component="input" placeholder="name" />
                <Field name="lastname" component="input" placeholder="last name" />
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

export default reduxForm({
     form: 'user'
})(UserForm) 