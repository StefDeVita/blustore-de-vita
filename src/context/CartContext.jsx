import React,{createContext,useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [items,setItems] = useState([]);
    const [cantidad,setCantidad]=useState(0);
    const [precio,setPrecio]=useState(0);
    const [id,setId] = useState("")

    const calcularTotal = () =>{
        let cantidad = 0;
        let total = 0;
        items.forEach((item)=>{
            cantidad += item.cantidad;
            total += item.cantidad * item.item.precio;
            
        })
        setCantidad(cantidad);
        setPrecio(total);
    }
    const setIdCompra = (id) =>{
        setId(id)
    }
    const borrar = () =>{
        setItems([]);
        setCantidad(0);
        setPrecio(0);
    }
    const eliminarItem = (idRecibido) =>{
        const nuevosItems = items;
        const i = nuevosItems.findIndex(item=>
            item.item.id === idRecibido
        );
        nuevosItems.splice(i,1)
        setItems([...nuevosItems]);
        calcularTotal();
    }
    
    const agregarItem = (item,cantidad) =>{
        const objeto = {
            item,
            cantidad,
        };
        
        const i = items.findIndex((item)=>{
            return item.item.id === objeto.item.id;
        });
        
        if(i===-1){
            items.push(objeto);
        }
        else{
            items[i].cantidad += objeto.cantidad;
            if(items[i].cantidad >= items[i].item.stock){
                items[i].cantidad = items[i].item.stock
            }
        }
        
        setItems([...items]);
        calcularTotal();
    }
    return (
        <CartContext.Provider value={{id,cantidad,items, agregarItem, borrar, precio,eliminarItem,setIdCompra }}>
          {children}
        </CartContext.Provider>
      );
}

export default CartProvider;
