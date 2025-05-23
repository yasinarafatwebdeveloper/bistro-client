import { Link } from "react-router-dom";


const SingleProduct = ({products}) => {

    const{name,image,recipe,category,}=products
    return (
        <div className="card bg-base-100 shadow-sm">
        <figure className="px-5 pt-10">
          <img
            src={image}
            alt="products"
            className="rounded-xl w-full h-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="">
        <Link to="/order">
        <button className="btn btn-outline btn-primary border-0 border-b-4">Order Now</button>
        </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;