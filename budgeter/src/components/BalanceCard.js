import React from "react"
import { Card, Checkbox } from "semantic-ui-react"

import * as utils from "../functions/utils"

const BalanceCard  = ({ props, onChange }) => (
  <Card raised >
    <Card.Content>
      <Card.Header>Balance: <span style={{color: props.balance < 0 ? "#ff695e" : "#21ba45"}}>${utils.romanMaker(props.balance, props.isRoman)}</span></Card.Header>
      <Card.Description><Checkbox toggle label="Make Roman" checked={!!props.isRoman} onChange={() => onChange()}/></Card.Description>
    </Card.Content>
  </Card>
)

export default BalanceCard;
