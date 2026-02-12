export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  {
    id: "donacion-10000",
    name: "Donacion $10.000 COP",
    description: "Donacion de $10.000 COP para la Fundacion Vivir Mejor",
    priceInCents: 1000,
  },
  {
    id: "donacion-25000",
    name: "Donacion $25.000 COP",
    description: "Donacion de $25.000 COP para la Fundacion Vivir Mejor",
    priceInCents: 2500,
  },
  {
    id: "donacion-50000",
    name: "Donacion $50.000 COP",
    description: "Donacion de $50.000 COP para la Fundacion Vivir Mejor",
    priceInCents: 5000,
  },
  {
    id: "donacion-100000",
    name: "Donacion $100.000 COP",
    description: "Donacion de $100.000 COP para la Fundacion Vivir Mejor",
    priceInCents: 10000,
  },
]
