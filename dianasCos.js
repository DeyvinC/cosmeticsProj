// Import collections (Products, Customers, Orders)
const products = require('./products.json');
const customers = require('./customers.json');
const orders = require('./orders.json');

// import tools
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, QuerySnapshot } = require('firebase-admin/firestore');

//import our credentials
const credentials = require('./credentials.json');

//connect to FireBase services
initializeApp({
    credential: cert(credentials)
});

// connect to Firestore
const db = getFirestore();

// create collections called "products" "customers" "restaurants"
const productsCol = db.collection('products')
const customersCol = db.collection('customers')
const ordersCol = db.collection('orders')

// add item to products collection
productsCol.add(products[2])
.then(doc => [
    console.log('Added product', doc.id)
])
.catch(error => [
    console.log(error)
]);
productsCol.add(products[1])
.then(doc => [
    console.log('Added product', doc.id)
])
.catch(error => [
    console.log(error)
]);
productsCol.add(products[0])
.then(doc => [
    console.log('Added product', doc.id)
])
.catch(error => [
    console.log(error)
]);

// //add customer to customers collection
customersCol.add(customers[0])
.then(doc => [
    console.log('Added customer', doc.id)
])
.catch(er => [
    console.log(err)
]);
customersCol.add(customers[1])
.then(doc => [
    console.log('Added customer', doc.id)
])
.catch(er => [
    console.log(err)
]);
customersCol.add(customers[2])
.then(doc => [
    console.log('Added customer', doc.id)
])
.catch(er => [
    console.log(err)
]);

// //add orders to orders collection
ordersCol.add(orders[0])
.then(doc => [
    console.log('Added order', doc.id)
])
.catch(er => [
    console.log(err)
]);
ordersCol.add(orders[1])
.then(doc => [
    console.log('Added order', doc.id)
])
.catch(er => [
    console.log(err)
]);
ordersCol.add(orders[2])
.then(doc => [
    console.log('Added order', doc.id)
])
.catch(er => [
    console.log(err)
]);

// // read one document
productsCol.doc('BSmGQwMFA4cZRQeIepnJ').get()
  .then(doc => {
    console.log(doc.id, ' => ', doc.data());
  })
  .catch(err => console.error(err));

  // read a collection
customersCol.get().then(querySnapshot =>{
    querySnapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data())
    })
      
}).catch(err => console.error(err));

   
// // Update Customers

customersCol.doc('CnX656QdDmtBv675Fw18').update({Email: 'vroas@gmail.com'})
 
// Update Orders

ordersCol.doc('C9bLVQ6idQJ2onXlVjWe').update({customerId: 'Jen1245', products: 'LipStick'})


// // get all documents
restRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, ' ===> ', doc.data());
    })
  })
  .catch(console.error);