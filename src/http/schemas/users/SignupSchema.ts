const SignupSchema = {
    body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
            email: {
                type: 'string'
            },
            password: {
                type: 'string',
                min: 8
            }
        }
    }
}

export default SignupSchema