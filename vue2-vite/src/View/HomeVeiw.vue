<template>
    <div>
      <nav class="navbar">
    
        <ul class="navbar-links">
          <li>
            <RouterLink to="/productInput"> Add Product</RouterLink>
          </li>
          <li>
           
          </li>
          <li>
           
          </li>
          <li>
            <RouterLink to="/ProductListing">You can see the productList Here</RouterLink>
          </li>
          
          <li><RouterLink to="/ProductView">Product View</RouterLink></li>
          <li>
           

          </li>
        </ul>
      </nav>
      <p>
      
      </p>
      <main>
       
      </main>
    </div>
    <div>

      <ProductListing2></ProductListing2>
    </div>
    
  </template>
  <script>
import ProductListing2 from '../components/ProductListing2.vue';


export default {
  name: 'HomeView',
  components: {
    ProductListing2
  }
};



</script>




  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #007bff; /* Blue background */
    color: white;
  }
  
  .navbar-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffdf00; /* Bright yellow title */
  }
  
  .navbar-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
  
  .navbar-links li {
    font-size: 1.1rem;
  }
  
  .navbar-links a {
    text-decoration: none;
    color: #ffdf00; /* Bright yellow links */
    padding: 0.5rem 1rem;
    background-color: #28a745; /* Green background for links */
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .navbar-links a:hover {
    background-color: #ffc107; /* Change to yellow on hover */
    color: #333;
  }
  </style>
  