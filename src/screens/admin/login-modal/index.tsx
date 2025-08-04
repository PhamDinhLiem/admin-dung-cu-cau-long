import { LoginModalWrapper } from "./styled";
import { useState } from "react";
import axios from "axios";

const LoginModal = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function login() {
    try {
      const res = await axios.post("http://localhost:5245/api/Auth/admin/login", {
        phone,
        password,
      });

      if (res.status == 200) {
        console.log("Đăng nhập thành công");
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      // dispatch(...); // Nếu cần lưu state
    } catch (e: any) {
      console.error(e.response?.data);
      setError("Lỗi rồi");
    }
  }

  return (
    <LoginModalWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Vui lòng đăng nhập</h1>
          <p className="text-center text-red-600">{error}</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </LoginModalWrapper>
  );
};

export default LoginModal;
