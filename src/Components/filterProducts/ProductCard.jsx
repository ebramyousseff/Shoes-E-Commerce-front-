import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {singleProduct} from "../../features/slices/productsSlice";

const ProductCard = ({ id, name, img, text, price, colors }) => {
  const dispatch = useDispatch();
  const {type} = useParams()

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
    <Card className="w-96" onClick={()=>dispatch(singleProduct(id))}>
      <CardHeader color="blue-gray" className="relative h-96">
        <img src={img} alt="card-image" className="h-full w-full"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{price}$</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default ProductCard;
