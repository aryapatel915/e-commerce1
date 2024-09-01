import { Request, Response } from "express";
import Order from "../../database/models/orderModel";
import OrderItem from "../../database/models/orderItemModel";
import { includes } from "lodash";
import Users from "../../database/models/userModel";
import Product from "../../database/models/productModel";
import nodemailer from 'nodemailer';


class OrderService{
    async AddOrder(body : any){
        try {
            const total_amount = parseInt(body.quantity) * parseFloat(body.price)
            const AddedOrder = await Order.create({
                user_id : body.userid,
                status : body.status,
                total_amount : total_amount,
                created_at : new Date()
            })

            const orderItem = await OrderItem.create({
                order_id : AddedOrder.id,
                product_id : body.product_id,
                quantity : body.quantity,
                price : body.price
            })

            let obj = {
                orederDetails : [AddedOrder,orderItem]

            }

            if(AddedOrder || OrderItem){
                const userDetails = await Users.findOne({ where: { userid: body.userid } });
            const products = await Product.findAll({ where: { productId: body.product_id } });
    
            if (!userDetails || products.length === 0) {
                throw new Error("User or products not found");
            }
    
            const userEmail = userDetails.email;
    
            let productDetailsHTML = '';
    
            products.forEach(product => {
                productDetailsHTML += `
                    <div style="margin-bottom: 20px;">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <p>Stock Quantity: ${product.stockQuantity}</p>
                    </div>
                `;
            });
    
            const htmlMessage = `
                <div>
                    <h1>Your Order Has Been Placed!</h1>
                    <p>Thank you for your purchase. Here are the details of your order:</p>
                    ${productDetailsHTML}
                </div>
            `;
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '01kingrajput01@gmail.com',
                    pass: 'axla bzek ybuo wfwx'
                }
            });
    
            const mailOptions = {
                from: '01kingrajput01@gmail.com',
                to: userEmail,
                subject: 'Order Confirmation',
                html: htmlMessage
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            }
            
            return obj
        } catch (error) {
            console.log("🚀 ~ OrderService ~ AddOrder ~ error:", error)
            
        }
    }

    async GetOrderAllUser(userid : any){
        console.log('userid: ', userid);
        try {
            const userOrderData = await Order.findAll({where : {user_id : userid},include : [OrderItem,Users]});
            console.log('userOrderData: ', userOrderData);
            let product_id;
            userOrderData.forEach(ele => {
                console.log('ele: ',);
                product_id =  ele.orderItems[0].product_id
            })
            const productsLet = await Product.findAll({where : {productId : product_id}})
            console.log('product_id: ', product_id);
            let obj = {
                orderDETAil : userOrderData,
                productYEAH : productsLet
            }
            return obj;
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    async getParticularOrder(orderid : any){
        try {
            const getParticularId = await Order.findOne({where : {id : orderid}})
            return getParticularId
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    async updateStatus(body : any){
        try {
            const statusUpdated = await Order.update({status : body.status},{where : {id : body.id}})
            return statusUpdated
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    
    async sendOrderConfirmationEmail(body: any) {
        try {
            // Step 1: Fetch Data
            const userDetails = await Users.findOne({ where: { userid: body.userid } });
            const products = await Product.findAll({ where: { productId: body.product_id } });
    
            if (!userDetails || products.length === 0) {
                throw new Error("User or products not found");
            }
    
            const userEmail = userDetails.email;
    
            let productDetailsHTML = '';
    
            products.forEach(product => {
                productDetailsHTML += `
                    <div style="margin-bottom: 20px;">
                        <h4>Product Name : ${product.name}</h4>
                        <p>Description : ${product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                `;
            });
    
            const htmlMessage = `
                <div>
                    <h1>Your Order Has Been Placed!</h1>
                    <p>Thank you for your purchase. Here are the details of your order:</p>
                    ${productDetailsHTML}
                </div>
            `;
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '01kingrajput01@gmail.com',
                    pass: 'axla bzek ybuo wfwx'
                }
            });
    
            const mailOptions = {
                from: '01kingrajput01@gmail.com',
                to: userEmail,
                subject: 'Order Confirmation',
                html: htmlMessage
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
}




export default new OrderService()