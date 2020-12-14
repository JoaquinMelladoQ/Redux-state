import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class UserForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit} >

            </form>
        )
    }
}

export default reduxForm({
     form: 'user'
})(UserForm) 