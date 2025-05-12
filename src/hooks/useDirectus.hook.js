import { notFound } from 'next/navigation'
import { readItem, readItems } from '@directus/sdk'

import directus from '@/libs/directus.lib'

const useDirectusReadItem                   = async (collection, key, query = { fields: null }) => {
  try {

  } catch(error) {
    return console.error(error)
  }
}

const useDirectusReadItems                  = async (collection, query = { filter: null, fields: null }) => {
  const regex                               = new RegExp(/((\w+)\:([A-Za-z0-9\|]+))/)

  try {
    if(!collection && typeof collection !== 'string')
      throw 'Collection is required, and needs to be a string.'

    if(query.fields && typeof query.fields === 'string' && !regex.test(query.fields))
      throw 'When "fields" is a string, it needs to follow the pattern: field:block|block_2.'

    else if(query.fields && typeof query.fields === 'string' && regex.test(query.fields)) {
      query.fields                          = [
        '*',
        {
          [ query.fields.match(regex)[ 2 ] ]: [
            '*',
            {
              item: {
                ...query.fields.match(regex)[ 3 ].split('|').reduce((_, item) => (_[ item ] = [ '*' ], _), {}),
              },
            },
          ],
        },
      ]
    }

    return !query.filter && !query.fields
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
