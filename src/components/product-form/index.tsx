import React, { useEffect, useState } from "react";
import { ProductFormWrapper } from "./styled";
import { Flex } from "@/styles/common";
import axiosClient from "@/utils/axios-client";
import { useToast } from "../toast-provider";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/reducers/quanly-reducer";
import axios from "axios";

interface productProps {
  setShow: any;
}

const ProductForm = ({ setShow }: productProps) => {
  const [form, setForm] = useState<{
    ID_Category: number;
    Name: string;
    Price: number;
    Quantity: number;
    Description: string;
    Image: string;
  }>({
    ID_Category: 1,
    Name: "",
    Price: 0,
    Quantity: 0,
    Description: "",
    Image: "",
  });

  const dispatch = useDispatch();
  const [thumbnailPreview, setThumbnailPreview] = useState<File | null>(null);
  const [error, setError] = useState();
  const { showToast } = useToast();

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file); // tên field là 'image' như trong docs

    try {
      const res = await axiosClient.post("public/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showToast("Up load hình thành công");
      setForm((prev) => ({ ...prev, Image: res.data.imageUrl }));
      console.log("Upload thành công:", res.data);
    } catch (error) {
      console.error("Upload thất bại:", error);
    }
  };

  const createProduct = async (data: any) => {
    try {
      const res = await axiosClient.post("products/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        console.log("Upload thành công:", res);
        showToast("Tạo sản phẩm thành công");
        setShow();
      }
    } catch (e: any) {
      console.log("Lỗi upload:", e);
      showToast("Lỗi rồi", e.data);
    } finally {
      dispatch(setLoading());
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailPreview(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct({
      ...form,
      Price: Number(form.Price),
      Quantity: Number(form.Quantity),
      ID_Category: Number(form.ID_Category),
    });
  };

  return (
    <ProductFormWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p className="text-red text-center">{error}</p>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <Flex gap={20}>
            <div>
              <p>Tên sản phẩm</p>
              <input name="Name" value={form.Name} onChange={handleChange} required />
            </div>
            <div>
              <p>Giá tiền</p>
              <input name="Price" type="number" value={form.Price} onChange={handleChange} />
            </div>
          </Flex>

          <Flex gap={20}>
            <div>
              <p>Số lượng</p>
              <input name="Quantity" type="number" value={form.Quantity} onChange={handleChange} />
            </div>
            <div>
              <p>Link hình ảnh</p>
              <input name="Image" value={form.Image} disabled placeholder="Vui lòng upload hình ảnh" />
            </div>
          </Flex>
          <div>
            <p>Mô tả</p>
            <input
              className="w-full min-[40px] p-4:"
              value={form.Description}
              name="Description"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Danh mục</p>
            <input
              className="w-full min-[40px] p-4:"
              value={form.ID_Category}
              name="ID_Category"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Hình ảnh</p>
            <input type="file" onChange={handleThumbnailChange} placeholder="Vui lòng up hình ảnh" />
            {thumbnailPreview && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={URL.createObjectURL(thumbnailPreview)}
                  alt="Thumbnail Preview"
                  style={{ width: "150px", border: "1px solid #ccc" }}
                />
                <button
                  className={`px-2 py-2 bg-white mt-[10px] text-black rounded-[5px] hover:bg-gray-400`}
                  onClick={() => handleImageUpload(thumbnailPreview)}
                >
                  Upload hình
                </button>
              </div>
            )}
          </div>

          <hr style={{ margin: "20px 0" }} />

          <br />
          <div className="flex gap-[10px]">
            <button type="submit" className="w-full bg-yellow-500 px-2 py-2 rounded-[10px]">
              Tạo sản phẩm
            </button>
            <button className="w-full bg-yellow-500 px-2 py-2 rounded-[10px]" onClick={setShow}>
              Đóng
            </button>
          </div>
        </div>
      </form>
    </ProductFormWrapper>
  );
};

export default ProductForm;
