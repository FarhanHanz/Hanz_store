/* eslint-disable camelcase */
import React from 'react'
import {Header, Divider, Table} from 'semantic-ui-react'

export default ({description, material, max_watt, bulb_qty, finish, bulb}) => (
  <div>
    <Header as="h3">Tentang produk ini</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{background: '#f9fafb'}}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Material</Table.Cell>
          <Table.Cell>{material}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Daya</Table.Cell>
          <Table.Cell>{max_watt}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Kapasitas</Table.Cell>
          <Table.Cell>{bulb_qty}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Warna</Table.Cell>
          <Table.Cell>{finish}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Model</Table.Cell>
          <Table.Cell>{bulb}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
