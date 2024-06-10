import React from 'react'

const MyImage = () => {
  return (
    <>
    <div className='image-container'>
    <div>
      <img src='/Images/Image.jpg' alt='' width={250} height={250} className='myImage'/>
    </div>
    <div>
        <h3>My Profile</h3>
        <p className='sub-text'>I am a passionate and innovative Brand and UiUx Designer with a keen eye for detailed
            and a flair for creating captivating visual experience. With a strong background in Design
            principles and a deep understanding for user behavior. i craft remarkable brand identity and seamless
            user interfaces that leaves a lasting impressions.
        </p>
    </div>
    </div>
    </>
  )
}

export default MyImage
