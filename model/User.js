import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userShema = new Schema({
    fullname: {
      type: String, required: true
    },
    email: {
      type: String, required: true
    },
    password: {
      type: String, required: true
    },
    orders:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ],
    wishLists:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WishList'
      }
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hasShippingAdress: {
      type: Boolean,
      default: false,
    },
    shippingAdress: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      adress: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      province: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
      type: String,
      }
    }
  }, 
  {
    timestaps: true,
  }
);

// compile the schema to model
const User = mongoose.model('User', UserSchema);

export default User;
