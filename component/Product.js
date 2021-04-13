import React from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import {ProductData} from "./Data"
const Product = () => (
   <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {ProductData.map((Data)=>(
      <Table.Row>
      <Table.Cell>{Data.product} </Table.Cell>
        <Table.Cell>{Data.price}</Table.Cell>
        <Table.Cell><Button><Icon name= 'cart'></Icon></Button></Table.Cell>
              
      </Table.Row>
      ))}
    </Table.Body>

   
  </Table>
)

export default Product
