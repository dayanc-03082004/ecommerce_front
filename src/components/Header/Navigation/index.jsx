import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

import "../Navigation/style.css";
import { fetchDataFromApi } from "../../../utils/api";
import { MyContext } from "../../../App";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [catData, setCatData] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    setCatData(context?.catData);
  }, [context?.catData]);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold r" />
            </Button>
          </div>

          <div className="col_2 flex-1">
            <ul className="flex flex-nowrap items-center gap-3 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                                     hover:!text-[#ff5252] !py-4"
                  >
                    Home
                  </Button>
                </Link>
              </li>

              {catData?.length !== 0 &&
                catData?.map((cat, index) => {
                  return (
                    <li className="list-none relative" key={index}>
                      <Link to={`/productListing?catId=${cat._id}`}
                        className="link transition text-[14px] font-[500]"
                      >
                        <Button
                          className="link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                                     hover:!text-[#ff5252] !py-4"
                        >
                          {cat?.name}
                        </Button>
                      </Link>

                      {cat?.children?.length !== 0 && (
                        <div
                          className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all"
                        >
                          <ul>
                            {cat?.children?.map((subCat, index_) => {
                              return (
                                <li className="list-none w-full relative" key={index_}>
                                <Link to={`/productListing?subCatId=${subCat._id}`} className="w-full">
                                  <Button
                                    className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                            !justify-start !rounded-none"
                                  >
                                    {subCat?.name}
                                  </Button>

                                    {
                                      subCat?.children?.length !== 0 &&
                                      <div
                                    className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all"
                                  >
                                          <ul>
                                            {
                                              subCat?.children?.map((thirdLavelCat, index__) => {
                                                return (
                                                <li className="list-none w-full" key={index__}>
                                        <Link to={`/productListing?thirdsubCatId=${thirdLavelCat._id}`} className="w-full">
                                          <Button
                                            className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                            !justify-start !rounded-none"
                                          >
                                            {thirdLavelCat?.name}
                                          </Button>
                                        </Link>
                                      </li>
                                              )})
                                            }
                                    </ul>
                                  </div>
                                    }
                                </Link>
                                </li>
                              )})}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {
        catData?.length !== 0 &&
        <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
          setIsOpenCatPanel={setIsOpenCatPanel}
          data={catData}
      />
      }
    </>
  );
};

export default Navigation;
