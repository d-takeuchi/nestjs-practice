import { Test } from '@nestjs/testing'
import { ItemRepository } from './item.repository'
import { ItemsService } from './items.service'

const mockItemRepository = () => {
  {
    find: jest.fn()
  }
}

describe('ItemsServiceTest', () => {
  let itemsService
  let itemRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemRepository,
        },
      ],
    }).compile()

    itemsService = module.get<ItemsService>(ItemsService)
    itemRepository = module.get<ItemRepository>(ItemRepository)
  })

  describe('findAll', () => {
    it('正常系', async () => {
      const expected = []
      itemRepository.find.mockResolvedValue(expected)
      const result = await itemsService.findAll()
      console.log(result)
      expect(result).toEqual(expected)
    })
  })
})
