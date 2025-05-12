import { useDirectusReadItems } from '@/hooks/useDirectus.hook'

const HomePage                              = async () => {
  const { blocks }                          = await useDirectusReadItems('home', { fields: 'blocks:block' })

  console.log(blocks)

  return (
    <>

    </>
  )
}

export default HomePage
