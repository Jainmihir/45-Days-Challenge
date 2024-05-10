import Mobile from "./Mobile"
import Mobiles from './list.json'


// function AppProps(props){
//     return(
//         <h1>Hello This without destructing {props.user}</h1>
//     )
// }


// function AppProps({user}){
//     return(
//         <h1>Hello this is with destructuring {user}</h1>
//     )
// }

// export default AppProps

// function AppProps(props){
//     const {user} = props
//     return(
//         <h1>Hello this is with destructuring {user}</h1>
//     )
// }

// export default AppProps

// function AppProps({user}){
//     return(
//         <>
//         <Mobile/>
//         <Mobile/>
//         <Mobile/>
//         <Mobile/>
//         <Mobile/>
//         <Mobile/>
//         </>
//     )
// }

// export default AppProps

// const Mobiles = {

//     img : "https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg",
//     name : "Iphone 14 Pro Max",
//     price : "$200",
//     addToCart : () => {},
// }

// function AppProps(){
//     return(
//         <>
//         <Mobile obj={Mobiles}/>
//         </>
//     )
// }

// export default AppProps

// const Mobiles = [
//     {
//         id : 1,
//         img : "https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg",
//         name : "Iphone 14 Pro Max",
//         price : "$200",
//         addToCart : () => {},
//     },
//     {
//         id: 2,
//         img : "//images.samsung.com/is/image/samsung/p6pim/in/sm-a156ezbqins/gallery/in-galaxy-a15-5g-sm-a156-490596-sm-a156ezbqins-539413402?$2052_1641_PNG$",
//         name : "Samsung Galaxy",
//         price : "$200",
//         addToCart : () => {},
//     }
// ]

// function AppProps(){
    
//     return(
//         <div>
//             {Mobiles.map((eachProd) => {
//             return <Mobile key={eachProd.id} img={eachProd.img} name={eachProd.name} price={eachProd.price} addToCart={eachProd.addToCart}/>
//         })}
//         </div>
//     )
// }

// export default AppProps


function AppProps(){
    
    return(
        <div>
            {Mobiles.map((eachProd) => {
            return <Mobile key={eachProd.id} img={eachProd.img} name={eachProd.name} price={eachProd.price} addToCart={eachProd.addToCart}/>
        })}
        </div>
    )
}

export default AppProps