export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  displayPrice: string
}

export const PRODUCTS: Product[] = [
  {
    id: "donacion-10000",
    name: "Donacion $10.000 COP",
    description: "Ayuda basica para una familia",
    priceInCents: 1000000,
    displayPrice: "$10.000",
  },
  {
    id: "donacion-25000",
    name: "Donacion $25.000 COP",
    description: "Kit de medicamentos esenciales",
    priceInCents: 2500000,
    displayPrice: "$25.000",
  },
  {
    id: "donacion-50000",
    name: "Donacion $50.000 COP",
    description: "Jornada de salud comunitaria",
    priceInCents: 5000000,
    displayPrice: "$50.000",
  },
  {
    id: "donacion-100000",
    name: "Donacion $100.000 COP",
    description: "Programa completo de atencion",
    priceInCents: 10000000,
    displayPrice: "$100.000",
  },
]
