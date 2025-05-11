import React , {useEffect, useState} from 'react'
import axios from 'axios'

const Prom = () => {

   const [Posts , setPosts] = useState([])

     useEffect(()=> {
                      axios
                         .get('http://jsonplaceholder.typicode.com/posts')

                     .then(res => {
                               console.log(res)
} )

                        .catch(err => {
console.log(err)
                        
} )
})
                             return (
<div>
<h1>working on axios and promises</h1>
</div>
           )
}

export default Prom


