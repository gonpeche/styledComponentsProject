import React from 'react'
import { PageLayout, Input, PasswordInput } from 'components/common'

import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`

export default function Login() {
  const [formFields, setFormFields] = React.useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          type="text"
          onChange={handleInputChange}
          name="username"
          placeholder="Username"
        />
        <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />
      </Form>
    </PageLayout>
  )
}
