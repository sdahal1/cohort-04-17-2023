import React from 'react';
import Snack from './Snack';


function SnacksList() {
  let snacks = [
    {
      name: 'Grapes',
      imageUrl: 'https://images.heb.com/is/image/HEBGrocery/000325211'
    },
    {
      name: 'Pretzels',
      imageUrl: 'https://therecipecritic.com/wp-content/uploads/2021/02/ranchpretzels.jpg'
    },
    {
      name: 'Popcorn',
      imageUrl: 'https://img.freepik.com/premium-vector/popcorn-striped-tub_157999-54.jpg?w=2000'
    },
    {
      name: 'Goldfish',
      imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_0efc8fc9-bd0a-4d33-973a-ed58daa363fb?wid=488&hei=488&fmt=pjpeg'
    },
    {
      name: 'Cheese',
      imageUrl: 'https://www.foodandwine.com/thmb/MT4ou8PYjRGpQBEsm1SyZxfN8Oo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-cheese-chefs-always-have-in-their-fridge-FT-BLOG0122-f4ff1613b1b14b09ad0b6c0734a59781.jpg'
    }
  ]

  return <div>
    {snacks.map(snack => <Snack snack={snack} key={snack.name} />)}
  </div>
}

export default SnacksList;
