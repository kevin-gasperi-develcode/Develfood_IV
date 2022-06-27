import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'
interface CartProviderProps {
  children: ReactNode
}
interface CartData {
  addPlates: Function
  removePlates: Function
  cartCounter: Function
  deletePlate: Function
  totalPrice: number
}
interface CartItemsProps {
  plate: PlateContent
  quantity: number
  price: number
  observation?: string
  restaurantId: string
}
;[]
interface PlateContent {
  id: number
  price: number
}

const CartContext = createContext({} as CartData)

function CartProvider({ children }: CartProviderProps) {
  const [demand, setDemand] = useState<CartItemsProps[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {}, [demand])
  useEffect(() => {
    console.log('total price', totalPrice)
  }, [totalPrice])

  function addPlates(id: number, price: number, restaurantId: any) {
    const item = demand.find((product) => product.plate.id === id)
    const fromOtherRestaurant = demand.find(
      (demand) => demand.restaurantId !== restaurantId,
    )

    if (!fromOtherRestaurant) {
      if (!item) {
        demand.push({
          plate: { id, price },
          quantity: 1,
          price: price,
          observation: '',
          restaurantId: restaurantId,
        })
      } else {
        ;(item.quantity += 1), (item.price = item.price + price)
      }
      setDemand(demand)
      setTotalPrice(totalPrice + price)
    } else {
      Alert.alert(
        'Aviso',
        'você pode adicionar apenas ítens do mesmo restaurante',
      )
    }
  }

  function removePlates(id: any, price: any, restaurantId: any) {
    const demandCopy = [...demand]
    const itemFound = demand.find((product) => product.plate.id === id)

    if (itemFound) {
      itemFound.quantity < 2
        ? demand.splice(demand.indexOf(itemFound), 1)
        : (itemFound.quantity -= 1)
      setTotalPrice(totalPrice - price)
    }
  }

  function deletePlate(id: number, price: number, restaurantId: any) {
    const itemFound = demand.find((product) => product.plate.id === id)
    if (itemFound) {
      demand.splice(demand.indexOf(itemFound), 1)
      setTotalPrice(totalPrice - itemFound.price)
    }
  }

  function cartCounter() {
    const cartLength = demand.map((product) => product.quantity)
    let cartSoma = 0
    for (let i = 0; i < cartLength.length; i++) {
      cartSoma += cartLength[i]
    }
    return cartSoma
  }

  return (
    <CartContext.Provider
      value={{ addPlates, removePlates, cartCounter, deletePlate, totalPrice }}
    >
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
//   },]
// restaurantPromotion: null
