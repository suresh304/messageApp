import React from 'react'

function Profile({src}) {
    const styles={
        width:"50px",
        height:"50px",
        borderRadius:"50%"
    }
  return (
    <div className=''>

    <img src={src}  style={styles} />
    </div>
  )
}

export default Profile