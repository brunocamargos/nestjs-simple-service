import { Injectable, NotFoundException } from '@nestjs/common'

import { CreateCoffeeDto, UpdateCoffeeDto } from './dto'
import { Coffee } from './entities'

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id)
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }
    return coffee
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({ ...createCoffeeDto, id: 2 })
  }

  update(id: string, _updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id)
    if (existingCoffee) {
      // update it
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id)

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1)
    }
  }
}
