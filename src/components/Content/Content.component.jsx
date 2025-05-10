

const ContentComponent                      = ({ children }) => {
  return (
    <>
      <div
        id='Content'
        className='content'>
        <div
          className='content-container'>
          { children }
        </div>
      </div>
    </>
  )
}

export default ContentComponent
