import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref:'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    shipping_address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default:"pending"

    },
    delivery_charges: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

const   Order  = mongoose.model('Order', orderSchema)

export default Order