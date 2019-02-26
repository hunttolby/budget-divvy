import React from "react"
import { Table, Icon } from "semantic-ui-react"

import * as utils from "../functions/utils"

const TableNormal = ({transaction, key, index, props, changeToUpdate}) => (
  <Table.Row key={key} onClick={() => changeToUpdate(index)}>
    <Table.Cell width="3"> {transaction.category} </Table.Cell>
    <Table.Cell> {transaction.name} </Table.Cell>
    <Table.Cell collapsing textAlign='right' disabled>
      <span style={{color: transaction.amount < 0 ? "#ff695e" : "#21ba45"}}>${utils.romanMaker(transaction.amount, props.isRoman)}</span>
    </Table.Cell>
    <Table.Cell collapsing> <Icon color="blue" name="pencil"/></Table.Cell>
  </Table.Row>
)

export default TableNormal
