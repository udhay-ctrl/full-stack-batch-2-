import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name = "Surendar"
        age={18}
        isActive={true}
        mark={[98,95,96,98,97]}
        address={{
          pincode:642128,
          email:"surendarkulandaivel767@gmail.com",
          mobile:6379476551
        }}/>
        <Child name = "Arsath"
        age={18}
        isActive={true}
        mark={[98,95,96,98,97]}
        address={{
          pincode:642128,
          email:"surendarkulandaivel767@gmail.com",
          mobile:6379476551
        }}/>
    </div>
  )
}

export default Parent