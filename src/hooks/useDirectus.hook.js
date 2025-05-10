import { notFound } from 'next/navigation'
import { readItem, readItems } from '@directus/sdk'

import directus from '@/libs/directus.lib'

const useDirectusReadItem                   = async (collection, key, query) => {
  try {
    if(!collection && typeof collection !== 'string')
      throw 'Collection is required, and needs to be a string.'

    else if(!key && (typeof key !== 'string' || typeof key !== 'number'))
      throw 'Key is required, and needs to be either a string or a number.'

    return !query
      ? directus.request(readItem(collection, key))
      : directus.request(readItem(collection, key, query))
  } catch(error) {
    return console.error(error)
  }
}

const useDirectusReadItems                  = async (collection, query) => {
  try {
    if(!collection && typeof collection !== 'string')
      throw 'Collection is required, and needs to be a string.'

    return !query
      ? directus.request(readItems(collection))
      : directus.request(readItems(collection, query))
  } catch(error) {
    return console.error(error)
  }
}

// Export the hooks
export {
  useDirectusReadItem,
  useDirectusReadItems
}
