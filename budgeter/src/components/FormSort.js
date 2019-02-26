import React from "react"
import { Form } from "semantic-ui-react"

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
        onBlur={() => sortTransactions()}
      />
    </Form>
)

export default FormSort
