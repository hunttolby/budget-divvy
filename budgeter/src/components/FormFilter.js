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
        onBlur={() => filterTransactions(props.filterCategory)}
      />
        <Button size="small" color="red" inverted fluid onClick={() => resetFilter()}> Reset Filter</Button>
    </Form>
)

export default FormFilter
