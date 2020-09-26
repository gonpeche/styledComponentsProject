import React from 'react'
import { PageLayout, Input, PasswordInput, Button } from 'components/common'

import Spinner from 'components/common/Spinner'

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

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`
let timeout
export default function Login() {
  const [formFields, setFormFields] = React.useState({
    username: '',
    password: '',
  })
  const [loading, setLoading] = React.useState(false)

  const handleInputChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // avoid browser refresh
    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  React.useEffect(
    () => () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    },
    []
  )

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
            <Button large type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </Button>
            {!loading && (
              <>
                <div className="alt-text">or</div>
                <Button secondary type="button">
                  Register
                </Button>
              </>
            )}
          </>
        )}
      </Form>
    </PageLayout>
  )
}
