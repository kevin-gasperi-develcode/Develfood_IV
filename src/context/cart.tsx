import React, { createContext, ReactNode, useContext, useState } from 'react'
interface CartProviderProps {
  children: ReactNode
}
interface CartData {
  addPlates: Function
  removePlates: Function
}
interface CartItemsProps {
  plate: PlateContent
  quantity: number
  price: number
  observation?: string
}
;[]
interface PlateContent {
  id: any
  price: number
}

const CartContext = createContext({} as CartData)

function CartProvider({ children }: CartProviderProps) {
  const cartValues = {} as CartData
  const [demand, setDemand] = useState<CartItemsProps[]>([])

  function addPlates({ id, price }: PlateContent, restaurantId: number) {
    const DemandCopy = [...demand]
    const item = DemandCopy.find((item) => item.plate.id === id)
    if (!item) {
      DemandCopy.push({ quantity: 1, price: price, observation: '' }) // <<<<<<<<<<<<<<<<<<<<<<<
    } else {
      item.quantity = item.quantity + 1
    }
    setDemand(DemandCopy)
    console.log(demand)
  }
  function removePlates(id: any, price: any, restaurantId: any) {
    const DemandCopy = [...demand]
    const item = DemandCopy.find((product) => product.plate.id === id)

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1
      setDemand(DemandCopy)
    } else {
      const arrayFiltered = DemandCopy.filter(
        (product) => product.plate.id !== id,
      )
      setDemand(arrayFiltered)
    }
    console.log(demand)
  }

  return (
    <CartContext.Provider value={{ addPlates, removePlates }}>
      {children}
    </CartContext.Provider>
  )
}
function useCart() {
  const context = useContext(CartContext)
  return context
}
export { CartProvider, useCart }

// costumer: { id: number }
// restaurant: { id: number }
// date: Date
// dateLastUpdated: Date
// totalValue: number
// paymentType: string
// status: string
// requestItems:
//     plate: {[
//   {
//       id: number
//       price: number
//     }
//     quantity: number
//     price: number
//     observation: string
//   },

// ]
// restaurantPromotion: null
