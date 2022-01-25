import React from 'react';

export default function Popup() {
  return <div>   
      <form>

  <div className="summary">
    <header className="navbar">
      <ul>
        <li>Sumarry</li>
        <li>
          <a href="#">
             <strong>X</strong> 
          </a>
        </li>
      </ul>
    </header>

  <div className="address-info">
    <div className="location">
      <label>Store Location:</label>
      <input type="text" name="location"/>
    </div>
    <div className="address">
      <label>Store Address:</label>
      <input type="text" name="address"/>
    </div>
    <div className="phone">
      <label>Phone:</label>
      <input type="text" name="phone"/>
    </div>
  </div>

  <div className="order-detail">
    <div className="order-details">

      order details
    </div>
    <table>
      
      <tbody>
        <tr>
          <td>Sales</td>
          <td>Profit</td>
          <td>Sales</td>
          
        </tr>
        <tr>
          <td>Sales</td>
          <td>Profit</td>
          <td>Sales</td>
          
        </tr>
        <tr>
          <td>$200,00</td>
          <td>$50,00</td>
          <td>$300,000</td>
          
        </tr>
      </tbody>
        
      <tfoot>
        
        <tr>
          <th></th>
          <th></th>
          <th>sub total: 4000</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>pickup price: 1000</th>
        </tr>
        <tr className="total">
          <th></th>
          <th></th>
          <th>total: 5000</th>
        </tr>
      </tfoot>
    </table>
  </div>

<div className="address-title">Address</div>
<section className="add-new-address">
<div className="default-add">
<h4>Home</h4>
<p>asdfgh jkzxcv bertyu</p>
</div>

<div className="confirm-add">
<h4>Other</h4>
<p>qwertyui opsdasd fghjklz xcvbnm</p>
</div>  
<span className="add-new">ADD NEW</span>
</section>
</div>
<footer>
<div className="btn"><button>CONFIRM</button></div>
</footer>
</form>
</div>
}
