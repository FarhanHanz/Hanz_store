/* eslint-disable camelcase */
import React from 'react'
import {Link} from 'gatsby'
import {Item, Button, Loader, Message, Responsive} from 'semantic-ui-react'

export default ({items, removeFromCart, loading, completed}) => {
  if (loading) return <Loader active inline="centered" />

  if (completed)
    return (
      <Message success>
        <Message.Header>Keranjang kamu</Message.Header>
        <p>Terima kasih, pesanan dan pembayaran anda sudah kami terima.</p>
      </Message>
    )

  if (items.length === 0)
    return (
      <Message warning>
        <Message.Header>Keranjang masih kosong :(</Message.Header>
        <p>
          Masukan barang terlebih dahulu.
        </p>
      </Message>
    )
  const mapCartItemsToItems = items =>
    items.map(({id, product_id, name, quantity, meta, image}) => {
      const price = meta.display_price.with_tax.unit.formatted || ''
      const imageUrl = image.href || '/static/moltin-light-hex.svg'

      const DesktopItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={name}
          size="small"
          style={{background: '#f2f2f2'}}
        />
      )
      const MobileItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={name}
          size="small"
          style={{background: 'none'}}
        />
      )

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link to={`/product/${product_id}/`}>{name}</Link>
          </Item.Header>
        ),
        image: (
          <>
            <Responsive
              as={MobileItemImage}
              minWidth={Responsive.onlyMobile.minWidth}
              maxWidth={Responsive.onlyMobile.maxWidth}
            />
            <Responsive
              as={DesktopItemImage}
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </>
        ),
        meta: `${quantity}x ${price}`,
        description: 'Some more information goes here....',
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(id)}
          />
        ),
      }
    })
  return <Item.Group divided items={mapCartItemsToItems(items)} />
}
