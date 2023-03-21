
function Clothes({ anyCloth }) {
    return (
        <div className="products">
            { anyCloth.map(( element => {
                const { id, name, searchTerm, price, image } = element;
                return (
                    <div key={ id } className='product-card'>
                        <img src={ image } />
                        <h3>{ id } - { name } </h3>
                        <h4>{ searchTerm }</h4>
                        <h4>{ price } $</h4>
                    </div>
                )
            }))
            }
        </div>
    )
}


export default Clothes;

