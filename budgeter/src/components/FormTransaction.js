import React from "react"

import { Form, Button } from "semantic-ui-react"

import options from "../constants/options"

const FormTransaction = ({ props, handleSubmit, handleNewCategory, handleNewName, handleNewAmount, isInvalid }) => (
  <Form onSubmit={()=> handleSubmit()} size="small">
      <Form.Dropdown
        value={props.newCategory}
        placeholder="Category"
        selection
        closeOnChange
        options={options}
        onChange={handleNewCategory.bind(this)}
      />
      <Form.Input
        value={props.newName}
        fluid
        placeholder='Transaction Name'
        onChange={handleNewName.bind(this)}
      />
      <Form.Input
        value={props.newAmount}
        fluid
        type="number"
        placeholder='Amount'
        onChange={handleNewAmount.bind(this)}
      />
      <Button disabled={isInvalid} color="green" type="submit" inverted fluid > Add </Button>
  </Form>
)

export default FormTransaction
