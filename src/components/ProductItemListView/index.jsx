import React, { useContext } from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdZoomOutMap } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MyContext } from '../../App';

const ProductItem = (props) => {

    const context = useContext(MyContext);

    return (
        <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]
        flex items-center'>
            <div className='group imgWrapper w-[25%] h-[220px] overflow-hidden rounded-md relative'>
                <Link to='/'>
                    <div className='img overflow-hidden'>
                        <img src={props?.item?.images[0]} className='w-full' />

                        <img src={props?.item?.images[1]} className='w-full transition-all duration-700
                        absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                    </div>
                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50
                bg-primary text-white rounded-md p-1 text-[12px] font-[500]'>{props?.item?.discount}%</span>

                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2
                flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0
                group-hover:opacity-100'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full
                    !bg-white text-black hover:!bg-primary hover:text-white group' onClick={() => context.
                            setOpenProductDetailModal(true)}>
                        <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white
                        hover:!text-white'/>
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full
                    !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white
                        hover:!text-white'/>
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full
                    !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white
                        hover:!text-white'/>
                    </Button>
                </div>
            </div>

            <div className="info p-3 px-8 py-5 w-[75%]">
                <h6 className='text-[15px] !font-[400]'>
                    <Link to='/' className='link transition-all'>
                        {props?.item?.brand}
                    </Link>
                </h6>
                <h3 className='text-[18px] title mt-3 mb-3 font-[500] text-[#000]'>
                    <Link to='/' className='link transition-all'>
                        {props?.item?.name}
                    </Link>
                </h3>

                <p className='text-[14px] mb-3'>
                    {props?.item?.description}
                </p>

                <Rating name="size-small" value={props?.item?.rating} size="small" readOnly />

                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>&#x20b9; {props?.item?.oldPrice}</span>
                    <span className='price text-primary text-[15px] font-[600]'>&#x20b9; {props?.item?.price}</span>
                </div>

                <div className='mt-3'>
                    <Button className='btn-org flex gap-2'>
                        <MdOutlineShoppingCart className='text-[20px]' />Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default ProductItem;