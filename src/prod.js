
function Products() {
    const pro1 = './pro1.png';
    const pro2 = './pro2.png';
    const pro3 = './pro3.png';
    const pro4 = './pro4.png';
    const pro5 = './pro5.jpg';
    const pro6 = './pro6.jpg';
    const pro7 = './pro7.jpg';
    const pro8 = './pro8.jpg';

    return (
        <div className="container">
            <h1 className="habt">Our Products</h1>
            <div className="row">
                <div className="col-3">
                    <div className="pro1">
                        <h2>screws</h2>
                        <img src={pro1} alt="Product 1" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro2">
                        <h2>Hinges</h2>
                        <img src={pro2} alt="Product 2" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro3">
                    <h2>Aldrops</h2>
                        <img src={pro3} alt="Product 3" />
                    </div>
                </div> 
                <div className="col-3">
                    <div className="pro4">
                    <h2>Towerbolts</h2>
                        <img src={pro4} alt="Product 4" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro5">
                    <h2>Mortice Locks</h2>
                        <img src={pro5} alt="Product 4" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro6">
                    <h2>LOCKs</h2>
                        <img src={pro6} alt="Product 4" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro7">
                    <h2>Pedilite Products</h2>
                        <img src={pro7} alt="Product 4" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="pro8">
                    <h2>Nails</h2>
                        <img src={pro8} alt="Product 4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
