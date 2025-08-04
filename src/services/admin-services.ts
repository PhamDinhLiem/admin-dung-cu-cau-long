import axiosClient from "@/utils/axios-client";

export class AdminServices {
  private coreProductUrl = `products`;
  private coreVoucerUrl = `Voucher/admin/all`;
  private coreUserUrl = `User?`;
  private coreLogUrl = `/Auth/admin/login`;
  private coreCategory = "Category/admin/all";
  private coreOrders = "/Order/admin/all";
  private coreVariant = "/productvarinats/";

  //Sản phẩm
  async getProductList() {
    try {
      const response = await axiosClient.get(this.coreProductUrl);
      console.log(response);
      if (response.status == 200) {
        return response.data;
      }
    } catch (e) {
      console.log("Lỗi rồi");
      return [];
    }
  }

  async updateProduct(id: string, data: any) {
    try {
      const response = await axiosClient.put(`${this.coreProductUrl}/${id}`, data);
      if (response.status == 200) {
        return response.data;
      }
    } catch (e) {
      console.log("Lỗi rồi");
      return e;
    }
  }

  async updateUser(id: string, data: any) {
    try {
      const response = await axiosClient.put(`${this.coreUserUrl}/${id}`, data);
      if (response.status == 200) {
        return response.data;
      }
    } catch (e) {
      console.log("Lỗi rồi");
      return e;
    }
  }

  // async getProductById(id: string) {
  //   try {
  //     const res = await axiosClient.get(`${this.coreProductUrl}/${id}`);

  //     if (res.status == 200 || res.status == 201) {
  //       return res;
  //     }
  //   } catch (e: any) {
  //     return e.response;
  //   }
  // }

  async getProductVariants(id: string) {
    try {
      const res = await axiosClient.get(`${this.getProductVariants}/${id}/variants`);

      return res.data;
    } catch (e: any) {
      console.log(e);
    }
  }

  async getCategoriesLis() {
    try {
      const res = await axiosClient.get(this.coreCategory);
      if (res.status == 200) {
        return res.data;
      }
    } catch (e) {
      console.log("Lỗi rồi: ", e);
      return [];
    }
  }

  async getOrderList() {
    try {
      const res = await axiosClient.get("order/all");
      if (res.status == 200) {
        console.log(res.data);
        return res.data;
      }
    } catch (e) {
      console.log("Lỗi rồi: ", e);
      return [];
    }
  }

  async getVouchersList() {
    try {
      const response = await axiosClient.get(this.coreVoucerUrl);
      if (response.status == 200) {
        return response.data.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getUserList() {
    try {
      const response = await axiosClient.get("user/customers");
      if (response.status == 200) {
        return response.data.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async createProduct(data: FormData) {
    try {
      const res = await axiosClient.post(this.coreProductUrl, data);

      if (res.status === 200) {
        console.log("Upload thành công:", res);
        return res.data;
      }
    } catch (e) {
      console.log("Lỗi upload:", e);
    }
  }

  async cancelOrder(id: string) {
    try {
      const res = await axiosClient.put(`order/cancel/${id}`);

      if (res.status === 200) {
        console.log("Đã bác bỏ đơn hàng:", res);
        return res.data;
      }
    } catch (e) {
      console.log("Lỗi upload:", e);
    }
  }

  async approveOrder(id: string) {
    try {
      const res = await axiosClient.put(`order/update-status/${id}`, {
        status: "Đã xác nhận",
      });

      if (res.status === 200) {
        console.log("Đã bác bỏ đơn hàng:", res);
        return res.data;
      }
    } catch (e) {
      console.log("Lỗi upload:", e);
    }
  }

  async deleteProduct(id: string) {
    try {
      const res = await axiosClient.delete(`${this.coreProductUrl}/${id}`);

      return res.status;
    } catch (e) {
      console.log(e);
    }
  }

  async login(data: any) {
    try {
      const res = await axiosClient.post(this.coreLogUrl, data);
      if (res.status == 200) {
        console.log(res);
      }
    } catch (e) {}
  }
}
