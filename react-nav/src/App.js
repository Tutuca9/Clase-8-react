import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//importamos los comp creados
import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu';
import ItemDetailConatainer from './Container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';


function App() {

    //    <ItemCount initial={1} stock={10} onAdd={onAdd} />

    return (
        <div
        //onClick={()=> alert('soy app')}  
        >
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route index path="/" element={<ItemListContainer />} />
                    <Route path="/descripcion/:descripcionId" element={<ItemListContainer />} />

                    <Route path="/detalle/:id" element={<ItemDetailConatainer />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/error" element={<Error404 />} />                */}

                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

            </BrowserRouter>
        </div>
    )

}


export default App
