import { AuthorOutput, HomeownerOutput } from "@/@custom-types/graphql";
import { GET_HOMEOWNER } from "@/graphql/queries/blog";
import { formatDataGraphql } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons
import { Alert } from "../alert";
import MasterBlock from "../master-block";
import { MasterDatalist } from "./chu-nha-data";
import { MasterContentWrapper } from "./styled";

const MasterContent: React.FC = () => {
  const [homeowners, setHomeowners] = useState<HomeownerOutput[]>([]);

  const [masterData, setMasterData] = useState(MasterDatalist);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce implementation for search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm) {
        const searchedMaster = MasterDatalist.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
        setMasterData(searchedMaster);
      } else {
        setMasterData(MasterDatalist); // Reset to original data when search term is empty
      }
      setLoading(false);
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchTerm(event.target.value);
  };

  const handleFilter = (area: string) => {
    setLoading(true);
    setTimeout(() => {
      const filteredMasterData = MasterDatalist.filter((item) => item.area_value === area);
      setMasterData(filteredMasterData);
      setLoading(false);
    }, 1000);
  };

  const [getHomeowner] = useLazyQuery<AuthorOutput>(GET_HOMEOWNER, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    getHomeowner()
      .then(({ data }) => {
        const formatData = formatDataGraphql(data, "homeowners");
        if (formatData) {
          setHomeowners(formatData);
        }
      })
      .catch((e) => {
        Alert("ERROR", "");
        console.log(e);
      });
  }, []);

  const formatData: HomeownerOutput[] = useMemo(() => {
    return homeowners.map((item, key) => ({
      name: item.name,
      description: item.description,
      location: item.location,
      sallary: item.sallary, // Updated to lowercase
      image: item.image,
    }));
  }, [homeowners]);

  return (
    <MasterContentWrapper className="">
      <p className="text-center mt-9 mb-3">Dưới đây là những chủ nhà phù hợp với nhu cầu của bạn</p>
      {/* Search Function */}
      <div className="relative w-2/4 input-mb">
        <input
          onChange={handlerSearch}
          className="p-12 border border-zinc-950 border-solid w-full rounded"
          placeholder="Tìm kiếm tên chủ nhà, khu vực"
        />
        <div className="absolute rounded right-1 top-1/2 transform -translate-y-1/2 text-zinc-950 p-2.5 bg-blue">
          <FaSearch className="white" />
        </div>
      </div>
      {/* Title Khu vực và Filter layout */}
      <h2 className="pt-9 pb-7 text-blue uppercase">Khu vực</h2>
      <div className="filter-section gap-1.5">
        <div className="relative area HCM px-14 py-6">
          <div className="absolute linear inset-0 z-10"></div>
          <div className="relative z-20">
            <div className="white uppercase text-center">Hồ Chí Minh</div>
          </div>
        </div>
        <div className="relative area TD px-14 py-6">
          <div className="absolute linear inset-0 z-10"></div>
          <div className="relative z-20">
            <div className="white uppercase text-center	">Thủ Đức</div>
          </div>
        </div>
        <div className="relative area CT px-14 py-6">
          <div className="absolute linear inset-0 z-10"></div>
          <div className="relative z-20">
            <div className="white uppercase text-center	">Cần Thơ</div>
          </div>
        </div>
        <div className="relative area HN px-14 py-6">
          <div className="absolute linear inset-0 z-10"></div>
          <div className="relative z-20">
            <div className="white uppercase text-center	">Hà Nội</div>
          </div>
        </div>
      </div>
      {/* Danh sách kết quả */}
      <h2 className="result pt-9 pb-7 uppercase text-blue">Danh sách kết quả</h2>
      <div className="content-board">
        {loading ? (
          <p>Đang tìm kiếm</p> // Display spinner while loading
        ) : formatData.length > 0 ? (
          formatData.map((item, key) => (
            <div key={key}>
              <MasterBlock item={item} />
            </div>
          ))
        ) : (
          <p>Không tìm thấy kết quả phù hợp</p>
        )}
      </div>
    </MasterContentWrapper>
  );
};

export default MasterContent;
