let productos = [
    {
        id: '1',
        nombre: 'Cafe Venezuela',
        descripcion: 'Granos de cacao',
        stock: '5',
        precio: '50',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'
    },
    {
        id: '2',
        nombre: 'Cafe Colombia',
        descripcion: 'Granos de cacao',
        stock: '5',
        precio: '50',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'
    },
    {
        id: '3',
        nombre: 'Cafe Portuges',
        descripcion: 'Granos de cacao',
        stock: '5',
        precio: '50',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
    {
        id: '4',
        nombre: 'Cafe Camerún ',
        descripcion: 'Granos de cacao',
        stock: '5',
        precio: '50',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
];

export const getFetch = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)    
        // reject('no qtengo nada para')    
    })
}  

//consulta de un producto
let producto = {  id: '1', nombre: 'Cafe Venezuela', descripcion: 'Granos de cacao', stock: '5', precio: '50', foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'}
export const getFetchOne = () =>{    
   
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(producto)   
        },2000)    
        // reject('no qtengo nada para')    
    })
}  