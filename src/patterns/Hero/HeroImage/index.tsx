import Image from 'next/image'
import heroImage from '../../../assets/hero-plant.png'
import { Figure } from './styles'

export function HeroImage() {
  return (
    <Figure>
      <Image
        src={heroImage}
        alt='Planta pequena dentro de um jarro feito de cordas entrelaçadas'
      />
    </Figure>
  )
}
