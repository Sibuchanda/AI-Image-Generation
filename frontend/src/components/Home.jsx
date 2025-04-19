import React, { useState } from 'react'

import { Loader, Card, FormField } from '../components/index'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);


  return (
    <div>Home</div>
  )
}

export default Home;