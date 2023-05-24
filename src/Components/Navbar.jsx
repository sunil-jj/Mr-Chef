import React from 'react'
import { Box, Image} from '@chakra-ui/react'


function Navbar() {
  return (
    <Box bg="white" h="80px">
        This is Box
      <Image marginLeft="20px" marginTop="-15px" boxSize="70px" width="100px" src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/292303680_354333216847986_200622443922396658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ub5zuRLiuvsAX-XZ6po&_nc_ht=scontent-bom1-2.xx&oh=00_AfCkgj7eM0OlvcZShefDt6cLXFNyLAfZ4utEXKxFsQ9Sbg&oe=64723EDA "/>
        <h2 style={{marginRight:"90%",fontFamily:"sans-serif",fontWeight:"400px",fontSize:"15px"}}>Street food</h2>
    </Box>
  )
}

export default Navbar