import React from "react"
import { Form, Button } from "semantic-ui-react"

import sortOptions from "../constants/sortOptions.js"

const FormSort = ({ props, handleSort, sortTransactions}) => (
  <Form size="small">
      <Form.Dropdown
        value={props.sortQuery}
        placeholder="Sort By"
        selection
        closeOnChange
        options={sortOptions}
        onChange={handleSort.bind(this)}
      />
      <Button.Group fluid>
        <Button size="small" color="blue" inverted fluid onClick={() => sortTransactions()}> Sort </Button>
      </Button.Group>
    </Form>
)

export default FormSort
