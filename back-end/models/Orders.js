
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
  
    shippingInfo: {
        address: {
          type: String,
          required: true,
        },
        storeAddress: {
          type: String,
          required: true,
        },
        phoneNo: {
          type: Number,
          required: true,
        },
      },

      orderItems:[
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },  
        
        washtypes:[
            {
                name: {
                    type: String,
                    required: true,
                  },
                washprice:{
                    type: Number,
                    required: true,
                }
            }
        ]
    }
      ],
      createdAt: {
        type: Date,
        default: Date.now,}
      
    });
    
    module.exports = mongoose.model("Order", ordersSchema);


