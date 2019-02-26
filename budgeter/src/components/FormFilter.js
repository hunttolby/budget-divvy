import React from "react"
import { Form, Button } from "semantic-ui-react"

import options from "../constants/options.js"

const FormFilter = ({ props, handleFilterCategory, filterTransactions, resetFilter}) => (
  <Form size="small">
      <Form.Dropdown
        value={props.filterCategory}
        placeholder="Category"
        selection
        closeOnChange
        options={options}
        onChange={handleFilterCategory.bind(this)}
      />
      <Button.Group fluid>
        <Button size="small" color="blue" inverted onClick={() => filterTransactions(props.filterCategory)}> Filter </Button>
        <Button size="small" color="red" inverted onClick={() => resetFilter()}> Reset </Button>
      </Button.Group>
    </Form>
)

export default FormFilter
